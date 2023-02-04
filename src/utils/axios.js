import request from 'axios';
import { REFRESH_TOKEN, LOGOUT, SIGN_IN, REGISTER } from '../constants/api';

const axios = request;

axios.interceptors.request.use(
  async (config) => {
    // if (!config.baseURL) {
    //   axios.defaults.baseURL = BASE_URL;
    //   config.baseURL = BASE_URL;
    // }

    if (!config.headers.Authorization) {
      const token = await localStorage.getItem('accessToken');

      axios.defaults.headers.common.Authorization = token
        ? `Bearer ${token}`
        : '';
      config.headers.Authorization = `Bearer ${token}`;
      config.maxRedirects = 0;
    }
    return config;
  },

  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(async (response) => {
  if (response.config.url === SIGN_IN || response.config.url === REGISTER) {
    const token = response.data.data['access_token']
      ? response.data.data['access_token']
      : '';
    const refreshToken = response.data.data['refresh_token']
      ? response.data.data['refresh_token']
      : '';
    axios.defaults.headers.common.Authorization = token
      ? `Bearer ${token}`
      : '';
    try {
      await localStorage.setItem('accessToken', token);
      await localStorage.setItem('refreshToken', refreshToken);
    } catch (error) {}
  }
  return response;
});

let requestQueue = [];
let isGenratingNewToken = false;

axios.interceptors.response.use(undefined, async (error) => {
  if (
    error.response &&
    error.response.config &&
    error.response.config.url === REFRESH_TOKEN &&
    error.response.status == 401
  ) {
    // responseToast(error);
    setTimeout(async () => {
      await localStorage.setItem('accessToken', '');
      await localStorage.setItem('refreshToken', '');
    }, 2000);
  } else if (error.response && error.response.status == 401) {
    const refreshToken = localStorage.getItem('refreshToken');

    const data = {
      refresh_token: refreshToken,
    };
    requestQueue.push(error.config);
    return new Promise(async (resolve, reject) => {
      if (!isGenratingNewToken) {
        isGenratingNewToken = true;
        delete axios.defaults.headers.common['Authorization'];
        axios
          .post(REFRESH_TOKEN, data, {
            headers: { 'content-type': 'application/json' },
          })
          .then(async (response) => {
            axios.defaults.headers.common[
              'Authorization'
            ] = `Bearer ${response.data.data.access_token}`;

            await localStorage.setItem(
              'accessToken',
              response.data.data.access_token
            );
            await localStorage.setItem(
              'refreshToken',
              response.data.data.refresh_token
            );

            requestQueue.map(async (req, key) => {
              requestQueue[
                key
              ].headers.Authorization = `Bearer ${response.data.data.access_token}`;
              if (req.url == LOGOUT) {
                let newData = JSON.parse(req.data);

                await localStorage.setItem('accessToken', '');
                await localStorage.setItem('refreshToken', '');

                req.data = JSON.stringify(newData);
              }
              axios(req)
                .then((res) => resolve(res))
                .catch((err) => {
                  reject(err);
                });
            });
            isGenratingNewToken = false;
            requestQueue = [];
          })
          .catch((error) => {
            responseToast(error);
            setTimeout(async () => {
              await localStorage.setItem('accessToken', '');
              await localStorage.setItem('refreshToken', '');
              //   window.location.href = '/SIGN_IN';
            }, 2000);
            if (error.response.status === 500) {
              null;
            } else {
              return error;
            }
          });
      }
    });
  } else if (
    error.response &&
    error.response.data &&
    error.response.data.location
  ) {
    window.location = error.response.data.location;
  } else if (
    error.response &&
    error.response.status == 401 &&
    error.response.data.code != 904
  ) {
    // location.reload();
  } else {
    return Promise.reject(error);
  }
});

export default axios;
