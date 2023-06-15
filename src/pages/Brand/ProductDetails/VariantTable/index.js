import React from 'react';
import PropTypes from 'prop-types';
import info1 from '../../images/icons/icon-info-red.svg';
import down from '../../images/icons/icon-chevron--up.svg';
import logoPng from '../../../../assets/images/logos/logo-png.png';

export default function ProductVariantTable(props) {
  const { productVariant } = props;
  return (
    <div className="product_vars pv-update" id="vars">
      <div className="product_extra-head">
        <h3>Product Variants</h3>
      </div>
      <table className="table table-vars">
        <thead>
          <tr>
            <th></th>
            <th>
              <div className="txt">
                Material
                <button className="sort">
                  <img className="icon-info-down" src={down} />
                </button>
              </div>
            </th>
            <th>
              <div className="txt">
                Color
                <button className="sort">
                  <img className="icon-info-down" src={down} />
                </button>
              </div>
            </th>
            <th>
              <div className="txt">
                SKU
                <button className="sort">
                  <img className="icon-info-down" src={down} />
                </button>
              </div>
            </th>
            <th>
              <div className="txt">
                Barcode{' '}
                <div className="tooltip">
                  <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                    <img className="icon-info" src={info1} />
                  </div>
                  <div className="tooltip_text">
                    <p>ISBN, UPC, GTIN, …</p>
                  </div>
                </div>
              </div>
            </th>
            <th>
              <div className="txt">
                Stock
                <div className="tooltip">
                  <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                    <img className="icon-info" src={info1} />
                  </div>
                  <div className="tooltip_text">
                    <p>
                      The inventory published within ShopDot is based on the
                      inventory from your Shopify store x the inventory buffer
                      that you set under Settings-Preferences.
                    </p>
                  </div>
                </div>
                {/* <div className="tooltip link-tooltip">
                                    <div className="tooltip-icon tooltip-icon-info sync-icon product-sync-icon-off">
                                        <a href="#">
                                        <img className="icon-info" />
                                        </a>
                                    </div>
                                    <div className="tooltip_text">
                                        <div className="tooltip-data">
                                            <p>
                                                Stock Sync is OFF. Turn it on if
                                                you want Stock Levels in ShopDot
                                                to automatically sync from
                                                Shopify. Your previous changes
                                                will be overridden
                                            </p>
                                            <a
                                                href="#"
                                                className="tooltip-setting"
                                            >
                                                settings
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                <button className="sort">
                  <img className="icon-info-down" src={down} />
                </button>
              </div>
            </th>
            <th>
              <div className="txt">
                WSP{' '}
                <div className="tooltip">
                  <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                    <img className="icon-info" src={info1} />
                  </div>
                  <div className="tooltip_text">
                    <p>
                      WSP stands for Wholesale Price. This is the price that
                      retailers pay brands.
                    </p>
                  </div>
                </div>{' '}
                <button className="sort">
                  <img className="icon-info-down" src={down} />
                </button>
              </div>
            </th>
            <th>
              <div className="txt">
                MSRP
                <button className="sort">
                  <img className="icon-info-down" src={down} />
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {productVariant.map((ele, i) => (
            <tr key={i}>
              <td>
                <div className="image image--cover image--1-1">
                  <picture>
                    <img src={ele?.image ?? logoPng} alt="" />
                  </picture>
                </div>
              </td>
              <td>
                <div className="txt">{ele?.material} </div>
              </td>
              <td>
                <div className="txt">{ele?.color} </div>
              </td>
              <td>
                <div className="txt">{ele?.sku} </div>
              </td>
              <td>
                <div className="txt">{ele.barcode} </div>
              </td>
              <td>
                <div className="txt">{ele?.inventory_quantity} </div>
              </td>
              <td>
                <div className="txt">{ele?.wsp} </div>
              </td>
              <td>
                <div className="txt">{ele?.price} </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ProductVariantTable.propTypes = {
  productVariant: PropTypes.any,
};
