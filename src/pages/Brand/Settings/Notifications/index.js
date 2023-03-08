import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import InfoIcon from '../../images/icons/info.svg';
import Switch from 'react-switch';
import { useDispatch, useSelector } from 'react-redux';
import { updateNotificationAction } from '../../../../actions/userActions';
import { selectUserDetails } from '../../../../redux/user/userSelector';

const defaultValues = {
  isNotification: true,
};

export default function BrandNotification() {
  const { register, handleSubmit, reset, control } = useForm({
    mode: 'onChange',
    defaultValues,
  });
  const dispatch = useDispatch();
  const useDetails = useSelector(selectUserDetails);

  const onSubmit = (data) => {
    dispatch(
      updateNotificationAction({
        brand_id: useDetails.id,
        newOrder: data.isNotification ? 1 : 0,
        stockWarning: data.lowStock,
      })
    );
  };

  return (
    <div className="pc_tabs-content tabs_body">
      <div className="tab active" data-target="AlertsNotifications">
        <div className="products_content">
          <div className="products_head mp-head">
            <div className="products_head-content">
              <div className="title">
                <h1>Notifications</h1>
              </div>
            </div>
          </div>
          <div className="products_body">
            <div className="content_area">
              <div id="alerts">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="alerts_info">
                    <h2>Email Notifications</h2>
                    <div className="form-area">
                      <div className="form-input">
                        <h4>Email me when:</h4>
                      </div>
                      <div className="form-input retailer_access-item flex_start mt-4">
                        <div className="alert-access">
                          <h4>There is a new order</h4>
                        </div>
                        <div className="my-toggle-btn">
                          <Controller
                            control={control}
                            name="isNotification"
                            render={({
                              field: { onChange, onBlur, value, name, ref },
                            }) => (
                              <>
                                <Switch
                                  onChange={onChange}
                                  handleDiameter={18}
                                  uncheckedIcon={false}
                                  checkedIcon={false}
                                  height={20}
                                  width={48}
                                  className="react-switch"
                                  checked={value}
                                />
                              </>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="alerts_info mt-5">
                    <h2>Low Stock Level Warnings</h2>
                    <div className="form-area">
                      <div className="form-input retailer_access-item mt-2">
                        <div className="alert-access alert-flex">
                          <h4>
                            Show Orange flag at product level when product stock
                            is below:
                          </h4>
                          <div className="tooltip">
                            <div className="tooltip-icon">
                              <img className="icon" src={InfoIcon} />
                            </div>
                            <div className="tooltip_text">
                              <p className="mb-0">
                                This alert indicator applies to both product and
                                variant levels.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-input retailer_access-item mt-2">
                        <input
                          name="lowStock"
                          type={'number'}
                          className="form-control w-50 sd-input"
                          placeholder="10"
                          {...register('lowStock', {
                            required: false,
                          })}
                        />
                      </div>
                    </div>
                    <div className="form-area"></div>
                    <div className="form-area">
                      <div className="form-input form-submit mt-4">
                        <button
                          onClick={() => reset()}
                          className="button button-grey cancel"
                        >
                          Cancel
                        </button>
                        <button type="submit" className="button">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
