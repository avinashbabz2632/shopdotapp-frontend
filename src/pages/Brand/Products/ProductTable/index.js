/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import searchIcon from '../../images/icons/icon-search.svg';
import closeIcon from '../../images/icons/icon-close.svg';
import closeBlackIcon from '../../images/icons/close-icon.svg';
import clearIcon from '../../images/icons/icon-clear.svg';
import InfoIcon from '../../../../assets/images/icons/info-blue.svg';
import DownIcon from '../../images/icons/icon-chevron--down.svg';
import RightIcon from '../../images/icons/icon-chevron--right.svg';
import LeftIcon from '../../images/icons/icon-chevron--left.svg';
import MoreIcon from '../../images/icons/icon-more.svg';
import emptyTable from '../../images/product-card-empty.svg';
import { Datas } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { selectProductFilter, selectProduct } from '../../../../redux/Brand/Products/productSelectors';
import {
  resetToInitial,
  productTagClear,
  productCatClear,
  stockClear,
  setProductFilter,
  statusViseClear,
  setPaginationLimit,
  setPaginationPage,
  setProductStatus
} from '../../../../redux/Brand/Products/productSlice';
import { filter, fromPairs, isEmpty } from 'lodash';
import PopupModal from '../Popupmodal';
import CategoryTagPopupModal from '../CategoryTagPopup';
import RetailerPopup from '../RetailerPopup';
import stockRedAlert from '../../../../assets/images/icons/red-warning.svg';
import stockYellowAlert from '../../../../assets/images/icons/yellow-warning.svg';
import convertNumberToArray from '../../../../utils/convertNumberToArray';
import { productStatus } from '../../../../constants/constants';
import { uploadProductList } from '../../../../actions/productActions';

export default function ProductTable(props) {
  const dispatch = useDispatch();
  const productFilter = useSelector(selectProductFilter);
  const brandProduct = useSelector(selectProduct);
  // const [brandProduct.productList, setData] = useState(brandProduct.productList);
  const [productTagStus, setProductTagStus] = useState([]);
  const [productCatStus, setProductCatStus] = useState([]);
  const [productStatusViseData, setProductStatusViseData] = useState([]);
  const [stockStus, setStockStus] = useState([]);
  const [height, setHeight] = useState(0);
  const [uploadModalShow, setUploadModalShow] = useState(false);
  const [uploadFile, setUploadFile] = useState('');
  const [error, setError] = useState('');
  const [variantdata, setVariantdata] = useState('');
  const [variantshoePopup, setShowVariantPopup] = useState(false);
  const [categoryTagPopup, setCategoryTagPopup] = useState(false);
  const [typeOfTag, setTypeOfTag] = useState('');
  const [retailerPopup, setRetailerPopup] = useState(false);
  const [productFilterData, setProductFilterData] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [categoryTagData, setCategoryTagData] = useState([]);
  const [assignedRetailer, setAssignedRetailer] = useState();
  const [checkAll, setCheckAll] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);
  const [productId, setProductId] = useState('');

  useEffect(() => {
    const otherDivs =
      document.querySelector('.header').offsetHeight +
      document.querySelector('.products_head').offsetHeight +
      document.querySelector('.products_active-filters').offsetHeight +
      document.querySelector('.pagination').offsetHeight +
      (document.querySelector('.my_list-body').offsetHeight -
        document.querySelector('.my_list-body').clientHeight);
    setHeight(window.innerHeight - otherDivs - 68);
  }, []);

  useEffect(() => {
    const newArr = brandProduct.productList.filter((item) => {
      return item.checked == true;
    });
    const isActionShow = newArr.length >= 2 ? newArr.length : 0;
    setShowAction(isActionShow);
  }, [brandProduct.productList]);

  useEffect(() => {
    setProductCatStus(productFilter.productCatFilter);
    setProductTagStus(productFilter.productTagFilter);
    setStockStus(productFilter.stockFilter);
    setProductStatusViseData(productFilter.statusViseFilter);
    const productArray = [
      'productCatFilter',
      'productTagFilter',
      'stockFilter',
      'statusFilter',
    ];
    const productCatData = [];
    const productTagData = [];
    const productStockData = [];
    productArray.forEach((e) => {
      if (e === 'productCatFilter') {
        productFilter.productCatFilter?.map((ele) => {
          brandProduct.productList.map((e) => {
            e.category === ele && productCatData.push(e);
          });
          setProductFilterData(productCatData);
        });
      }
      if (e === 'productTagFilter') {
        productFilter.productTagFilter?.map((ele) => {
          (productCatData.length === 0 ? brandProduct.productList : productCatData).map(
            (e) => {
              e.tags.includes(ele) && productTagData.push(e);
            }
          );
          setProductFilterData(productTagData);
        });
      }
      if (e === 'stockFilter') {
        productFilter.stockFilter?.map((ele) => {
          const ProductData =
            productTagData.length === 0
              ? productCatData.length === 0
                ? ''
                : productCatData
              : productTagData;
          (ProductData === '' ? brandProduct.productList : ProductData).map((e) => {
            if (ele === '< 10 units') {
              e.stock < 10 && productStockData.push(e);
            }
            if (ele === '11-50 units') {
              11 < e.stock &&
                e.stock < 50 &&
                productStockData.push(e);
            }
            if (ele === '> 50 units') {
              e.stock > 50 && productStockData.push(e);
            }
          });
          setProductFilterData(productStockData);
        });
      }
      if (e === 'statusFilter') {
        if (productFilter?.statusViseFilter?.length > 0) {
          const filterData = (
            productCatData.length > 0 ||
              productTagData.length > 0 ||
              productStockData.length > 0
              ? [
                ...new Set([
                  ...productCatData,
                  ...productTagData,
                  ...productStockData,
                ]),
              ]
              : brandProduct.productList
          ).filter((ele, i, arr) => {
            if (ele.status == productFilter.statusViseFilter[0]) {
              return ele;
            } else if (
              productFilter.statusViseFilter[0] === 'all'
            ) {
              return ele;
            }
          });
          setProductFilterData([...filterData]);
        }
      }
    });
  }, [productFilter]);

  const handalClearFilter = () => {
    setProductTagStus([]);
    setProductCatStus([]);
    setStockStus([]);
    setProductStatusViseData([]);
    dispatch(resetToInitial());
  };

  // const productStatusViseFilter = (status) => {
  //   const newData = JSON.parse(JSON.stringify(productFilter));
  //   newData.statusViseFilter = [status];
  //   dispatch(setProductFilter({ ...newData }));
  // };

  const clearProductFilter = (e) => {
    if (e === 'productCat') {
      setProductCatStus([]);
      dispatch(productCatClear());
    } else if (e === 'productTag') {
      setProductTagStus([]);
      dispatch(productTagClear());
    } else {
      setStockStus([]);
      dispatch(stockClear());
    }
  };

  const handalUploadFileModalShow = () => {
    setUploadModalShow(uploadModalShow === true ? false : true);
  };

  const handalUploadFile = (e) => {
    if (e === 'replace') {
      setUploadFile('');
    } else {
      const file = e.target.files[0];
      setUploadFile(file);
    }
  };

  const handleConfirmUpload = () => {
    if (uploadFile) {
      const formData = new FormData();
      formData.append('file', uploadFile);
      dispatch(uploadProductList(formData));
    }
  };

  const handalVariantPopup = (ele) => {
    setVariantdata(ele?.variants);
    setShowVariantPopup(variantshoePopup === false ? true : false);
  };

  const handalCategoryPopup = (e, type, id) => {
    setCategoryTagPopup(categoryTagPopup === false ? true : false);
    setProductId(id);
    if (type) {
      setTypeOfTag(type);
    }
    if (e) {
      setCategoryTagData(e);
    }
    setOpenSelect(false);
  };

  const handalChangeTag = (e) => {
    setTypeOfTag(e);
  };
  const handalRetailerPopup = (eleId, assignedData) => {
    setRetailerPopup(retailerPopup === false ? true : false);
    setAssignedRetailer(eleId);
    setOpenSelect(false);
  };

  const handleChangeStatus = (ele) => {
    const neweData = brandProduct.productList.filter((item) => {
      if (item.id == ele.id) {
        item.status = item.status == 'active' ? 'inactive' : 'active';
      }
      return item;
    });
    setData(neweData);
  };

  const handleCheckCheckBox = (ele, isAll) => {
    if (!isAll) {
      const newData = brandProduct.productList.filter((item) => {
        if (item.id == ele.id) {
          item.checked = item.checked ? false : true;
        }
        return item;
      });
      setData(newData);
      setCheckAll(false);
    } else {
      const newData = brandProduct.productList.map((item) => {
        if (checkAll) {
          item.checked = false;
        } else {
          item.checked = true;
        }
        return item;
      });
      setData(newData);
      setCheckAll(!checkAll);
    }
  };

  const handleOpenSelect = () => {
    setOpenSelect(!openSelect);
  };

  const handleAction = (type) => {
    const newArr = brandProduct.productList.filter((item) => {
      return item.checked;
    });
    props.handleAction(type, newArr.length);
  };

  const totalPages = Math.ceil(brandProduct.productCount / brandProduct.pagination.limit);

  return (
    <>
      {uploadModalShow === true && (
        <div className="popup popup-confirm upload-file-modal active">
          <div className="popup_wrapper">
            <div className="popup_content">
              <div
                className="popup-close"
                onClick={handalUploadFileModalShow}
              >
                <img className="icon" src={closeBlackIcon} />
              </div>
              <div className="popup_content-header">
                <div className="h1">Upload file</div>
              </div>
              {uploadFile === '' && (
                <div className="form-input form-upload upload-div">
                  <div className="popupTitle mb-3">
                    Upload the same file that was generated
                    from ShopDot. Do not add additional rows
                    or columns.
                  </div>
                  <div id="preview"></div>
                  <div className="uploadOuter">
                    <span className="dragBox">
                      <svg className="icon"></svg>
                      <label>
                        Drag and drop file here
                      </label>
                      <input
                        type="file"
                        value={uploadFile}
                        onChange={handalUploadFile}
                        id="uploadFile"
                      />
                      <p>or</p>
                      <button className="button">
                        Browse files
                      </button>
                    </span>
                  </div>
                </div>
              )}
              {uploadFile !== '' && (
                <div className="form-input preview-div">
                  <div className="popupTitle mb-2">
                    Upload the same file that was generated
                    from ShopDot.
                  </div>
                  <div className="previewItem">
                    <label className="fileName">
                      ShopDot_Products.xls
                    </label>
                    <button
                      className="button button-dark-black replace-file"
                      onClick={() =>
                        handalUploadFile('replace')
                      }
                    >
                      Replace File
                    </button>
                  </div>

                  <div className="previewItemConfirm">
                    <label>
                      Click Confirm to update product
                      details.
                    </label>
                    <button className="button large" onClick={handleConfirmUpload}>
                      Confirm
                    </button>
                  </div>

                  <div className="errorList"></div>
                </div>
              )}
              {error && (
                <div className="form-input hide">
                  <div className="previewItem">
                    <label className="fileName">
                      ShopDot_Products.xls
                    </label>
                    <button className="button button-dark">
                      Replace File
                    </button>
                  </div>
                  <div className="previewItemConfirm align-items-start">
                    <div className="errorText">
                      <svg className="icon"></svg>
                      <span>
                        The file you have uploaded has
                        the following errors
                      </span>
                    </div>
                    <div className="errorList">
                      <ul>
                        <li>
                          Product Title is required in
                          row 7
                        </li>
                        <li>
                          Variant ID is invalid in row
                          9
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {variantshoePopup && (
        <PopupModal
          variantdata={variantdata}
          handalPopup={() => handalVariantPopup()}
        />
      )}
      {categoryTagPopup && (
        <CategoryTagPopupModal
          typeofTag={typeOfTag}
          data={categoryTagData}
          handalPopup={handalCategoryPopup}
          changeTag={handalChangeTag}
          productId={productId}
        />
      )}
      {retailerPopup && (
        <RetailerPopup
          handalPopup={handalRetailerPopup}
          assignedData={assignedRetailer}
        />
      )}

      <div className="products_content">
        <div className="products_head">
          <div className="breadcrumbs_wrap">
            <ul className="breadcrumbs">
              <li>
                <span>Products</span>
              </li>
            </ul>
          </div>
          <div className="products_head-content">
            <div className="title">
              <h1 className="m-0">Products</h1>
              <div className="number">{brandProduct.productCount || 0}</div>
            </div>
            <div className="products_head-search">
              <form action="#" className="search_form">
                <div className="search_form-input">
                  <input
                    type="text"
                    value={searchVal}
                    placeholder="Search product name or SKU"
                    onChange={(e) =>
                      setSearchVal(e.target.value)
                    }
                  />
                </div>
                {searchVal !== '' ? (
                  <button
                    type="cancel"
                    className="search_form-button"
                  >
                    <img className="icon" src={clearIcon} />
                  </button>
                ) : (
                  <div>
                    <img
                      className="icon"
                      src={searchIcon}
                    />
                  </div>
                )}
              </form>
            </div>
            <div className="action-button-right">
              <button className="button button-blue small" disabled={brandProduct.loading}>
                Download All Products
              </button>
              <button
                className="button button-dark-black small upload-file"
                onClick={() => handalUploadFileModalShow()}
                disabled={brandProduct.loading}
              >
                Upload File
              </button>
            </div>
            <div className="products_head-brand-types">
              <a
                href="#"
                className={`brand-type ${brandProduct.filter.status === productStatus.all
                  ? 'active'
                  : ''
                  }`}
                onClick={() => {
                  if (!brandProduct.loading) {
                    dispatch(setProductStatus(productStatus.all))
                  }
                }}
              >
                All
              </a>
              <a
                href="#"
                className={`brand-type ${brandProduct.filter.status ===
                  productStatus.active
                  ? 'active'
                  : ''
                  }`}
                onClick={() => {
                  if (!brandProduct.loading) {
                    dispatch(setProductStatus(productStatus.active))
                  }
                }
                }
              >
                Active
              </a>
              <a
                href="#"
                className={`brand-type ${brandProduct.filter.status ===
                  productStatus.inActive
                  ? 'active'
                  : ''
                  }`}
                onClick={() => {
                  if (!brandProduct.loading) {
                    dispatch(setProductStatus(productStatus.inActive))
                  }
                }
                }
              >
                Inactive
              </a>
            </div>
          </div>
        </div>
        <div className="my_list-body">
          <div className="products_active-filters">
            {stockStus.length !== 0 && (
              <div className="products_active-filter">
                <div className="txt">
                  <b>Stock: </b>
                  {stockStus.join(', ')}
                </div>
                <button
                  className="products_active-remove"
                  onClick={() => clearProductFilter('stock')}
                >
                  <img className="icon" src={closeIcon} />
                </button>
              </div>
            )}
            {productTagStus.length !== 0 && (
              <>
                <div className="products_active-filter">
                  <div className="txt">
                    <b>Product Tag: </b>
                    {productTagStus.join(', ')}
                  </div>
                  <button
                    className="products_active-remove"
                    onClick={() =>
                      clearProductFilter('productTag')
                    }
                  >
                    <img className="icon" src={closeIcon} />
                  </button>
                </div>
              </>
            )}

            {productCatStus.length !== 0 && (
              <>
                <div className="products_active-filter">
                  <div className="txt">
                    <b>Product Category: </b>
                    {productCatStus.join(', ')}
                  </div>
                  <button
                    className="products_active-remove"
                    onClick={() =>
                      clearProductFilter('productCat')
                    }
                  >
                    <img className="icon" src={closeIcon} />
                  </button>
                </div>
              </>
            )}
            {(!isEmpty(productCatStus) ||
              !isEmpty(productTagStus) ||
              !isEmpty(stockStus)) && (
                <button
                  className="products_active-remove-all"
                  onClick={() => handalClearFilter()}
                >
                  Clear Filters
                </button>
              )}
          </div>
          <div
            className="products_active-filters mt-2 paf mb-4"
            id="extra_filter"
          >
            <div
              className={`my_list-dropdown ${showAction >= 2 ? '' : 'd-none'
                }`}
            >
              <label>
                You have selected{' '}
                <span id="selecte_product_count">
                  {showAction}
                </span>{' '}
                records
              </label>
              <button
                className="button button-dark-black product-active"
                onClick={() => handleAction('active')}
              >
                Activate
              </button>
              <button
                className="button button-dark-red product-deactive"
                onClick={() => handleAction('deactive')}
              >
                Deactivate
              </button>
              <div className="ui-dropdown">
                <div className="my_list-dropdown">
                  <div className="ui-dropdown">
                    <div
                      className={`select_wrap ${openSelect ? 'active' : ''
                        }`}
                    >
                      <ul
                        className="default_option"
                        onClick={handleOpenSelect}
                      >
                        <li>
                          <div className="option">
                            <p>Choose action</p>
                          </div>
                        </li>
                      </ul>
                      <ul className="select_ul">
                        <li
                          onClick={() =>
                            handalCategoryPopup(
                              [],
                              'category'
                            )
                          }
                        >
                          <div className="option">
                            <p>Edit Categories</p>
                          </div>
                        </li>
                        <li
                          onClick={() =>
                            handalCategoryPopup(
                              [],
                              'tag'
                            )
                          }
                        >
                          <div className="option">
                            <p>Add Tags</p>
                          </div>
                        </li>

                        <li>
                          <div className="option">
                            <p>Sync Product</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="my_list-table-wrap datalist-table_wrap sticky-header-table dynamic_height"
            style={{ height }}
          >
            <table className="my_list-table datalist-table my-product-table">
              <thead className="sticky-thead">
                <tr>
                  <th>
                    <div className="check-all">
                      <label className="checkbox">
                        <input
                          type="checkbox"
                          name="check-all"
                          id="check-all"
                          checked={checkAll}
                          onClick={() =>
                            handleCheckCheckBox(
                              {},
                              true
                            )
                          }
                        />
                        <div className="checkbox-text"></div>
                      </label>
                      <div className="check-all_dropdown dropdown">
                        <div className="dropdown_header down-arrow">
                          <img
                            className="icon"
                            src={DownIcon}
                          />
                        </div>
                        <div className="dropdown_body db-width">
                          <div className="dropdown_inner">
                            <ul>
                              <li>
                                <button>
                                  Select All
                                  Items
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th className="product-column">
                    <div className="txt">
                      Product Name
                      <button className="sort">
                        <img
                          className="icon"
                          src={DownIcon}
                        />
                      </button>
                    </div>
                  </th>
                  <th>
                    <div className="txt brand-status">
                      Status
                      <div className="tooltip">
                        <div className="tooltip-icon tooltip-icon-info">
                          <img
                            className="icon"
                            src={InfoIcon}
                          />
                        </div>
                        <div className="tooltip_text">
                          <p>
                            All required product
                            fields must be filled
                            before you can activate
                            a product.
                          </p>
                        </div>
                      </div>
                      <button className="sort">
                        <img
                          className="icon"
                          src={DownIcon}
                        />
                      </button>
                    </div>
                  </th>
                  <th>
                    <div className="txt">
                      Category
                      <button className="sort">
                        <img
                          className="icon"
                          src={DownIcon}
                        />
                      </button>
                    </div>
                  </th>
                  <th>
                    <div className="txt">Tags</div>
                  </th>
                  <th>
                    <div className="txt brand-status">
                      Stock
                      <div className="tooltip">
                        <div className="tooltip-icon tooltip-icon-info">
                          <img
                            className="icon"
                            src={InfoIcon}
                          />
                        </div>
                        <div className="tooltip_text">
                          <p>
                            The inventory published
                            within ShopDot is based
                            on the inventory from
                            your Shopify store x the
                            inventory buffer that
                            you set under
                            Settings-Preferences.
                          </p>
                        </div>
                      </div>
                      <button className="sort">
                        <img
                          className="icon"
                          src={DownIcon}
                        />
                      </button>
                    </div>
                  </th>
                  <th>
                    <div className="txt sales">
                      <span className="head-label">
                        Sales
                      </span>
                      <div className="check-all_dropdown dropdown">
                        <div className="dropdown_header">
                          <img
                            className="icon sales-dropdown-arrow"
                            src={DownIcon}
                          />
                        </div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="txt">
                      Retailers
                      <button className="sort">
                        <img
                          className="icon"
                          src={DownIcon}
                        />
                      </button>
                    </div>
                  </th>
                  <th>
                    <div className="txt">Actions</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {(productCatStus.length !== 0 ||
                  productTagStus.length !== 0 ||
                  stockStus.length !== 0 ||
                  productStatusViseData.length !== 0
                  ? productFilterData
                  : (brandProduct.productList || [])
                ).map((ele, i) => (
                  <tr key={i}>
                    <td>
                      <label className="checkbox">
                        <input
                          type="checkbox"
                          name="check-1"
                          id="check-1"
                          checked={ele.checked}
                          onClick={() =>
                            handleCheckCheckBox(ele)
                          }
                        />
                        <div className="checkbox-text"></div>
                      </label>
                    </td>
                    <td>
                      <div className="my_list-product">
                        <div className="my_list-product-image">
                          <a className="number">
                            {' '}
                            <picture>
                              <img
                                src={
                                  ele.productUrl
                                }
                                alt=""
                              />
                            </picture>
                          </a>
                        </div>
                        <div>
                          <p className="my_list-product-title cursor-pointer">
                            {ele.productName}
                          </p>
                          {ele.variants && (
                            <div
                              className="my_list-product-variants variants-modal-action cursor-pointer"
                              onClick={() =>
                                handalVariantPopup(
                                  ele
                                )
                              }
                            >
                              {ele.variants &&
                                `${ele.variants.length} Varients`}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="txt">
                        <div className="my-toggle-btn-wrapper tooltip">
                          <div className="my-toggle-btn">
                            <input
                              type="checkbox"
                              id="checkbox1"
                              checked={
                                ele.status ==
                                  'active'
                                  ? true
                                  : false
                              }
                            />
                            <label>
                              <span
                                className="on"
                                onClick={() =>
                                  handleChangeStatus(
                                    ele
                                  )
                                }
                              >
                                Active
                              </span>
                              <span
                                className="off"
                                onClick={() =>
                                  handleChangeStatus(
                                    ele
                                  )
                                }
                              >
                                Inactive
                              </span>
                            </label>
                            <div className="tooltip_text">
                              {ele.status !=
                                'active' ? (
                                <p>
                                  To activate,
                                  complete the
                                  onboarding
                                  flow in the
                                  Getting
                                  Started
                                  section and
                                  fill out
                                  required
                                  fields by
                                  going to
                                  Edit
                                  Products
                                  under
                                  Actions.
                                </p>
                              ) : (
                                <p>
                                  Deactivating
                                  the product
                                  will make
                                  the product
                                  not
                                  discoverable
                                  or sellable
                                  on ShopDot.
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="txt">
                        {ele.category === '' ? (
                          <p
                            className="add-item-label add-category cursor-pointer"
                            onClick={() =>
                              handalCategoryPopup(
                                [],
                                'category',
                                ele.id
                              )
                            }
                          >
                            <span>+</span> Category
                          </p>
                        ) : (
                          <p
                            className="value_added cursor-pointer"
                            onClick={() =>
                              handalCategoryPopup(
                                [],
                                'category',
                                ele.id
                              )
                            }
                          >
                            {ele.category}
                          </p>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="txt">
                        {ele.tags.length == false ? (
                          <p
                            className="add-item-label add-tags cursor-pointer"
                            onClick={() =>
                              handalCategoryPopup(
                                ele.tags,
                                'tag'
                              )
                            }
                          >
                            <span>+</span> Tags
                          </p>
                        ) : (
                          <p
                            className="value_added cursor-pointer"
                            onClick={() =>
                              handalCategoryPopup(
                                ele.tags,
                                'tag'
                              )
                            }
                          >
                            {`${ele.tags[1]} +${ele.tags.length}More...`}
                          </p>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="txt">
                        <span id="stock">
                          {ele.stock}
                          {+ele.stock == 0 ? (
                            <img
                              src={stockRedAlert}
                            />
                          ) : +ele.stock < 10 ? (
                            <img
                              src={
                                stockYellowAlert
                              }
                            />
                          ) : null}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="txt">
                        {ele.sales} <br />
                      </div>
                    </td>
                    <td>
                      <div className="txt">
                        {ele.retailers === '' ? (
                          <a
                            href="javascript:void(0)"
                            className="add-item-label add-retailer"
                            onClick={() =>
                              handalRetailerPopup(
                                ''
                              )
                            }
                          >
                            <span>+</span> Retailer
                          </a>
                        ) : (
                          <a
                            href="javascript:void(0)"
                            className="value_added"
                            onClick={() =>
                              handalRetailerPopup(
                                '2',
                                []
                              )
                            }
                          >
                            2 assigned
                          </a>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="actions">
                        <div className="dropdown">
                          <div className="dropdown_header">
                            <img
                              className="icon"
                              src={MoreIcon}
                            />
                          </div>
                          <div className="dropdown_body">
                            <div className="dropdown_inner">
                              <ul>
                                <li>
                                  <button className="edit-product">
                                    Edit
                                    Product
                                  </button>
                                </li>
                                <li>
                                  <button className="sync-product">
                                    Sync
                                    Product
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="sync-product"
                                    onClick={() =>
                                      handalRetailerPopup(
                                        '',
                                        []
                                      )
                                    }
                                  >
                                    Assign
                                    Retailers
                                  </button>
                                </li>
                                <li>
                                  <button className="view-store">
                                    View in
                                    Store
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination_wrap">
            <div className="pagination">
              <div className="pagination_per">
                <select name="per" id="per" onChange={(e) => {
                  dispatch(setPaginationLimit(parseInt(e.target.value)));
                }} disabled={brandProduct.loading}>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <div className="pagination-title">
                  items per page
                </div>
              </div>
              <div className="pagination_nav">
                <div className="pagination-title">page</div>
                <select name="per" id="per" onChange={(e) => {
                  dispatch(setPaginationPage(parseInt(e.target.value)));
                }} disabled={brandProduct.loading}>
                  {convertNumberToArray(1, totalPages, 1).map(item => <option value={item}>{item}</option>)}
                </select>
                <div className="pagination-title">of {totalPages}</div>
                <button className="pagination-arrow pagination-arrow-prev" disabled={brandProduct.loading}>
                  <img className="icon" src={LeftIcon} />
                </button>
                <button className="pagination-arrow pagination-arrow-next" disabled={brandProduct.loading}>
                  <img className="icon" src={RightIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ProductTable.propTypes = {
  handalPopup: PropTypes.func,
  handleAction: PropTypes.func,
};
