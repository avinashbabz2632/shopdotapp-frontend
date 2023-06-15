import React from 'react';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../images/icons/close-icon.svg';
import downArrow from '../../images/icons/icon-chevron--down.svg';
import stockRedAlert from '../../../../assets/images/icons/red-warning.svg';
import stockYellowAlert from '../../../../assets/images/icons/yellow-warning.svg';
import saveIcon from '../../../../assets/images/icons/save.svg';
import info from '../../../../assets/images/icons/info-blue.svg';
import logoPng from '../../../../assets/images/logos/logo-png.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { cloneDeep, map } from 'lodash';

export default function PopupModal(props) {
  const { variantdata, handalPopup, handleVarient } = props;
  const [updateData, setUpdateData] = useState([]);

  useEffect(() => {
    setUpdateData(variantdata);
  }, []);

  const handleTextChange = (e, key, typeKey) => {
    let updateArray = cloneDeep(updateData);
    updateArray[key][typeKey] = e.target.value;
    setUpdateData(updateArray);
  };

  const handleSave = async () => {
    let currentData = [];
    await map(updateData, (d, key) => {
      let data = {
        sku: d.sku,
        msrp: d.price,
        wsp: d.wsp,
        status: d.status,
        id: d.id,
      };
      currentData.push(data);
    });
    handleVarient({
      product_id: updateData?.[0]?.product_id,
      product_variant: currentData,
    });
  };

  return (
    <div className="popup my-product-modal active">
      <div className="popup_wrapper">
        <div className="popup_content">
          <div className="popup-close" onClick={() => handalPopup()}>
            <img className="icon" src={closeBlackIcon} />
          </div>
          <div className="popup-display pd-varient active">
            <div className="retailers-tab">
              <div className="action-head">
                <button
                  onClick={() => handalPopup()}
                  className="button button-white cancel"
                >
                  Cancel{' '}
                </button>
                <button
                  onClick={handleSave}
                  className="button button-orange-dark"
                >
                  <span className="icon-size">
                    <img src={saveIcon} className="icon" />
                  </span>
                  Save Changes
                </button>
              </div>
              <div className="product-varient">
                Product Varients
                <a href="" className="vp-details">
                  View Product Details
                </a>
              </div>
              <div className="v-table pv-update">
                <table className="table table-vars">
                  <thead className="sticky-thead">
                    <tr>
                      <th></th>
                      <th>
                        <div className="txt">
                          Material
                          <button className="sort">
                            <img src={downArrow} />
                          </button>
                        </div>
                      </th>
                      <th>
                        <div className="txt">
                          Color
                          <button className="sort">
                            <img src={downArrow} />
                          </button>
                        </div>
                      </th>
                      <th>
                        <div className="txt">
                          SKU
                          <button className="sort">
                            <img src={downArrow} />
                          </button>
                        </div>
                      </th>
                      <th>
                        <div className="txt">
                          Barcode
                          <div className="tooltip">
                            <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                              <img src={info} />
                            </div>
                            <div className="tooltip_text">
                              <p>ISBN, UPC, GTIN, ...</p>
                            </div>
                          </div>
                        </div>
                      </th>
                      <th>
                        <div className="txt">
                          Stock
                          <div className="tooltip link-tooltip">
                            <div className="tooltip-icon tooltip-icon-info sync-icon">
                              <img src={info} />
                            </div>
                            <div className="tooltip_text">
                              <div className="tooltip-data">
                                <p>
                                  The inventory published within ShopDot is
                                  based on the inventory from your Shopify store
                                  x the inventory buffer that you set under
                                  Settings-Preferences.
                                </p>
                              </div>
                            </div>
                          </div>
                          <button className="sort">
                            <img src={downArrow} />
                          </button>
                        </div>
                      </th>
                      <th>
                        <div className="txt">
                          WSP
                          <div className="tooltip link-tooltip">
                            <div className="tooltip-icon tooltip-icon-info sync-icon">
                              <img src={info} />
                            </div>
                            <div className="tooltip_text">
                              <div className="tooltip-data">
                                <p>
                                  WSP stands for Wholesale Price. This is the
                                  price that retailers pay brands.
                                </p>
                              </div>
                            </div>
                          </div>
                          <button className="sort">
                            <img src={downArrow} />
                          </button>
                        </div>
                      </th>
                      <th>
                        <div className="txt">
                          MSRP
                          <button className="sort">
                            <img src={downArrow} />
                          </button>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="scroll-table">
                    {updateData.map((e, i) => (
                      <tr key={i}>
                        <td>
                          <div className="image image--cover image--1-1">
                            <picture>
                              <img
                                src={e.image ? e.image : logoPng}
                                alt="V Img"
                              />
                            </picture>
                          </div>
                        </td>
                        <td>
                          <div className="txt">{e.size}</div>
                        </td>
                        <td>
                          <div className="txt">{e.title}</div>
                        </td>
                        <td>
                          <div className="txt">{e.sku}</div>
                        </td>
                        <td>
                          <div className="txt">{e.barcode}</div>
                        </td>
                        <td>
                          <div className="txt">
                            {e.inventory_quantity}
                            {+e.inventory_quantity == 0 ? (
                              <img src={stockRedAlert} />
                            ) : +e.inventory_quantity < 10 ? (
                              <img src={stockYellowAlert} />
                            ) : null}
                          </div>
                        </td>
                        <td>
                          <div className="txt">
                            <input
                              type="text"
                              className="tabel-text"
                              placeholder="$00.00"
                              value={e.wsp}
                              onChange={(event) => {
                                handleTextChange(event, i, 'wsp');
                              }}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="txt">
                            <input
                              type="text"
                              className="tabel-text"
                              placeholder="$00.00"
                              value={e.price}
                              onChange={(event) => {
                                handleTextChange(event, i, 'price');
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PopupModal.propTypes = {
  variantdata: PropTypes.any,
  handalPopup: PropTypes.func,
};
