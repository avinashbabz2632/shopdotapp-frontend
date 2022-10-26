import React, { useState } from 'react';
import './styles/onboardStyle.css';
import DynamicHeader from '../common/DynamicHeader';

const PlatformSelectionLayout = ({
  selected,
  radioVal,
  selectedStyle,
  handleChange,
  OtherJsx,
}) => {
  return (
    <>
      <DynamicHeader
        pageTitle="Let's Personalize Your Platform & Experience"
        position="center"
      />
      <div className="container personalise_content_wrapper">
        <div className="personalise__content">
          <div className="text">
            <p>Please tell us more about you.You are a ...</p>
          </div>
          <div className="row gx-5">
            <div className="col-md-6">
              <button
                className=" textcard"
                onClick={() => handleChange('supplier')}
                style={selected == 'supplier' ? selectedStyle : null}
              >
                <div className="cardIcon mb-4"></div>
                <h6
                  style={{ color: selected == 'supplier' ? '#354253' : null }}
                >
                  BRAND SUPPLIER
                </h6>
                <p>
                  I would like to use ShopDot to offer product listing content,
                  on-demand inventory and drop-shipping to my retailers.
                </p>
              </button>
            </div>

            <div className="col-md-6">
              <button
                className="textcard"
                onClick={() => handleChange('retailer')}
                style={selected == 'retailer' ? selectedStyle : null}
              >
                <div className="cardIcon mb-4"></div>
                <h6
                  style={{ color: selected == 'retailer' ? '#354253' : null }}
                >
                  RETAILER
                </h6>
                <p>
                  I would like to use ShopDot to tap into the product listing
                  content, inventory and drop-shipping capabilities of my brand
                  suppliers.
                </p>
              </button>
            </div>
            {selected === 'supplier' && (
              <>
                <div className="col-12 text-left mt-4 mb-2">
                  <label>
                    How do you want to integrate?{' '}
                    <span className="required">*</span>{' '}
                  </label>
                  <p>
                    As a Brand Supplier, ShopDot will sync your products to your
                    retailers using this integration.{' '}
                  </p>
                </div>

                {radioVal === 'other' ? (
                  <OtherJsx />
                ) : (
                  <>
                    <div className="col-md-6">
                      <div
                        className={
                          radioVal === 'shopify'
                            ? 'selectedRadioGroups radioGroups'
                            : 'radioGroups'
                        }
                      >
                        <label>
                          <input
                            value="shopify"
                            type="radio"
                            name="integrate"
                            onChange={(e) => setRadioVal(e.target.value)}
                          />
                          <span className="ms-3">Shopify</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className={
                          radioVal === 'other'
                            ? 'selectedRadioGroups radioGroups'
                            : 'radioGroups'
                        }
                      >
                        <label>
                          <input
                            value="other"
                            type="radio"
                            name="integrate"
                            onChange={(e) => setRadioVal(e.target.value)}
                          />
                          <span className="ms-3">Other</span>
                        </label>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <div className="row">
            {radioVal === 'other' ? (
              <>
                <div className="col-md-6">
                  <button
                    className="backBorderBtn"
                    onClick={() => setRadioVal('')}
                  >
                    Back
                  </button>
                </div>
                <div className="col-md-6">
                  <button type="submit" className="nextButton button">
                    Next
                  </button>
                </div>
              </>
            ) : (
              <div className="col-md-12">
                <button
                  type="submit"
                  className="nextButton button btn"
                  disabled
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformSelectionLayout;
