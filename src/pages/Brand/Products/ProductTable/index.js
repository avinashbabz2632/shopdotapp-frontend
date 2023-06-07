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
import {
  selectBrandProductList,
  selectProductCatFilter,
  selectProductTagFilter,
  selectStockFilter,
  selectProductStatusFilter,
  selectProductCategory,
  selectSyncInProgress,
  selectSyncSuccess,
  selectSyncError,
} from '../../../../redux/Brand/Products/productSelectors';
import {
  resetToInitial,
  productTagClear,
  productCatClear,
  stockClear,
  setProductStatusFilter,
} from '../../../../redux/Brand/Products/productSlice';
import { filter, isEmpty, keyBy, map } from 'lodash';
import PopupModal from '../Popupmodal';
import CategoryTagPopupModal from '../CategoryTagPopup';
import RetailerPopup from '../RetailerPopup';
import stockRedAlert from '../../../../assets/images/icons/red-warning.svg';
import stockYellowAlert from '../../../../assets/images/icons/yellow-warning.svg';
import {
  downloadProductAction,
  getProductListAction,
  syncSingleProductAction,
  uploadProductAction,
} from '../../../../actions/productActions';
import { useNavigate } from 'react-router-dom';
import { selectUserDetails } from '../../../../redux/user/userSelector';

export default function ProductTable(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector(selectUserDetails);
  const productCatFilter = useSelector(selectProductCatFilter);
  const productTagsFilter = useSelector(selectProductTagFilter);
  const stockFilter = useSelector(selectStockFilter);
  const productStatusFilter = useSelector(selectProductStatusFilter);
  const productList = useSelector(selectBrandProductList);
  const [Data, setData] = useState(Datas);
  const [height, setHeight] = useState(0);
  const [uploadModalShow, setUploadModalShow] = useState(false);
  const [uploadFile, setUploadFile] = useState('');
  const [error, setError] = useState('');
  const [variantdata, setVariantdata] = useState('');
  const [variantshoePopup, setShowVariantPopup] = useState(false);
  const [categoryTagPopup, setCategoryTagPopup] = useState(false);
  const [typeOfTag, setTypeOfTag] = useState('');
  const [retailerPopup, setRetailerPopup] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [categoryTagData, setCategoryTagData] = useState([]);
  const [assignedRetailer, setAssignedRetailer] = useState();
  const [checkAll, setCheckAll] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const [openSelect, setOpenSelect] = useState(false);
  const [productId, setProductId] = useState('');
  const [categoryKeyby, setCategoryKeyby] = useState({});
  const productCategory = useSelector(selectProductCategory);
  const syncInProgress = useSelector(selectSyncInProgress);
  const syncSuccess = useSelector(selectSyncSuccess);
  const syncError = useSelector(selectSyncError);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    if (productCategory?.length) {
      const tempKey = keyBy(productCategory, 'id');
      setCategoryKeyby(tempKey);
    }
  }, [productCategory]);

  console.log(productCategory, 'productCategory');

  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  const prepareFilter = () => {
    const filter = [];
    if (productStatusFilter !== '' && productStatusFilter !== 'all') {
      const status = productStatusFilter === 'active' ? '1' : '0';
      const statusFilter = { field: 'status', operator: 'eq', value: status };
      filter.push(statusFilter);
    }
    if (productTagsFilter && productTagsFilter.length > 0) {
      const tagFilter = {
        field: 'tag',
        operator: 'in',
        value: productTagsFilter,
      };
      filter.push(tagFilter);
    }
    if (stockFilter && stockFilter.length > 0) {
      stockFilter.forEach((sf) => {
        if (sf === '< 10 units') {
          const _stockFilter = {
            field: 'inventory_quantity',
            operator: 'lt',
            value: 10,
          };
          filter.push(_stockFilter);
        } else if (sf === '11-50 units') {
          const _stockFilter = {
            field: 'inventory_quantity',
            operator: 'between',
            value: '11-50',
          };
          filter.push(_stockFilter);
        } else if (sf === '> 50 units') {
          const _stockFilter = {
            field: 'inventory_quantity',
            operator: 'gt',
            value: 50,
          };
          filter.push(_stockFilter);
        }
      });
    }
    return filter;
  };

  const fetchProducts = () => {
    const data = {
      paging: {
        limit: limit,
        offset: offset,
      },
      sort: [['shopify_product_id', 'DESC']],
      query: {},
      filter: prepareFilter(),
    };
    if(searchVal){
      data.query.search = searchVal
    }
    if(productCatFilter.length > 0){
      data.query.category_ids = productCatFilter
    }
    dispatch(getProductListAction(data));
  };

  useEffect(() => {
    if (searchVal && searchVal.length >= 3) {
      fetchProducts();
    } else if (searchVal.length === 0) {
      fetchProducts();
    }
  }, [searchVal]);

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
    fetchProducts();
  }, [
    productStatusFilter,
    offset,
    limit,
    productCatFilter,
    productTagsFilter,
    stockFilter,
  ]);

  const handalClearFilter = () => {
    dispatch(resetToInitial());
  };

  const handleStatusFilter = (status) => {
    dispatch(setProductStatusFilter(status));
  };

  const clearProductFilter = (e) => {};

  const handalUploadFileModalShow = () => {
    setUploadModalShow(uploadModalShow === true ? false : true);
  };

  const handalUploadFile = (e) => {
    if (e === 'replace') {
      setUploadFile('');
    } else {
      const file = e.target.files;
      console.log(file[0], 'file');
      // setUploadFile(file);
      handleUploadProduct(file[0]);
    }
  };

  const handalVariantPopup = (ele) => {
    setVariantdata(ele?.product_variants);
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
    //
  };

  const handleCheckCheckBox = (ele, isAll) => {
    if (!isAll) {
      const newData = Data.filter((item) => {
        if (item.id == ele.id) {
          item.checked = item.checked ? false : true;
        }
        return item;
      });
      setData(newData);
      setCheckAll(false);
    } else {
      const newData = Data?.map((item) => {
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
    const newArr = Data.filter((item) => {
      return item.checked;
    });
    props.handleAction(type, newArr?.length);
  };

  const getProductImage = (item) => {
    const { product_images } = item;
    let image_url = '';
    if (product_images && product_images?.length > 0) {
      image_url = product_images[0]?.src;
    }
    return image_url;
  };

  const getProductStock = (item) => {
    const { product_variants } = item;
    let stockCount = 0;
    if (product_variants && product_variants?.length > 0) {
      stockCount = product_variants?.reduce((acc, c) => {
        return (acc += c.inventory_quantity);
      }, 0);
    }
    return stockCount;
  };

  const showProductTags = (item) => {
    const { product_tags } = item;
    let tags = '';
    if (product_tags && product_tags.length > 0) {
      tags = `${product_tags[0]?.tag} +${product_tags?.length} More...`;
    }
    return tags;
  };

  const onPageChange = (e) => {
    const currentPage = e.target.value;
    if (currentPage === 1) {
      setOffset(0);
    } else {
      const newOffset = (currentPage - 1) * 20;
      setOffset(newOffset);
    }
  };

  const onItemsPerPageChange = (e) => {
    const _itemsPerPage = e.target.value;
    setLimit(_itemsPerPage);
  };

  const handleUploadProduct = async (data) => {
    setUploadModalShow(false);
    dispatch(uploadProductAction(data));
  };

  const handleDownloadProduct = async () => {
    const data = {
      paging: {
        limit: limit,
        offset: offset,
      },
      sort: [['shopify_product_id', 'DESC']],
      query: searchVal
        ? {
            category_ids: productCatFilter,
            search: searchVal,
          }
        : {
            category_ids: productCatFilter,
          },
      filter: prepareFilter(),
    };
    dispatch(downloadProductAction(data));
  };

  const doSync = async (productDetails) => {
    dispatch(
      syncSingleProductAction({
        product_id: productDetails?.shopify_product_id,
        user_id: userDetails.id,
      })
    );
  };

  useEffect(() => {
    if(!syncInProgress && syncSuccess && !syncError) {
      setRefresh(!refresh);
    }
  }, [syncInProgress, syncSuccess, syncError]);

  console.log(productCatFilter, 'productCatFilter');

  return (
    <>
      {uploadModalShow === true && (
        <div className="popup popup-confirm upload-file-modal active">
          <div className="popup_wrapper">
            <div className="popup_content">
              <div className="popup-close" onClick={handalUploadFileModalShow}>
                <img className="icon" src={closeBlackIcon} />
              </div>
              <div className="popup_content-header">
                <div className="h1">Upload file</div>
              </div>
              {uploadFile === '' && (
                <div className="form-input form-upload upload-div">
                  <div className="popupTitle mb-3">
                    Upload the same file that was generated from ShopDot. Do not
                    add additional rows or columns.
                  </div>
                  <div id="preview"></div>
                  <div className="uploadOuter">
                    <span className="dragBox">
                      <svg className="icon"></svg>
                      <label>Drag and drop file here</label>
                      <input
                        type="file"
                        value={uploadFile}
                        onChange={handalUploadFile}
                        id="uploadFile"
                      />
                      <p>or</p>
                      <button className="button">Browse files</button>
                    </span>
                  </div>
                </div>
              )}
              {uploadFile !== '' && (
                <div className="form-input preview-div">
                  <div className="popupTitle mb-2">
                    Upload the same file that was generated from ShopDot.
                  </div>
                  <div className="previewItem">
                    <label className="fileName">ShopDot_Products.xls</label>
                    <button
                      className="button button-dark-black replace-file"
                      onClick={() => handalUploadFile('replace')}
                    >
                      Replace File
                    </button>
                  </div>

                  <div className="previewItemConfirm">
                    <label>Click Confirm to update product details.</label>
                    <button className="button large">Confirm</button>
                  </div>

                  <div className="errorList"></div>
                </div>
              )}
              {error && (
                <div className="form-input hide">
                  <div className="previewItem">
                    <label className="fileName">ShopDot_Products.xls</label>
                    <button className="button button-dark">Replace File</button>
                  </div>
                  <div className="previewItemConfirm align-items-start">
                    <div className="errorText">
                      <svg className="icon"></svg>
                      <span>
                        The file you have uploaded has the following errors
                      </span>
                    </div>
                    <div className="errorList">
                      <ul>
                        <li>Product Title is required in row 7</li>
                        <li>Variant ID is invalid in row 9</li>
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
              <div className="number">{productList?.length}</div>
            </div>
            <div className="products_head-search">
              <form action="#" className="search_form">
                <div className="search_form-input">
                  <input
                    type="text"
                    value={searchVal}
                    placeholder="Search product name or SKU"
                    onChange={(e) => setSearchVal(e.target.value)}
                  />
                </div>
                {searchVal !== '' ? (
                  <button type="cancel" className="search_form-button">
                    <img className="icon" src={clearIcon} />
                  </button>
                ) : (
                  <div>
                    <img className="icon" src={searchIcon} />
                  </div>
                )}
              </form>
            </div>
            <div className="action-button-right">
              <button
                className="button button-blue small"
                onClick={handleDownloadProduct}
              >
                Download All Products
              </button>
              <button
                className="button button-dark-black small upload-file"
                onClick={() => handalUploadFileModalShow()}
              >
                Upload File
              </button>
            </div>
            <div className="products_head-brand-types">
              <a
                href="#"
                className={`brand-type ${
                  productStatusFilter === 'all' ? 'active' : ''
                }`}
                onClick={() => handleStatusFilter('all')}
              >
                All
              </a>
              <a
                href="#"
                className={`brand-type ${
                  productStatusFilter === 'active' ? 'active' : ''
                }`}
                onClick={() => handleStatusFilter('active')}
              >
                Active
              </a>
              <a
                href="#"
                className={`brand-type ${
                  productStatusFilter === 'inactive' ? 'active' : ''
                }`}
                onClick={() => handleStatusFilter('inactive')}
              >
                Inactive
              </a>
            </div>
          </div>
        </div>
        <div className="my_list-body">
          <div className="products_active-filters">
            {stockFilter?.length > 0 && (
              <div className="products_active-filter">
                <div className="txt">
                  <b>Stock: </b>
                  {stockFilter.join(', ')}
                </div>
                <button
                  className="products_active-remove"
                  onClick={() => dispatch(stockClear())}
                >
                  <img className="icon" src={closeIcon} />
                </button>
              </div>
            )}
            {productTagsFilter?.length > 0 && (
              <>
                <div className="products_active-filter">
                  <div className="txt">
                    <b>Product Tag: </b>
                    {productTagsFilter.join(', ')}
                  </div>
                  <button
                    className="products_active-remove"
                    onClick={() => dispatch(productTagClear())}
                  >
                    <img className="icon" src={closeIcon} />
                  </button>
                </div>
              </>
            )}

            {productCatFilter?.length > 0 && (
              <>
                <div className="products_active-filter">
                  <div className="txt">
                    <b>Product Category: </b>
                    {map(productCatFilter, (prod, key) => {
                      const stringKey =
                        key == 0
                          ? categoryKeyby?.[prod]?.name
                          : `, ${categoryKeyby?.[prod]?.name}`;
                      return stringKey;
                    })}
                    {/* {productCatFilter.join(', ')} */}
                  </div>
                  <button
                    className="products_active-remove"
                    onClick={() => dispatch(productCatClear())}
                  >
                    <img className="icon" src={closeIcon} />
                  </button>
                </div>
              </>
            )}
            {(!isEmpty(productCatFilter) ||
              !isEmpty(productTagsFilter) ||
              !isEmpty(stockFilter)) && (
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
              className={`my_list-dropdown ${showAction >= 2 ? '' : 'd-none'}`}
            >
              <label>
                You have selected{' '}
                <span id="selecte_product_count">{showAction}</span> records
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
                      className={`select_wrap ${openSelect ? 'active' : ''}`}
                    >
                      <ul className="default_option" onClick={handleOpenSelect}>
                        <li>
                          <div className="option">
                            <p>Choose action</p>
                          </div>
                        </li>
                      </ul>
                      <ul className="select_ul">
                        <li onClick={() => handalCategoryPopup([], 'category')}>
                          <div className="option">
                            <p>Edit Categories</p>
                          </div>
                        </li>
                        <li onClick={() => handalCategoryPopup([], 'tag')}>
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
                          // checked={checkAll}
                          onClick={() => handleCheckCheckBox({}, true)}
                        />
                        <div className="checkbox-text"></div>
                      </label>
                      <div className="check-all_dropdown dropdown">
                        <div className="dropdown_header down-arrow">
                          <img className="icon" src={DownIcon} />
                        </div>
                        <div className="dropdown_body db-width">
                          <div className="dropdown_inner">
                            <ul>
                              <li>
                                <button>Select All Items</button>
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
                        <img className="icon" src={DownIcon} />
                      </button>
                    </div>
                  </th>
                  <th>
                    <div className="txt brand-status">
                      Status
                      <div className="tooltip">
                        <div className="tooltip-icon tooltip-icon-info">
                          <img className="icon" src={InfoIcon} />
                        </div>
                        <div className="tooltip_text">
                          <p>
                            All required product fields must be filled before
                            you can activate a product.
                          </p>
                        </div>
                      </div>
                      <button className="sort">
                        <img className="icon" src={DownIcon} />
                      </button>
                    </div>
                  </th>
                  <th>
                    <div className="txt">
                      Category
                      <button className="sort">
                        <img className="icon" src={DownIcon} />
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
                          <img className="icon" src={InfoIcon} />
                        </div>
                        <div className="tooltip_text">
                          <p>
                            The inventory published within ShopDot is based on
                            the inventory from your Shopify store x the
                            inventory buffer that you set under
                            Settings-Preferences.
                          </p>
                        </div>
                      </div>
                      <button className="sort">
                        <img className="icon" src={DownIcon} />
                      </button>
                    </div>
                  </th>
                  <th>
                    <div className="txt sales">
                      <span className="head-label">Sales</span>
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
                        <img className="icon" src={DownIcon} />
                      </button>
                    </div>
                  </th>
                  <th>
                    <div className="txt">Actions</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {productList.map((ele, i) => (
                  <tr key={i}>
                    <td>
                      <label className="checkbox">
                        <input
                          type="checkbox"
                          name="check-1"
                          id="check-1"
                          checked={ele?.checked}
                          onClick={() => handleCheckCheckBox(ele)}
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
                              <img src={getProductImage(ele)} alt="Image" />
                            </picture>
                          </a>
                        </div>
                        <div>
                          <p
                            onClick={() => {
                              navigate(`/brand/product-details/${ele.id}`);
                            }}
                            className="my_list-product-title cursor-pointer"
                          >
                            {ele.title}
                          </p>
                          {ele.product_variants && (
                            <div
                              className="my_list-product-variants variants-modal-action cursor-pointer"
                              onClick={() => handalVariantPopup(ele)}
                            >
                              {ele.product_variants &&
                                `${ele?.product_variants.length} Variants`}
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
                              checked={ele.status == '1' ? true : false}
                            />
                            <label>
                              <span
                                className="on"
                                onClick={() => handleChangeStatus(ele)}
                              >
                                Active
                              </span>
                              <span
                                className="off"
                                onClick={() => handleChangeStatus(ele)}
                              >
                                Inactive
                              </span>
                            </label>
                            <div className="tooltip_text">
                              {ele.status != '1' ? (
                                <p>
                                  To activate, complete the onboarding flow in
                                  the Getting Started section and fill out
                                  required fields by going to Edit Products
                                  under Actions.
                                </p>
                              ) : (
                                <p>
                                  Deactivating the product will make the product
                                  not discoverable or sellable on ShopDot.
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="txt">
                        {ele.product_categories?.length === 0 ? (
                          <p
                            className="add-item-label add-category cursor-pointer"
                            onClick={() =>
                              handalCategoryPopup([], 'category', ele.id)
                            }
                          >
                            <span>+</span> Category
                          </p>
                        ) : (
                          <p
                            className="value_added cursor-pointer"
                            onClick={() =>
                              handalCategoryPopup([], 'category', ele.id)
                            }
                          >
                            {ele.category}
                          </p>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="txt">
                        {ele?.product_tags?.length === 0 ? (
                          <p
                            className="add-item-label add-tags cursor-pointer"
                            onClick={() =>
                              handalCategoryPopup(ele?.product_tags, 'tag')
                            }
                          >
                            <span>+</span> Tags
                          </p>
                        ) : (
                          <p
                            className="value_added cursor-pointer"
                            onClick={() =>
                              handalCategoryPopup(ele?.product_tags, 'tag')
                            }
                          >
                            {showProductTags(ele)}
                          </p>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="txt">
                        <span id="stock">
                          {getProductStock(ele)}
                          {getProductStock(ele) == 0 ? (
                            <img src={stockRedAlert} />
                          ) : getProductStock(ele) < 10 ? (
                            <img src={stockYellowAlert} />
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
                        {ele.product_retailer?.length === 0 ? (
                          <a
                            href="javascript:void(0)"
                            className="add-item-label add-retailer"
                            onClick={() => handalRetailerPopup('')}
                          >
                            <span>+</span> Retailer
                          </a>
                        ) : (
                          <a
                            href="javascript:void(0)"
                            className="value_added"
                            onClick={() => handalRetailerPopup('2', [])}
                          >
                            {ele?.product_retailer?.length} assigned
                          </a>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="actions">
                        <div className="dropdown">
                          <div className="dropdown_header">
                            <img className="icon" src={MoreIcon} />
                          </div>
                          <div className="dropdown_body">
                            <div className="dropdown_inner">
                              <ul>
                                <li>
                                  <button className="edit-product">
                                    Edit Product
                                  </button>
                                </li>
                                <li>
                                  <button
                                    onClick={() => {
                                      doSync(ele);
                                    }}
                                    className="sync-product"
                                  >
                                    Sync Product
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="sync-product"
                                    onClick={() => handalRetailerPopup('', [])}
                                  >
                                    Assign Retailers
                                  </button>
                                </li>
                                <li>
                                  <button className="view-store">
                                    View in Store
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
                <select name="per" id="per" onChange={onItemsPerPageChange}>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <div className="pagination-title">items per page</div>
              </div>
              <div className="pagination_nav">
                <div className="pagination-title">page</div>
                <select name="per" id="per" onChange={onPageChange}>
                  {productList.map((_, i) => {
                    return <option value={i + 1}>{i + 1}</option>;
                  })}
                </select>
                <div className="pagination-title">{`of ${productList.length}`}</div>
                <button className="pagination-arrow pagination-arrow-prev">
                  <img className="icon" src={LeftIcon} />
                </button>
                <button className="pagination-arrow pagination-arrow-next">
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
