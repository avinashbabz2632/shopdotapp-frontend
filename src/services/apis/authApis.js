import { toast } from 'react-toastify';
import axios from '../../utils/axios';
import { LOGOUT } from '../../constants/api';

export class AuthApiService {
  static signOut = async ({ fromData }) => {
    try {
      const response = await axios.post(LOGOUT, fromData);

      if (response && response.data && response.data.code == 200) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        return true;
      }
      toast.error('Something went worng');
      return false;
    } catch (err) {
      toast.error(
        err && err.response && err.response.data && err.response.data.errors
          ? err.response.data.errors
          : 'Something went worng'
      );
      return false;
    }
  };
}
