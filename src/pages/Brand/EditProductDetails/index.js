import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import '../Style/brand.style.scss';
import '../Style/brand.media.scss';
import '../Style/brand.dev.scss';
import BrandHeader from '../common/components/BrandHeader';
import LeftArrowIcon from '../../Brand/images/icons/icon-arrow--left.svg';
import AddImageIcon from '../images/icons/add-image-icon.svg';
import DownIcon from '../images/icons/icon-chevron--down.svg';
import DangerIcon from '../images/icons/icon-danger.svg';
import saveIcon from '../images/icons/save.svg';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import Delete from '../images/button.svg';
import info from '../images/icons/icon-info-red.svg';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  editProductDetailsAction,
  getProductCategoriesAction,
  syncSingleProductAction,
} from '../../../actions/productActions';
import {
  selectUpdatingProduct,
  selectProductUpdateResult,
  selectUpdateProductSuccess,
  selectProductCategory,
  selectProductSubCatOptions,
  selectProductGroupOptions,
  selectProductDetails,
  selectSyncError,
} from '../../../redux/Brand/Products/productSelectors';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { syncProduct2, syncProductAction } from '../../../actions/brandActions';
import { selectUserDetails } from '../../../redux/user/userSelector';
import { ToastContainer } from 'react-toastify';

const FormValidationSchema = yup.object().shape({
  productName: yup.string().required('Product name is required.'),
});

export default function EditProductDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector(selectProductDetails);
  const updating = useSelector(selectUpdatingProduct);
  const updateSuccess = useSelector(selectUpdateProductSuccess);
  const productCatOptions = useSelector(selectProductCategory);
  const productSubCatOptions = useSelector(selectProductSubCatOptions);
  const productGroupOptions = useSelector(selectProductGroupOptions);
  const userDetails = useSelector(selectUserDetails);
  const syncError = useSelector(selectSyncError);

  const product = productDetails;
  const navigate = useNavigate();
  const [multipleImages, setMultipleImages] = useState([]);
  const [primaryImage, setPrimaryImage] = useState(0);

  const [container, setContainer] = useState(null);
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [description, setDescription] = useState('');
  const [activeVariants] = useState(
    product.productDetails.product_variants
  );
  const [selectedProductCatId, setSelectedProductCatId] = useState('');
  const [selectedProductSubCatId, setSelectedProductSubCatId] = useState('');
  const [selectedProductGroupId, setSelectedProductGroupId] = useState('');
  const [wspError, setWSPError] = useState(false);
  const [msrpError, setMSRPError] = useState(false);
  let updatedVariants = [];

  const variantsWSPDefaultValues = () => {
    const variantObj = {};
    if (product.productDetails.product_variants.length > 0) {
      product.productDetails.product_variants.forEach((pv, i) => {
        variantObj[`variants.${i}.wsp`] = pv.wsp;
      });
    }
    // console.log('variants-wsp----', variantObj);
    return variantObj;
  };

  const getVariantWSPFieldNames = () => {
    let variantFieldNames = [];
      if (product.productDetails.product_variants.length > 0) {
        variantFieldNames = product.productDetails.product_variants.map((_, i) => {
          return `variants.${i}.wsp`;
        });
      }
      return variantFieldNames;
  }

  const getVariantMSRPFieldNames = () => {
    let variantFieldNames = [];
      if (product.productDetails.product_variants.length > 0) {
        variantFieldNames = product.productDetails.product_variants.map((_, i) => {
          return `variants.${i}.msrp`;
        });
      }
      return variantFieldNames;
  }

  const variantsMSRPDefaultValues = () => {
    const variantObj = {};
    if (product.productDetails.product_variants.length > 0) {
      product.productDetails.product_variants.forEach((pv, i) => {
        variantObj[`variants.${i}.msrp`] = pv.price;
      });
    }
    // console.log('variants-msrp----', variantObj);
    return variantObj;
  };

  const defaultValues = {
    productName: product?.productDetails?.title,
    description: product?.productDetails?.body_html,
    ...variantsWSPDefaultValues(),
    ...variantsMSRPDefaultValues(),
  };
  console.log('defaultValues--defaultValues----', defaultValues);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(FormValidationSchema),
  });

  const watchWSPChange = useWatch({ name: getVariantWSPFieldNames(), control: control });
  const watchMSRPChange = useWatch({ name: getVariantMSRPFieldNames(), control: control });

  useEffect(() => {
    if (watchWSPChange.some(v => v == '')) {
      setWSPError(true);
    } else {
      setWSPError(false);
    }
  }, [watchWSPChange]);

  useEffect(() => {
    if (watchMSRPChange.some(v => v == '')) {
      setMSRPError(true);
    } else {
      setMSRPError(false);
    }
  }, [watchMSRPChange]);

  const filesFormats = ['image/jpeg', 'image/png'];
  // Functions to preview multiple images
  const changeMultipleFiles = (e) => {
    if (e.target.files) {
      const imageArray = Array.from(e.target.files).map((file) => {
        const isRightFormat = filesFormats.includes(file.type);
        if (isRightFormat) {
          return URL.createObjectURL(file);
        }
      });
      setMultipleImages((prevImages) => prevImages.concat(imageArray));
    }
  };

  const removeImage = (i) => {
    multipleImages.splice(i, 1);
    setMultipleImages([...multipleImages]);
  };

  const renderProductImages = (data) => {
    return (
      <>
        {data.length > 0 &&
          data.map((imageUrl, index) => {
            return (
              <React.Fragment key={`${index} img`}>
                <div
                  className={`${primaryImage === index ? 'active ' : ''} pe`}
                  onClick={() => setPrimaryImage(index)}
                >
                  <div className="pe_main">
                    <div className="pe_body">
                      <div className="image">
                        <picture>
                          <img src={imageUrl} alt="" />
                        </picture>
                      </div>
                    </div>
                    <div className="pe_footer">
                      <div className="pe_radio my_list-table">
                        <label
                          htmlFor={'radio-two' + `${index}`}
                          className="radiobox"
                        >
                          <input
                            type="radio"
                            name="radio-filter"
                            id={'radio-two' + `${index}`}
                            value={index}
                            onChange={() => setPrimaryImage(index)}
                            checked={primaryImage === index}
                            defaultChecked={primaryImage === index}
                          />
                          <div className="radiobox-text">
                            <span>
                              {index === 0 ? (
                                <span>Set as Main</span>
                              ) : (
                                <span>Make Primary</span>
                              )}
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="delete-image">
                  <img
                    className="icon"
                    src={Delete}
                    onClick={() => removeImage(index)}
                  />
                </a>
              </React.Fragment>
            );
          })}
      </>
    );
  };
  const handleVariantToggle = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.value;
    const result = activeVariants.map(v => {
      let item;
      if(v.id == value && isChecked) {
        item = {...v, status: '1'};
      } else if(v.id == value && !isChecked) {
        item = {...v, status: '0'}
      } else {
        item = v;
      }
      return item;
    })
    updatedVariants = result;
  };

  useEffect(() => {
    // setMultipleImages([Data.productUrl]);
    // setValue('productUrl', [Data.productUrl]);
    setTags(product.productDetails.product_tags?.map((t) => t.tag));
    const containers = document.getElementById('editor') || null;
    // setDescription(containers.value);
    // setDescription(product.productDetails.body_html);
    setContainer(containers);
  }, []);

  useEffect(() => {
    if (!container) {
      return;
    }
    DecoupledEditor.create(document.getElementById('editor'), {
      alignment: {
        options: ['right', 'left', 'center', 'justify'],
      },
    }).then((editor) => {
      editor.model.document.on('change:data', () => {
        setDescription(editor.getData());
      });
      const toolbarContainer = document.getElementById('toolbar');
      const command = editor.commands.get('alignment');
      toolbarContainer.replaceChild(
        editor.ui.view.toolbar.element,
        toolbarContainer.firstChild
      );
      // editor.execute("bold");
      // editor.execute("alignment:left");
      // setTimeout(() => {
      //   command.execute({ value: 'left' });
      // });
      // command.on('change:value', (evt, name, value) => {
      //   console.log('value-----', value, name, evt);
      //   // setText(`[demos] + ${Math.random()}`);
      //   // setAlign({ textAlign: value, textAlignLast: value });
      // });
    });
  }, [container]);

  useEffect(() => {
    dispatch(getProductCategoriesAction('category', 0));
  }, []);

  useEffect(() => {
    if (selectedProductCatId) {
      dispatch(getProductCategoriesAction('subcategory', selectedProductCatId));
    }
  }, [selectedProductCatId]);

  useEffect(() => {
    if (selectedProductSubCatId) {
      dispatch(getProductCategoriesAction('group', selectedProductSubCatId));
    }
  }, [selectedProductSubCatId]);

  const transformVariants = () => {

    return updatedVariants.map((v) => {
      const item = {
        id: v.id,
        sku: v.sku,
        wsp: v.wsp,
        msrp: v.price,
        status: parseInt(v.status),
      };
      return item;
    });
  };

  const handleSave = (data) => {
    const variantsObjArr = transformVariants();
    const variantsWithUpdatedPrice = data.variants.map((v, i) => {
      const item = variantsObjArr.find((e, index) => i == index);
      const newItem = {...item, wsp: v.wsp, msrp: v.msrp};
      return newItem;
    })
    if(wspError || msrpError || !selectedProductCatId || !selectedProductSubCatId) return;
    const dataToUpdate = {
      product_name: data?.productName,
      product_description: description,
      tags: tags,
      daysToFulfill: data?.daysToFulfill,
      product_category: {
        select_category: selectedProductCatId,
        select_sub_category: selectedProductSubCatId,
        select_group: selectedProductGroupId,
      },
      shopifyImageId: product.productDetails.product_images[0].shopify_image_id,
      product_variant: variantsWithUpdatedPrice,
    };
    dispatch(editProductDetailsAction(dataToUpdate, params?.id));
    // navigate({
    //     pathname:
    //         navigate(-1) === undefined ?
    //          '/brand/products'
    //             : navigate(-1),
    // });
  };

  useEffect(() => {
    //
  }, []);

  const removeTags = (e) => {
    const tagsValue = tags.filter((ele) => ele !== e);
    setTags(tagsValue);
  };

  const onChangeTagsInputValue = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const tagsCopy = tags;
      tagsCopy.push(inputValue);
      setTags(tagsCopy);
      setInputValue('');
    }
  };

  const doSync = async () => {
    dispatch(
      syncSingleProductAction({
        product_id: productDetails?.productDetails?.shopify_product_id,
        user_id: userDetails.id,
      })
    );
  };

  return (
    <div className="wrapper">
      <BrandHeader />
      <main className="content mp-content edit-product">
        <form onSubmit={handleSubmit(handleSave)}>
          <section className="section products mp-section">
            <div className="products_content">
              <div className="products_head mp-head">
                <div className="products_head-content">
                  <div className="title">
                    <div
                      onClick={() =>
                        navigate({
                          pathname:
                            navigate(-1) === undefined
                              ? 'brand/products'
                              : navigate(-1),
                        })
                      }
                    >
                      <NavLink>
                        <img className="icon" src={LeftArrowIcon} />
                      </NavLink>
                    </div>
                    <div className="title">
                      <h1>Editing: {product.productDetails.title} </h1>
                    </div>
                    <button
                      className="button button-sky-blue remove-all-from-my-list large"
                      onClick={doSync}
                    >
                      Sync Product from Shopify
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="button button-dark black large"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    <img className="icon" src={saveIcon} />
                    Save Changes
                  </button>
                </div>
              </div>
              <div className="products_body light-gray-bg">
                <div className="products_middle">
                  <div className="content_area">
                    <div className="edit-product_area">
                      {syncError && (
                        <div
                          className="alert alert-error d-flex align-items-center"
                          role="alert"
                        >
                          <img className="icon" src={info}></img>
                          <div>
                            Unfortunately, the syncing of the product was not
                            successful. Please try again.
                          </div>
                        </div>
                      )}

                      {(!selectedProductCatId || wspError || msrpError) && <div
                        className="alert alert-warning d-flex align-items-start"
                        role="alert"
                      >
                        <img className="icon" src={DangerIcon} />
                        {<div className="notes">
                          {!selectedProductCatId && (
                            <div>
                              Please fill this required field:{' '}
                              <a href="#">Product Category</a>
                            </div>
                          )}
                          {/* {isAnySKUEmpty() && <div>
                            Please sync <a href="#">SKU</a> from your Shopify
                            Store
                          </div>} */}
                          {wspError && <div>
                            Please enter <a href="#">WSP</a>
                          </div>}
                          {msrpError && <div>
                            Please enter <a href="#">MSRP</a>
                          </div>}
                        </div>}
                      </div>}

                      <div
                        className="alert alert-warning d-flex align-items-center"
                        role="alert"
                      >
                        <div className="alert-warning-title">
                          You must complete the following configurations before
                          updating the details of a product
                          <ul>
                            <li>Brand Profile</li>
                            <li>Getting Paid</li>
                          </ul>
                          <button className="button button-white close">
                            Go to Settings
                          </button>
                        </div>
                      </div>
                      <div className="edit-product_tabs">
                        <div id="product-info">
                          <div className="pi-area">
                            <div className="product-item-left">
                              <div className="product-item-list">
                                <div className="bd-callout mt-0">
                                  Product Info
                                  <span className="asterisk-red">*</span>
                                </div>
                                <div className="form-input">
                                  <label
                                    htmlFor="Productname"
                                    className="form-label"
                                  >
                                    Product name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    // id="Productname"
                                    placeholder="Summer Activities Chips for Kids"
                                    {...register('productName', {
                                      required: true,
                                    })}
                                  />
                                  {errors?.productName && (
                                    <span className="error-text">
                                      {errors?.productName?.message}
                                    </span>
                                  )}
                                </div>
                                <div className="form-input">
                                  <label
                                    htmlFor="ProductDescription"
                                    className="form-label"
                                  >
                                    Product description
                                  </label>
                                  <div className="editor">
                                    <div className="content-info-">
                                      <div
                                        data-editor="ClassicEditor"
                                        data-collaboration="false"
                                        data-revision-history="false"
                                      >
                                        <main>
                                          <div className="text-add">
                                            <p></p>
                                            <div id="toolbar">
                                              <i></i>
                                            </div>
                                            <div
                                              className="text-editor"
                                              value={description}
                                              style={{
                                                width: '100%',
                                                height: '200px',
                                              }}
                                              id="editor"
                                            >
                                              <div className="centered">
                                                <div className="">
                                                  <div className="editor-container">
                                                    <div className="editor">
                                                      <p>
                                                        {
                                                          product.productDetails
                                                            .body_html
                                                        }
                                                      </p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </main>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-item-list">
                                <div id="product-images">
                                  <div className="pm-area">
                                    <div className="bd-callout mt-0">
                                      Product Images <span>(12)</span>
                                      <span className="asterisk-red">*</span>
                                    </div>
                                    <div className="product-images product-images pi-radio">
                                      {/* The render function with the multiple image state */}
                                      {renderProductImages(multipleImages)}
                                    </div>

                                    <div className="upload-image-area">
                                      <img src={AddImageIcon} />
                                      <p className="dragBox">
                                        Drag &amp; drop image to upload (max.
                                        file size 20 MB per image)
                                        <input
                                          type="file"
                                          name="file"
                                          multiple
                                          {...register('file', {
                                            required: false,
                                            validate: {
                                              lessThan20MB: (files) =>
                                                files[0]?.size < 30000 ||
                                                'Max 30kb',
                                              acceptedFormats: (files) =>
                                                [
                                                  'image/jpeg',
                                                  'image/png',
                                                  'image/gif',
                                                ].includes(files[0]?.type),
                                            },
                                          })}
                                          onChange={changeMultipleFiles}
                                        />
                                      </p>
                                      <label
                                        htmlFor="uploadFile"
                                        className="button button-white"
                                      >
                                        Upload Image
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-item-right">
                              <div className="product-item-list mt-0 pdc-area">
                                <div className="bd-callout mt-0 mb-2">
                                  Product Category{' '}
                                  <span className="asterisk-red">*</span>
                                </div>
                                <p className="productc-note">
                                  Assigning the Product Category will help
                                  retailers find your products.
                                </p>
                                <div className="form-data">
                                  <select
                                    // value={selected.category}
                                    onChange={(event) =>
                                      setSelectedProductCatId(
                                        event.target.value
                                      )
                                    }
                                  >
                                    <option value="">Select a category</option>
                                    {productCatOptions.map((category) => (
                                      <option
                                        key={category.id}
                                        value={category.id}
                                      >
                                        {category.name}
                                      </option>
                                    ))}
                                  </select>
                                  <select
                                    disabled={!selectedProductCatId}
                                    // value={selected.subcategory}
                                    onChange={(event) =>
                                      setSelectedProductSubCatId(
                                        event.target.value
                                      )
                                    }
                                  >
                                    <option value="">
                                      Select a subcategory
                                    </option>
                                    {productSubCatOptions.map((subcategory) => (
                                      <option
                                        key={subcategory.id}
                                        value={subcategory.id}
                                      >
                                        {subcategory.name}
                                      </option>
                                    ))}
                                  </select>
                                  <select
                                    disabled={!selectedProductSubCatId}
                                    // value={selected.group}
                                    onChange={(event) =>
                                      setSelectedProductGroupId(
                                        event.target.value
                                      )
                                    }
                                  >
                                    <option value="">Select a group</option>
                                    {productGroupOptions.map((group) => (
                                      <option key={group.id} value={group.id}>
                                        {group.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                              <div
                                id="product-shipping"
                                className="product-item-list mt-4"
                              >
                                <div className="pv-area">
                                  <div className="bd-callout mt-0 mb-0">
                                    Days to Fulfill{' '}
                                    <span className="asterisk-red">*</span>
                                  </div>

                                  <div className="shipping-fee-form">
                                    <div className="fee-area mb-0 mt-2">
                                      <div className="form-input radio-input">
                                        <label
                                          htmlFor="Productname"
                                          className="form-label"
                                        ></label>
                                        <div className="time-radio-group mb-2">
                                          <div className="category-data">
                                            <div className="checkbox checkbox--no-decor">
                                              <label htmlFor="time-1">
                                                <input
                                                  type="radio"
                                                  id="time-1"
                                                  name="p-tag"
                                                  value="3-7"
                                                  {...register('daysToFulfill')}
                                                />
                                                <div className="checkbox-text">
                                                  <span className="category-name">
                                                    3-7
                                                  </span>
                                                </div>
                                              </label>
                                            </div>
                                            <div className="checkbox checkbox--no-decor">
                                              <label htmlFor="time-2">
                                                <input
                                                  type="radio"
                                                  id="time-2"
                                                  name="p-tag"
                                                  value="7-14"
                                                  {...register('daysToFulfill')}
                                                />
                                                <div className="checkbox-text">
                                                  <span className="category-name">
                                                    {''}
                                                    7-14
                                                  </span>
                                                </div>
                                              </label>
                                            </div>
                                            <div className="checkbox checkbox--no-decor">
                                              <label htmlFor="time-3">
                                                <input
                                                  type="radio"
                                                  id="time-3"
                                                  name="p-tag"
                                                  value="14-21"
                                                  {...register('daysToFulfill')}
                                                />
                                                <div className="checkbox-text">
                                                  <span className="category-name">
                                                    14-21
                                                  </span>
                                                </div>
                                              </label>
                                            </div>
                                            <div className="checkbox checkbox--no-decor">
                                              <label htmlFor="time-4">
                                                <input
                                                  type="radio"
                                                  id="time-4"
                                                  name="p-tag"
                                                  value="21"
                                                  {...register('daysToFulfill')}
                                                />
                                                <div className="checkbox-text">
                                                  <span className="category-name">
                                                    {' '}
                                                    &gt; 21
                                                  </span>
                                                </div>
                                              </label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="product-tag">
                                <div className="pa-title">
                                  <h3>Tags</h3>
                                </div>
                                <p className="tag-note">
                                  Only you as a Brand will be able to view these
                                  tags.
                                </p>
                                <input
                                  type="text"
                                  id="tags-input"
                                  className="tag-text"
                                  placeholder="Add tag"
                                  value={inputValue}
                                  onChange={onChangeTagsInputValue}
                                  onKeyDown={handleKeyDown}
                                />
                                <div className="tab-list">
                                  {tags.length > 0 &&
                                    tags.map((e, i) => (
                                      <div
                                        className="checkbox checkbox--no-decor m-1"
                                        key={`${i} tags`}
                                      >
                                        <label className="tag-lbl">
                                          <div
                                            className="checkbox-text"
                                            key={`${i} close`}
                                          >
                                            {e}
                                            <span
                                              className="closebtn"
                                              onClick={() => removeTags(e)}
                                            >
                                              ×
                                            </span>
                                          </div>
                                        </label>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="product-variants"
                          className="product-item-list"
                        >
                          <div className="pv-area">
                            <div className="bd-callout mt-0 mb-4">
                              Product Variants (
                              {product.productDetails.product_variants.length}){' '}
                              <span className="asterisk-red">*</span>
                            </div>
                            <div
                              className="alert alert-primary d-flex align-items-center"
                              role="alert"
                            >
                              <img className="icon-Blue" src={info}></img>
                              <div>
                                You must include at least one (1) product
                                variant. SKU, WSP, and MSRP are required fields.
                              </div>
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
                                          <img
                                            className="icon"
                                            src={DownIcon}
                                          />
                                        </button>
                                      </div>
                                    </th>
                                    <th>
                                      <div className="txt">
                                        Color
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
                                        SKU
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
                                        Barcode
                                        <div className="tooltip">
                                          <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                                            <img
                                              className="icon-info"
                                              src={info}
                                            ></img>
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
                                        <div className="tooltip">
                                          <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                                            <img
                                              className="icon-info"
                                              src={info}
                                            ></img>
                                          </div>
                                          <div className="tooltip_text">
                                            <p>
                                              The inventory published within
                                              ShopDot is based on the inventory
                                              from your Shopify store x the
                                              inventory buffer that you set
                                              under Settings-Preferences.
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
                                        WSP
                                        <div className="tooltip">
                                          <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                                            <img
                                              className="icon-info"
                                              src={info}
                                            ></img>
                                          </div>
                                          <div className="tooltip_text">
                                            <p>
                                              WSP stands for Wholesale Price.
                                              This is the price that retailers
                                              pay brands.
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
                                        MSRP
                                        <button className="sort">
                                          <img
                                            className="icon"
                                            src={DownIcon}
                                          />
                                        </button>
                                      </div>
                                    </th>
                                    <th>
                                      <div className="product-activation">
                                        <span>Allow</span>
                                        <div className="my-toggle-btn">
                                          <input
                                            type="checkbox"
                                            id="checkbox11"
                                          />
                                          <label htmlFor="checkbox11">
                                            <span
                                              className="on"
                                              title="on"
                                            ></span>
                                            <span
                                              className="off"
                                              title="off"
                                            ></span>
                                          </label>
                                        </div>
                                        <div className="tooltip">
                                          <div className="tooltip-icon tooltip-icon-info ic-if-blue">
                                            <img
                                              className="icon-info"
                                              src={info}
                                            ></img>
                                          </div>
                                          <div className="tooltip_text">
                                            <p>
                                              Select variants you want to allow
                                              for ShopDot.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="scroll-table">
                                  {activeVariants &&
                                    activeVariants.length > 0 &&
                                    activeVariants.map((item, i) => (
                                      <tr
                                        key={`${
                                          item?.id
                                        } product ${new Date().getTime()}`}
                                      >
                                        <td>
                                          <div className="image image--cover image--1-1">
                                            <picture>
                                              <img
                                                src={item?.image}
                                                alt="img"
                                              />
                                            </picture>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="txt">
                                            {item?.material}
                                          </div>
                                        </td>
                                        <td>
                                          <div className="txt">
                                            {item?.title}
                                          </div>
                                        </td>
                                        <td>
                                          <div className="txt vin-txt">
                                            {item?.sku}
                                          </div>
                                        </td>
                                        <td>
                                          <div className="txt">
                                            {item?.barcode}
                                          </div>
                                        </td>
                                        <td>
                                          <div className="txt">
                                            {item?.inventory_quantity}
                                          </div>
                                        </td>
                                        <td>
                                          <div className="txt">
                                            <input
                                              type="text"
                                              className="tabel-text"
                                              {...register(`variants.${i}.wsp`)}
                                              // placeholder="0.00"
                                            />
                                          </div>
                                        </td>

                                        <td>
                                          <div className="txt">
                                            <input
                                              type="text"
                                              className="tabel-text"
                                              {...register(
                                                `variants.${i}.msrp`
                                              )}
                                              //placeholder="0.00"
                                            />
                                          </div>
                                        </td>
                                        <td>
                                          <div className="product-activation">
                                            <span>Allow</span>
                                            <div className="my-toggle-btn">
                                              <input
                                                id={`checkbox${item?.id}`}
                                                type="checkbox"
                                                value={item.id}
                                                // checked={getActiveVariantID(item.id)}
                                                onChange={handleVariantToggle}
                                              />
                                              <label
                                                htmlFor={`checkbox${item?.id}`}
                                              >
                                                <span
                                                  className="on"
                                                  title="on"
                                                ></span>
                                                <span
                                                  className="off"
                                                  title="off"
                                                ></span>
                                              </label>
                                            </div>
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
                </div>
              </div>
            </div>
          </section>
        </form>
      </main>
      <ToastContainer />
    </div>
  );
}
