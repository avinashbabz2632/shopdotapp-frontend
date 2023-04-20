import React from 'react';
import Button from '../../../../components/common/Button';
import tickIcon from '../../../../assets/images/icons/tick.svg';
import tickGreenIcon from '../../../../assets/images/icons/tick-green.svg';
import '../../../Brand/Style/brand.style.scss';
import '../../../Brand/Style/brand.dev.scss';
import '../../../Brand/Style/brand.media.scss';
import { LinkMod } from '../../../../components/common/A';

export default function OnboardListUI({
  isActive,
  isCompleted,
  text1,
  linkText,
  text2,
  btnText,
  openGuide,
  storeName,
  isStoreNameValid,
  handleConnect,
  guideLink,
  handleStore,
  shopifyConnected,
  btnCallback,
}) {
  return (
    <div
      className={`confirm-setting-area ${
        isActive || isCompleted ? '' : 'light-item'
      }`}
    >
      <div
        className={`cs-item ${isActive || isCompleted ? '' : 'pointer-none'}`}
      >
        {isCompleted ? (
          <img src={tickGreenIcon}></img>
        ) : (
          <img src={tickIcon}></img>
        )}
        <span href="" className="cs-label">
          {text1} &nbsp;
          <LinkMod className="ob-link" to={'/brand/setting/'}>
            {linkText}
          </LinkMod>
          {text2}
        </span>
        {btnText ? (
          <button
            type="button"
            onClick={btnCallback}
            className="button button-blue"
          >
            {btnText}
          </button>
        ) : (
          <div />
        )}
        <a href={guideLink} target="_blank" className="cs-link">
          Setup Guide
        </a>
      </div>
      {openGuide && (
        <div className="integration_info">
          <div className="form-area form-input connect-shopify">
            <input
              type="text"
              className="form-control mb-0"
              id=""
              placeholder=""
              onChange={handleStore}
            />
            <span className="input-extension">.myshopify.com</span>
            <Button
              className="button p-0 connect_shopify"
              type="button"
              disabled={
                !isStoreNameValid && storeName.length > 0 ? false : true
              }
              id="button-addon2"
              onClick={() => {
                if (!isStoreNameValid) {
                  handleConnect(2);
                }
              }}
            >
              Connect
            </Button>
          </div>
          <small>Enter the name of your store without myshopify.com</small>
          {isStoreNameValid && (
            <div className="invalid-feedback mb-0">
              Please only enter the name of your store
            </div>
          )}
        </div>
      )}
      {shopifyConnected && (
        <div className="input-group form-input">
          <div className="alert alert-success" role="alert">
            {storeName} is connected
          </div>
        </div>
      )}
    </div>
  );
}
