import React, { useEffect, useState } from 'react';
import Switch from 'react-switch';
import { useDispatch, useSelector } from 'react-redux';
import { updateNotificationAlertAction } from '../../../../actions/retailerActions';
import { selectBrandProfileDetails } from '../../../../redux/Brand/Profile/brandProfileSelectors';
import { ToastContainer } from 'react-toastify';

export default function RetailerNotification() {
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const brandProfileDetails = useSelector(selectBrandProfileDetails);
  const {retailer_details} = brandProfileDetails || {};
  const { alert_notification } = retailer_details || {};

  useEffect(() => {
      if(alert_notification) {
          setChecked(alert_notification);
      }
  }, []);

  useEffect(() => {
    dispatch(
      updateNotificationAlertAction({
        notification: checked,
      })
    );
  }, [checked]);

  return (
      <>
    <div className="products_content">
      <div className="products_body">
        <div className="content_area">
          <div id="alerts">
            <div className="alerts_info">
              <h2 className="heading">Notifications</h2>
              <div className="form-area">
                <div className="form-input">
                  <h4>Email me when:</h4>
                </div>
                <div className="form-input retailer_access-item flex_start mt-4">
                  <div className="alert-access">
                    <h4>There is a new order</h4>
                  </div>
                  <div className="my-toggle-btn">
                    <Switch
                      handleDiameter={18}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      height={20}
                      width={48}
                      className="react-switch"
                      onChange={setChecked}
                      checked={checked}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer />
    </>
  );
}
