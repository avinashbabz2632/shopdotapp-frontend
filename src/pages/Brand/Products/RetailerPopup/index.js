import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../images/icons/close-icon.svg';
import addRetaielr from '../../../../assets/images/icons/add_circle.svg';
import remvoeRetaielr from '../../../../assets/images/icons/remove_circle.svg';
import saveIcon from '../../../../assets/images/icons/save.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRetailerListAction,
  updateBrandAssignedRetailers,
} from '../../../../actions/brandActions';
import {
  selectBrandAssignedRetaielrError,
  selectBrandAssignedRetaielrSuccess,
  selectBrandAssignedRetaielrUpdating,
  selectRetailers,
} from '../../../../redux/Brand/Retailer/retailerSelector';
import { resetBrandAssignedRetailerState } from '../../../../redux/Brand/Retailer/retailerSlice';
import { ToastContainer } from 'react-toastify';
import { formatMessage } from '../utils';
import NoDataComponent from '../../retailers/RetailerProfile/NoDataComponent';
export default function RetailerPopup(props) {
  const { handalPopup, retailerBrand, handleOnClose, onShowToast } = props;
  const dispatch = useDispatch();

  const retailers = useSelector(selectRetailers);
  console.log('retailers----', retailers);
  const updating = useSelector(selectBrandAssignedRetaielrUpdating);
  const success = useSelector(selectBrandAssignedRetaielrSuccess);
  const error = useSelector(selectBrandAssignedRetaielrError);

  const { assignedRetailers: assignedArr = [], notAssignedRetailers = []} = retailers || {};

  const [unAssignedRetailers, setUnAssignedRetailers] = useState(notAssignedRetailers);
  const [assignedRetailers, setAssignedRetailers] = useState(assignedArr);
  const newAssignedRetailers = assignedRetailers ? assignedRetailers.length : 0;

  useEffect(() => {
    const body = {
      query: {
        search: {
          product_id: retailerBrand?.id,
        },
      },
    };
    dispatch(getRetailerListAction(body));
  }, []);

  useEffect(() => {
    const { assignedRetailers: assignedArr, notAssignedRetailers } =
      retailers || {};
    setUnAssignedRetailers(notAssignedRetailers);
    setAssignedRetailers(assignedArr);
  }, [retailers]);

  useEffect(() => {
    if (!updating && success && !error) {
      const message = formatMessage(newAssignedRetailers);
      onShowToast && onShowToast(message);
      dispatch(resetBrandAssignedRetailerState());
      handleOnClose();
    } else if (!updating && !success && error) {
      dispatch(resetBrandAssignedRetailerState());
    }
  }, [updating, success, error]);

  const handleSearchRetailer = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    if (searchQuery) {
      const body = {
        query: {
          search: {
            store_name: searchQuery,
            category_id: null,
            product_id: retailerBrand?.id,
          },
        },
      };
      dispatch(getRetailerListAction(body));
    } else {
      const body = {
        query: {
          search: {
            product_id: retailerBrand?.id,
          },
        },
      };
      dispatch(getRetailerListAction(body));
    }
  };

  const assignedSingleRetailer = (item, index) => {
    const copy = [...assignedRetailers];
    copy.push(item);
    setAssignedRetailers(copy);
    const copy2 = [...unAssignedRetailers];
    const filter = copy2.filter((el) => el.id !== item.id);
    setUnAssignedRetailers(filter);
  };

  const assignedAllRetailer = () => {
    const copy = [...notAssignedRetailers, ...assignedArr];
    setAssignedRetailers(copy);
    setUnAssignedRetailers([]);
  };

  const removeSingleRetailer = (item, index) => {
    const copy = [...unAssignedRetailers];
    copy.push(item);
    setUnAssignedRetailers(copy);
    const copy2 = [...assignedRetailers];
    const filter = copy2.filter((el) => el.id !== item.id);
    setAssignedRetailers(filter);
  };
  const removeAllRetailer = () => {
    const copy = [...notAssignedRetailers, ...assignedArr];
    setUnAssignedRetailers(copy);
    setAssignedRetailers([]);
  };

  const handleSave = () => {
    const retailers = assignedRetailers.map((ar) => ar.id);
    const product_id = retailerBrand?.id;
    const data = { retailers, product_ids: [product_id] };
    dispatch(updateBrandAssignedRetailers(data));
  };

  return (
    <>
      <div className="popup my-product-modal pd-retailer-modal">
        <div className="popup_wrapper">
          <div className="popup_content">
            <div className="popup-close" onClick={() => handalPopup()}>
              <img className="icon" src={closeBlackIcon} />
            </div>
            <div className="popup-display pd-retailer active">
              <div className="retailers-tab">
                <div className="action-head">
                  <button
                    className="button button-white cancel"
                    onClick={() => handalPopup()}
                  >
                    Cancel{' '}
                  </button>
                  <button
                    className="button button-orange-dark"
                    onClick={handleSave}
                    disabled={assignedArr?.length === 0 && notAssignedRetailers?.length === 0}
                  >
                    <span className="icon-size">
                      <img src={saveIcon} />
                    </span>
                    Save Changes
                  </button>
                </div>
                <div className="product-title">Allow Product for Retailer</div>

                <div className="products_head-search">
                  <form action="#" className="search_form">
                    <div className="search_form-input">
                      <input
                        type="text"
                        placeholder="Search Retailer"
                        onChange={handleSearchRetailer}
                      />
                    </div>
                    <button type="cancel" className="search_form-button">
                      <svg className="icon"></svg>
                    </button>
                    <button type="submit"></button>
                    <svg className="icon"></svg>
                  </form>
                </div>
                {!retailers || (assignedRetailers && assignedRetailers?.length === 0) &&
                (unAssignedRetailers && unAssignedRetailers?.length === 0) ? (
                  <NoDataComponent
                    fromAssignedUnassignedPage={true}
                    setShowInviteRetailerModal={
                      props?.handleSetShowInviteRetailerModal
                    }
                  />
                ) : (
                  <div className="product-retailer-area">
                    <div className="available-area">
                      <div className="av-title">
                        {unAssignedRetailers && unAssignedRetailers.length}{' '}
                        {unAssignedRetailers && unAssignedRetailers.length === 1
                          ? 'Retailer Available'
                          : 'Retailers Available'}
                      </div>

                      <a
                        onClick={assignedAllRetailer}
                        href="#"
                        className={`add-item-label add-category ${
                          unAssignedRetailers && unAssignedRetailers.length > 0
                            ? ''
                            : 'light-pill'
                        }`}
                      >
                        <span>+</span> Assign All
                      </a>

                      <div className="retailer-box">
                        {unAssignedRetailers &&
                          unAssignedRetailers.length > 0 &&
                          unAssignedRetailers.map((e, i) => (
                            <div className="retailer-area" key={i}>
                              <span
                                id="add_retailer"
                                onClick={() => assignedSingleRetailer(e, i)}
                              >
                                <img src={addRetaielr} />
                              </span>
                              <div className="retailer-item">
                                <div className="ri-photo">
                                  <img src={e?.logo} />
                                </div>
                                <div className="ri-detail">
                                  <h3>{e.store_name}</h3>
                                  <p>
                                    Published to Store Products:{' '}
                                    <span>{e.published_to_store_products}</span>
                                  </p>
                                  <p>
                                    Products Sales:{' '}
                                    <span>{e.all_time_sales}</span>
                                  </p>
                                </div>
                              </div>
                              <div className="retailer-category">
                                <label>Category:</label>
                                <p className="chips-area">
                                  <label>{e.category}</label>
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="assigned-area">
                      <div className="av-title">
                        {assignedRetailers && assignedRetailers.length}{' '}
                        {assignedRetailers && assignedRetailers.length == 1
                          ? 'Retailer Assigned'
                          : 'Retailers Assigned'}
                      </div>
                      <a
                        onClick={removeAllRetailer}
                        href="#"
                        className={`add-item-label add-category ${
                          assignedRetailers && assignedRetailers.length > 0
                            ? ''
                            : 'light-pill'
                        }`}
                      >
                        <span>-</span> Remove All
                      </a>
                      <div className="retailer-box">
                        {assignedRetailers &&
                          assignedRetailers.length > 0 &&
                          assignedRetailers.map((e, i) => (
                            <div className="retailer-area" key={i}>
                              <span
                                id="add_retailer"
                                onClick={() => removeSingleRetailer(e, i)}
                              >
                                <img src={remvoeRetaielr} />
                              </span>
                              <div className="retailer-item">
                                <div className="ri-photo">
                                  <img src="https://placeimg.com/200/200/nature" />
                                </div>
                                <div className="ri-detail">
                                  <h3>{e.store_name}</h3>
                                  <p>
                                    Published to Store Products:{' '}
                                    <span>{e.published_to_store_products}</span>
                                  </p>
                                  <p>
                                    Products Sales:{' '}
                                    <span>{e.all_time_sales}</span>
                                  </p>
                                </div>
                              </div>
                              <div className="retailer-category">
                                <label>Category:</label>
                                <p className="chips-area">
                                  <label>{e.category}</label>
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

RetailerPopup.propTypes = {
  handalPopup: PropTypes.func,
  assignedData: PropTypes.any,
};
