import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../images/icons/close-icon.svg';
import { mainCategory, subCategory, group, categoryDatas } from '../utils';
import saveIcon from '../../../../assets/images/icons/save.svg';
import { getProductCategoriesAction } from '../../../../actions/productActions';
import {
  selectProductCategory,
  selectProductGroupOptions,
  selectProductSubCatOptions,
  selectProductTags,
} from '../../../../redux/Brand/Products/productSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { cloneDeep, map, remove } from 'lodash';

export default function CategoryTagPopupModal(props) {
  const {
    handalPopup,
    typeofTag,
    changeTag,
    data,
    productId,
    saveCallback,
    selectedProduct,
  } = props;
  const [keyword, setKeyWord] = useState(data);
  const [inputValue, setInputValue] = useState('');

  const [main_Category, setMainCategory] = useState([]);
  const [sub_Category, setSubCategory] = useState([]);
  const [categoryGroup, setCategpryGroup] = useState([]);

  const [categoryData, setCategoryData] = useState(categoryDatas);
  const [selectedCategory, setSelectedCategory] = useState({});

  const [selectedProductCatId, setSelectedProductCatId] = useState(null);
  const [selectedProductSubCatId, setSelectedProductSubCatId] = useState(null);
  const [selectedProductGroupId, setSelectedProductGroupId] = useState(null);

  const productTags = useSelector(selectProductTags);

  const dispatch = useDispatch();

  const productCatOptions = useSelector(selectProductCategory);
  const productSubCatOptions = useSelector(selectProductSubCatOptions);
  const productGroupOptions = useSelector(selectProductGroupOptions);

  useEffect(() => {
    if (typeofTag === 'tag') {
      if (selectedProduct?.product_tags?.length) {
        let updateArray = [];
        map(selectedProduct?.product_tags, (ta, key) => {
          updateArray.push(ta.tag);
        });
        setKeyWord(updateArray);
      }
    } else {
      if (selectedProduct?.product_categories?.[0]) {
        const temp = selectedProduct?.product_categories?.[0];
        setSelectedProductCatId(
          temp?.parent_category?.super_category?.category_id
        );
        setTimeout(() => {
          setSelectedProductSubCatId(temp?.parent_category?.category_id);
        }, 350);
        setTimeout(() => {
          setSelectedProductGroupId(temp?.category_id);
        }, 700);
      }
      dispatch(getProductCategoriesAction('category', 0));
    }
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

  useEffect(() => {
    const categoryData = JSON.parse(localStorage.getItem('Category'));
    if (categoryData !== null) {
      categoryData.map((ele) => {
        if (ele.id === productId) {
          setMainCategory(ele.mainCategory);
          setSubCategory(ele.subCategory);
          setCategpryGroup(ele.categoryGroup);
        }
      });
    }
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddKeyword = (event) => {
    if (event.which == 13 && inputValue != '') {
      setKeyWord([...keyword, inputValue]);
      setInputValue('');
    }
  };

  const removeTags = (currentKey) => {
    let updateTags = cloneDeep(keyword);
    remove(updateTags, (i, k) => {
      return i == currentKey;
    });
    setKeyWord(updateTags);
  };

  const handleSave = () => {
    // const categoryData = JSON.parse(localStorage.getItem('Category')) || [];
    // if (categoryData.length !== 0) {
    //   const findIdex = categoryData.findIndex((ele) => ele.id === productId);
    //   if (findIdex === -1) {
    //     const category = {
    //       mainCategory: main_Category,
    //       subCategory: sub_Category,
    //       categoryGroup: categoryGroup,
    //       id: productId,
    //     };
    //     categoryData.push(category);
    //     localStorage.setItem('Category', JSON.stringify(categoryData));
    //   } else {
    //     categoryData[findIdex] = {
    //       mainCategory: main_Category,
    //       subCategory: sub_Category,
    //       categoryGroup: categoryGroup,
    //       id: productId,
    //     };
    //     localStorage.setItem('Category', JSON.stringify(categoryData));
    //   }
    // } else {
    //   const category = {
    //     mainCategory: main_Category,
    //     subCategory: sub_Category,
    //     categoryGroup: categoryGroup,
    //     id: productId,
    //   };
    //   categoryData.push(category);
    //   localStorage.setItem('Category', JSON.stringify(categoryData));
    // }
    // if (typeofTag == 'tag') {
    //   console.log('Keyword -->', keyword);
    // } else {

    // }
    if (typeofTag == 'tag') {
      saveCallback(keyword);
    } else {
      saveCallback({
        select_category: selectedProductCatId,
        select_sub_category: selectedProductSubCatId,
        select_group: selectedProductGroupId,
      });
    }
    handalPopup({});
  };

  const handleChangeMainCateogryStatus = (item, index) => {
    const newCategory = categoryData.map((i) => {
      if (item.id == i.id) {
        return { ...i, status: 'active' };
      }
      return { ...i, status: 'inactive' };
    });
    setMainCategory(newCategory);
    setSubCategory(item.sub_category);
    setCategpryGroup([]);
    setSelectedCategory({
      ...selectedCategory,
      main_category: { value: item.value, status: 'active' },
    });
  };

  const renderMainCategoryContain = () => {
    return productCatOptions.map((item, index) => {
      return (
        <div
          className="checkbox checkbox--no-decor"
          key={item.id}
          id={item.name}
        >
          <label htmlFor="p-tag-11">
            <input
              type="radio"
              id="p-tag-11"
              name="p-tag"
              checked={selectedProductCatId == item.id ? true : false}
            />
            <div
              className="checkbox-text"
              onClick={() => {
                setSelectedProductSubCatId(null);
                setSelectedProductGroupId(null);
                setSelectedProductCatId(item.id);
              }}
            >
              <span className="icon-size">
                <svg className="icon ct-kids"></svg>
              </span>
              <span className="category-name">{item.name}</span>
            </div>
          </label>
        </div>
      );
    });
  };

  const handleChangeSubCategoryStatus = (item) => {
    const newCategory = sub_Category.map((i) => {
      if (item.id == i.id) {
        return { ...i, status: 'active' };
      }
      return { ...i, status: 'inactive' };
    });
    setSubCategory(newCategory);
    setCategpryGroup(item.group);
    setSelectedCategory({
      ...selectedCategory,
      sub_category: { value: item.value, status: 'active' },
    });
  };

  console.log(selectedProductSubCatId, 'productSubCatOptions');

  const renderSubCategory = () => {
    // const selecetMainCategory = main_Category.filter(
    //     (item) => item.status === 'active'
    // );

    // const findSubcategoryBasedOnMainCategory =
    //     selecetMainCategory.length &&
    //     sub_Category.filter(
    //         (item) => item.main_category_id === selecetMainCategory[0].id
    //     );
    if (selectedProductCatId) {
      return productSubCatOptions.map((i, index) => {
        return (
          <div className="checkbox checkbox--no-decor" key={index}>
            <label htmlFor="p-tag-a">
              <input
                type="radio"
                id="p-tag-a"
                name="ap-tag"
                checked={selectedProductSubCatId == i.id ? true : false}
              />
              <div
                className="checkbox-text"
                onClick={() => {
                  setSelectedProductGroupId(null);
                  setSelectedProductSubCatId(i.id);
                }}
              >
                {i.name}
              </div>
            </label>
          </div>
        );
      });
    }
  };

  const handleChangeGroupStatus = (item) => {
    const newCategory = categoryGroup.map((i) => {
      if (item.id == i.id) {
        return { ...i, status: 'active' };
      }
      return { ...i, status: 'inactive' };
    });
    setCategpryGroup(newCategory);
    setSelectedCategory({
      ...selectedCategory,
      group: { value: item.value, status: 'active' },
    });
  };

  const renderGroupCategory = () => {
    // const selectSubCategory = sub_Category.filter(
    //     (item) => item.selected == true
    // );

    // const findGroupCategory =
    //     selectSubCategory.length &&
    //     categoryGroup.filter(
    //         (item) => selectSubCategory[0].id === item.sub_category_id
    //     );
    return productGroupOptions.map((i, index) => {
      if (selectedProductSubCatId) {
        return (
          <div className="checkbox checkbox--no-decor" key={index}>
            <label htmlFor="p-tag-aa">
              <input
                type="radio"
                id="p-tag-aa"
                name="ap-tags"
                checked={selectedProductGroupId == i.id ? true : false}
              />
              <div
                className="checkbox-text"
                onClick={() => {
                  setSelectedProductGroupId(i.id);
                }}
              >
                {i.name}
              </div>
            </label>
          </div>
        );
      }
    });
  };

  return (
    <div className="popup my-product-modal category-modal active">
      <div className="popup_wrapper">
        <div className="popup_content">
          <div className="popup-close" onClick={handalPopup}>
            <img className="icon" src={closeBlackIcon} />
          </div>
          <div className="popup-display active ">
            <div className="retailers-tab">
              <div className="pc_tabs tabs">
                <div className="tab_wrap">
                  <div className="pc_tabs-menu tab_menu direction-row">
                    {typeofTag === 'category' ? (
                      <button
                        data-link="categories"
                        className={
                          typeofTag === 'category'
                            ? 'tab-link active'
                            : 'tab-link'
                        }
                        onClick={() => changeTag('category')}
                      >
                        Categories
                      </button>
                    ) : (
                      <button
                        data-link="tag"
                        className={
                          typeofTag === 'tag' ? 'tab-link active' : 'tab-link'
                        }
                        onClick={() => changeTag('tag')}
                      >
                        Tags
                      </button>
                    )}
                  </div>
                  <div className="action-head">
                    <button
                      className="button button-white cancel"
                      onClick={handalPopup}
                    >
                      Cancel{' '}
                    </button>
                    <button
                      className="button button-orange-dark"
                      onClick={handleSave}
                    >
                      <span className="icon-size">
                        <img src={saveIcon} />
                      </span>
                      Save Changes
                    </button>
                  </div>
                </div>
                <div className="pc_tabs-content tabs_body-tabs p-0">
                  {typeofTag === 'category' && (
                    <div className="tab active" data-target="categories">
                      <div className="tab_inner s-line">
                        <div className="tab_inner-text">
                          <div className="tab-data-area">
                            <div className="category-area">
                              <div className="category-list">
                                <div className="category-items">
                                  <div className="category-title">
                                    Main category:
                                  </div>
                                  <div className="category-data filter">
                                    <div className="subfilter_body">
                                      {renderMainCategoryContain()}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="category-list">
                                <div className="category-items">
                                  <div className="category-title">
                                    Sub-category:
                                  </div>
                                  <div className="category-data filter">
                                    <div className="subfilter_body">
                                      {/* <div className="checkbox checkbox--no-decor">
                                                                                <label htmlFor="p-tag-a">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="p-tag-a"
                                                                                        name="ap-tag"
                                                                                    />
                                                                                    <div className="checkbox-text">
                                                                                        Bath
                                                                                        &amp;
                                                                                        Safety
                                                                                    </div>
                                                                                </label>
                                                                            </div> */}
                                      {renderSubCategory()}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="category-list">
                                <div className="category-items">
                                  <div className="category-title">Group:</div>
                                  <div className="category-data filter">
                                    <div className="subfilter_body">
                                      {/* <div className="checkbox checkbox--no-decor">
                                                                                <label htmlFor="p-tag-aa">
                                                                                    <input
                                                                                        type="radio"
                                                                                        id="p-tag-aa"
                                                                                        name="ap-tags"
                                                                                    />
                                                                                    <div className="checkbox-text">
                                                                                        Arts
                                                                                        &amp;
                                                                                        Crafts
                                                                                    </div>
                                                                                </label>
                                                                            </div> */}
                                      {renderGroupCategory()}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {typeofTag === 'tag' && (
                    <div className="tab active" data-target="tag">
                      <div className="tab_inner">
                        <div className="tab_inner-text">
                          <div className="tab-data-area tag-list">
                            <div className="products_head-content pt-3">
                              <div className="title">
                                <h3 className="p-assigned-title">Add Tag:</h3>
                              </div>
                              <div className="products_head-search">
                                <div className="">
                                  <div className="search_form-input">
                                    <input
                                      type="text"
                                      value={inputValue}
                                      placeholder="Tag name"
                                      onChange={handleInputChange}
                                      onKeyUp={handleAddKeyword}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="category-data filter">
                              <div className="subfilter_body">
                                <div className="tab-list">
                                  {keyword &&
                                    keyword.map((item, index) => {
                                      return (
                                        <div
                                          className="checkbox checkbox--no-decor"
                                          key={item}
                                        >
                                          <label
                                            onClick={() => {
                                              removeTags(item);
                                            }}
                                            className="tag-lbl"
                                          >
                                            <div className="checkbox-text">
                                              {item}
                                            </div>
                                          </label>
                                        </div>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CategoryTagPopupModal.propTypes = {
  changeTag: PropTypes.any,
  typeofTag: PropTypes.any,
  handalPopup: PropTypes.func,
  data: PropTypes.any,
  productId: PropTypes.any,
};
