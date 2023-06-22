import React, { useState } from 'react';
import '../Style/brand.style.scss';
import '../Style/brand.media.scss';
import '../Style/brand.dev.scss';
import BrandHeader from '../common/components/BrandHeader';
import ProductsFilters from './ProductsFilter';
import ProductTable from './ProductTable';
import iconClose from '../../../assets/images/icons/info-blue.svg';
import { ToastContainer } from 'react-toastify';

export default function ProductsList() {
  const [actionDes, setActionDes] = useState('');
  const [toasterVisible, setToasterVisible] = useState(false);
  const [toaserMessage, setToasterMessage] = useState('');

  const handleAction = (type, howMuch) => {
    if (type == 'active') {
      setActionDes(`${howMuch} product are set to Active status`);
    } else {
      setActionDes(`${howMuch} products are set to Inactive status`);
    }
    setToasterVisible(true);
    setTimeout(() => {
      setToasterVisible(false);
    }, 5000);
  };

  const onShowToast = (message) => {
    setToasterMessage(message);
    setToasterVisible(true);
  }

  const onCloseToaster= () => {
    setToasterMessage('');
    setToasterVisible(false);
  } 

  return (
    <div className="wrapper">
      <BrandHeader />
      <main className="content mp-content">
        <section className="section products mp-section">
          <ProductsFilters />
          <ProductTable handleAction={handleAction} onShowToast={onShowToast} />
        </section>
      </main>
      {toasterVisible && (
        <div className="bottom-notify active">
          <div className="container">
            <div className="bottom-notify_text">
              <p>{toaserMessage}</p>
            </div>
          </div>
          <div className="bottom-notify-close" onClick={onCloseToaster}>
            <svg className="close-icon">
              <img src={iconClose} />
            </svg>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
