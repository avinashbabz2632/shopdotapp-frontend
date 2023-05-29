import React, { useCallback, useEffect, useState } from 'react';
import info from '../../images/exclamation-mark.png';
import { yupResolver } from '@hookform/resolvers/yup';
import { retailerBillingValidationSchema } from '../ValidationSchema';
import { Controller, useForm } from 'react-hook-form';
import closeIcon from '../../../../assets/images/icons/icon-newclose.svg';
import Select from 'react-select';
import RetailerConfirmationModel from '../../common/components/RetailerConfirmationModel';
import empty from '../../images/product-card-empty.png';
import {
  categoryStyle,
  stateIncorporationOptions,
} from '../../../Brand/common/utils/utils';
import RemoveModel from '../../common/components/RemoveModel';
import remove from '../../../../assets/images/icons/icon-remove.svg';
import Add from '../../../../assets/images/icons/icon-plus.svg';
import {
  addBillingDetailsAction,
  getBillingAction,
} from '../../../../actions/retailerActions';
import { ToastContainer, toast } from 'react-toastify';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import { selectStates } from '../../../../redux/General/States/getStatesSelector';

export default function Billing() {
  const [addCredit, setAddCredit] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isConfirmModel, setIsConfirmModel] = useState(false);
  const [isRemoveModel, setIsRemoveModel] = useState(false);
  const [dataArray, setDataArray] = useState([]);
  const [showError, setShowError] = useState('');
  const [billList, setBillList] = useState([]);

  const statesOption = useSelector(selectStates);
  let transformStatesOption = [];
  if (statesOption && statesOption.length > 0) {
    transformStatesOption = statesOption?.map((el) => {
      return { label: el.name, value: el.country_id };
    });
  }

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(retailerBillingValidationSchema),
  });

  useEffect(() => {
    initialAction();
  }, []);

  const initialAction = async () => {
    const response = await getBillingAction();
  };

  const onSubmit = async (data) => {
    const newDataArray = [...dataArray, data];
    console.log(data, 'data');
    const formData = {
      legal_name: data.nameOnCard,
      cardNumber: data.cardNumber,
      cvv: data.cvv,
      brand: 'VISA',
      expiryMonth: '08',
      expiryYear: '2023',
      address_line_1: data.addressLine1,
      city: data.city,
      state: getDefaultValueOfStateField(),
      zip: data.zip,
      billing_method: 'CARD',
    };
    const response = await addBillingDetailsAction(formData);
    if (response.status === 200) {
      setAddCredit(false);
      setShowError('');
    } else {
      setShowError(
        response && response.data && response.data.errors
          ? response.data.errors
          : 'Something went worng'
      );
    }
    // setDataArray(newDataArray);
    // reset();
    // setAddCredit(false);
    // setIsOpen(true);
    // setTimeout(() => {
    //   setIsOpen(false);
    // }, 3000);
  };

  const getDefaultValueOfStateField = () => {
    let option = null;

    if (transformStatesOption && transformStatesOption.length > 0) {
      option = transformStatesOption[0].value;
    }
    return JSON.stringify(option);
  };

  const handleConfirmModelClose = useCallback(() => {
    setIsConfirmModel(false);
  }, [isConfirmModel]);
  const handleRemoveModelClose = useCallback(() => {
    setIsRemoveModel(false);
  }, [isRemoveModel]);

  return addCredit === true ? (
    <div className="products_content">
      <div className="products_body">
        <div className="content_area">
          <div id="billing">
            <div className="billing_info">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="heading">Add New Credit Card</h2>
                {!isEmpty(showError) ? (
                  <div
                    className="alert alert-error sd_alert-error"
                    role="alert"
                  >
                    <img src={info} className="info-icon" />

                    <span>{showError}</span>
                  </div>
                ) : (
                  <div />
                )}
                <div className="form-area">
                  <div className="form-input return_select-item">
                    <div className="radio-data-info">
                      <div className="form-input mb-4">
                        <label htmlFor="" className="form-label">
                          Card number
                        </label>
                        <input
                          type="number"
                          className="form-control mb-0"
                          id=""
                          placeholder="4242424242424242"
                          name="cardNumber"
                          {...register('cardNumber', {
                            required: true,
                          })}
                        />
                        {errors?.cardNumber && (
                          <span className="error-text">
                            {errors?.cardNumber?.message}
                          </span>
                        )}
                      </div>

                      <div className="category-form-input">
                        <div className="form-input mb-4">
                          <label className="form-label">Expiry date</label>
                          <input
                            type="text"
                            className="form-control mb-0"
                            id=""
                            placeholder="MM/YY"
                            name="expiryDate"
                            {...register('expiryDate', {
                              required: true,
                            })}
                          />
                          {errors?.expiryDate && (
                            <span className="error-text">
                              {errors?.expiryDate?.message}
                            </span>
                          )}
                        </div>
                        <div className="form-input mb-4">
                          <label className="form-label">CVV</label>
                          <input
                            type="text"
                            className="form-control mb-0"
                            placeholder="100"
                            maxLength={3}
                            name="cvv"
                            {...register('cvv', {
                              required: true,
                            })}
                          />
                          {errors?.cvv && (
                            <span className="error-text">
                              {errors?.cvv?.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="form-input mb-4">
                        <label className="form-label">Name on card</label>
                        <input
                          type="text"
                          className="form-control mb-0"
                          id=""
                          placeholder="Jack"
                          name="nameOnCard"
                          {...register('nameOnCard', {
                            required: true,
                          })}
                        />
                        {errors?.nameOnCard && (
                          <span className="error-text">
                            {errors?.nameOnCard?.message}
                          </span>
                        )}
                      </div>
                      <div className="form-input mb-4">
                        <label className="form-label">Address Line1</label>
                        <input
                          type="text"
                          className="form-control mb-0"
                          placeholder="99 Apartment"
                          name="addressLine1"
                          {...register('addressLine1', {
                            required: true,
                          })}
                        />
                        {errors?.addressLine1 && (
                          <span className="error-text">
                            {errors?.addressLine1?.message}
                          </span>
                        )}
                      </div>
                      <div className="category-form-input">
                        <div className="form-input mb-4">
                          <label className="form-label">City</label>
                          <input
                            type="text"
                            className="form-control mb-0"
                            placeholder="San Jose"
                            name="city"
                            {...register('city', {
                              required: true,
                            })}
                          />
                          {errors?.city && (
                            <span className="error-text">
                              {errors?.city?.message}
                            </span>
                          )}
                        </div>
                        <div className="form-input">
                          <label className="form-label">State</label>
                          <Controller
                            name={'state'}
                            control={control}
                            render={({ field }) => (
                              <Select
                                {...field}
                                className="basic-single_top"
                                classNamePrefix="select"
                                placeholder="Select State"
                                styles={categoryStyle}
                                components={{
                                  IndicatorSeparator: () => null,
                                }}
                                theme={(theme) => ({
                                  ...theme,
                                  colors: {
                                    ...theme.colors,
                                    primary25: '#fbf5f0',
                                    primary: '#bd6f34',
                                  },
                                })}
                                options={transformStatesOption}
                              />
                            )}
                          />
                          {errors?.state && (
                            <span className="error-text">
                              {errors?.state?.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="category-form-input">
                        <div className="form-input mb-4">
                          <label className="form-label">Zip</label>
                          <input
                            type="text"
                            className="form-control mb-0 w-50"
                            placeholder="43211"
                            name="zip"
                            {...register('zip', {
                              required: true,
                            })}
                          />
                          {errors?.zip && (
                            <span className="error-text">
                              {errors?.zip?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-area">
                  <div className="form-input form-submit">
                    <button
                      className="button button-grey cancel"
                      onClick={() => setAddCredit(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="button confirmation-window-modal-action"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  ) : (
    <>
      <div className="products_content">
        <div className="products_head mp-head">
          <div className="products_head-content">
            <div className="title">
              <h1>Billing</h1>
            </div>
          </div>
        </div>
        <div className="products_body">
          <div className="content_area">
            <div id="billing">
              <div className="user_info">
                <h2>Billing Method</h2>
                {/* <button
                                    className="button button-border add-user"
                                    onClick={() => setAddCredit(true)}
                                >
                                    <h3>+</h3> Add New Credit Card
                                </button> */}
                <button
                  className="button button-border add-user"
                  onClick={() => setAddCredit(true)}
                >
                  <span className="plus-icon-sm plus_icon">
                    <div className="icon">
                      <img
                        src={Add}
                        alt="AddIcon"
                        style={{
                          maxWidth: '17px',
                          height: '17px',
                        }}
                      />
                    </div>
                  </span>
                  Add New Credit Card
                </button>
                <div className="note-flex">
                  <p>
                    Choose a billing method that will be used for order
                    processing.
                  </p>
                </div>
                {dataArray?.length > 0 ? (
                  <div className="content_area">
                    <div className="form-area-cstm pe-billing">
                      <div className="form-input return_select-item choose-billing-method">
                        <div className="billing-method-item">
                          <label className="radiobox radio-click">
                            <input
                              type="radio"
                              name="radio-billing-method"
                              id="radio-billing-direct"
                              checked
                            />
                            <div className="radiobox-text">
                              <span>
                                Visa card ending with 5487
                                <div className="exp-date">Exp. Date 12/25</div>
                              </span>

                              <span className="status-pill pill_black">
                                Default
                              </span>
                            </div>
                          </label>
                        </div>
                        <div className="billing-method-item">
                          <label className="radiobox radio-click">
                            <input type="radio" name="radio-billing-method" />
                            <div className="radiobox-text">
                              <span>
                                Maestro card ending with 5400
                                <div className="exp-date">Exp. Date 06/24</div>
                              </span>
                              <button
                                className="billing-default make-default-action link_button_a"
                                onClick={() => setIsConfirmModel(true)}
                              >
                                Set as default
                              </button>
                              <button
                                onClick={() => setIsRemoveModel(true)}
                                className="delete-action card-remove-action link_button_a"
                              >
                                <span>
                                  <img
                                    style={{
                                      maxWidth: '13px',
                                      height: '14px',
                                      margin: '-1px 0px 1px -4px',
                                    }}
                                    src={remove}
                                  />
                                </span>
                              </button>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="empty_body">
                    <div className="empty_image">
                      <div className="image">
                        <img src={empty} />
                      </div>
                    </div>
                    <div className="empty_text">
                      <p>You don&apos;t have any listed billing methods.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {isOpen && dataArray?.length > 0 && (
          <div className="bottom-notify active">
            <div className="container">
              <div className="bottom-notify_text">
                <p>Credit card has been successfully added.</p>
              </div>
            </div>
            <div className="bottom-notify-close">
              <img
                src={closeIcon}
                alt="email"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
      <RetailerConfirmationModel
        modalIsOpen={isConfirmModel}
        closeConfirmationModal={handleConfirmModelClose}
      />
      <RemoveModel
        modalOpen={isRemoveModel}
        closeRemoveModal={handleRemoveModelClose}
      />
      <ToastContainer />
    </>
  );
}
