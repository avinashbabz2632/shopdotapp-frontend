import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../images/icons/close-icon.svg';
import { mainCategory, subCategory, group, categoryDatas } from '../utils';
import saveIcon from '../../../../assets/images/icons/save.svg';

export default function CategoryTagPopupModal(props) {
    const { handalPopup, typeofTag, changeTag, data, productId } = props;
    const [keyword, setKeyWord] = useState(data);
    const [inputValue, setInputValue] = useState('');

    const [main_Category, setMainCategory] = useState([]);
    const [sub_Category, setSubCategory] = useState([]);
    const [categoryGroup, setCategpryGroup] = useState([]);

    const [categoryData, setCategoryData] = useState(categoryDatas);
    const [selectedCategory, setSelectedCategory] = useState({});

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

    const handleSave = () => {
        const categoryData = JSON.parse(localStorage.getItem('Category')) || [];
        if (categoryData.length !== 0) {
            const findIdex = categoryData.findIndex(
                (ele) => ele.id === productId
            );
            if (findIdex === -1) {
                const category = {
                    mainCategory: main_Category,
                    subCategory: sub_Category,
                    categoryGroup: categoryGroup,
                    id: productId,
                };
                categoryData.push(category);
                localStorage.setItem('Category', JSON.stringify(categoryData));
            } else {
                categoryData[findIdex] = {
                    mainCategory: main_Category,
                    subCategory: sub_Category,
                    categoryGroup: categoryGroup,
                    id: productId,
                };
                localStorage.setItem('Category', JSON.stringify(categoryData));
            }
        } else {
            const category = {
                mainCategory: main_Category,
                subCategory: sub_Category,
                categoryGroup: categoryGroup,
                id: productId,
            };
            categoryData.push(category);
            localStorage.setItem('Category', JSON.stringify(categoryData));
        }
        if (typeofTag == 'tag') {
            console.log('Keyword -->', keyword);
        } else {
            console.log('Category -->', selectedCategory);
        }
        handalPopup();
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
        return (
            main_Category.length <= 0
                ? categoryData.length && categoryData
                : main_Category
        ).map((item, index) => {
            return (
                <div
                    className="checkbox checkbox--no-decor"
                    key={item.value}
                    id={item.value}
                >
                    <label htmlFor="p-tag-11">
                        <input
                            type="radio"
                            id="p-tag-11"
                            name="p-tag"
                            checked={item.status == 'active' ? true : false}
                        />
                        <div
                            className="checkbox-text"
                            onClick={() =>
                                handleChangeMainCateogryStatus(item, index)
                            }
                        >
                            <span className="icon-size">
                                <svg className="icon ct-kids"></svg>
                            </span>
                            <span className="category-name">{item.value}</span>
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

    const renderSubCategory = () => {
        // const selecetMainCategory = main_Category.filter(
        //     (item) => item.status === 'active'
        // );

        // const findSubcategoryBasedOnMainCategory =
        //     selecetMainCategory.length &&
        //     sub_Category.filter(
        //         (item) => item.main_category_id === selecetMainCategory[0].id
        //     );
        return (
            sub_Category.length > 0 &&
            sub_Category.map((i, index) => {
                return (
                    <div className="checkbox checkbox--no-decor" key={index}>
                        <label htmlFor="p-tag-a">
                            <input
                                type="radio"
                                id="p-tag-a"
                                name="ap-tag"
                                checked={i.status === 'active' ? true : false}
                            />
                            <div
                                className="checkbox-text"
                                onClick={() => handleChangeSubCategoryStatus(i)}
                            >
                                {i.value}
                            </div>
                        </label>
                    </div>
                );
            })
        );
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
        return (
            categoryGroup.length > 0 &&
            categoryGroup.map((i, index) => {
                return (
                    <div className="checkbox checkbox--no-decor" key={index}>
                        <label htmlFor="p-tag-aa">
                            <input
                                type="radio"
                                id="p-tag-aa"
                                name="ap-tags"
                                checked={i.status == 'active' ? true : false}
                            />
                            <div
                                className="checkbox-text"
                                onClick={() => handleChangeGroupStatus(i)}
                            >
                                {i.value}
                            </div>
                        </label>
                    </div>
                );
            })
        );
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
                                                onClick={() =>
                                                    changeTag('category')
                                                }
                                            >
                                                Categories
                                            </button>
                                        ) : (
                                            <button
                                                data-link="tag"
                                                className={
                                                    typeofTag === 'tag'
                                                        ? 'tab-link active'
                                                        : 'tab-link'
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
                                        <div
                                            className="tab active"
                                            data-target="categories"
                                        >
                                            <div className="tab_inner s-line">
                                                <div className="tab_inner-text">
                                                    <div className="tab-data-area">
                                                        <div className="category-area">
                                                            <div className="category-list">
                                                                <div className="category-items">
                                                                    <div className="category-title">
                                                                        Main
                                                                        category:
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
                                                                    <div className="category-title">
                                                                        Group:
                                                                    </div>
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
                                        <div
                                            className="tab active"
                                            data-target="tag"
                                        >
                                            <div className="tab_inner">
                                                <div className="tab_inner-text">
                                                    <div className="tab-data-area tag-list">
                                                        <div className="products_head-content pt-3">
                                                            <div className="title">
                                                                <h3 className="p-assigned-title">
                                                                    Add Tag:
                                                                </h3>
                                                            </div>
                                                            <div className="products_head-search">
                                                                <div className="">
                                                                    <div className="search_form-input">
                                                                        <input
                                                                            type="text"
                                                                            value={
                                                                                inputValue
                                                                            }
                                                                            placeholder="Tag name"
                                                                            onChange={
                                                                                handleInputChange
                                                                            }
                                                                            onKeyUp={
                                                                                handleAddKeyword
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="category-data filter">
                                                            <div className="subfilter_body">
                                                                <div className="tab-list">
                                                                    {keyword &&
                                                                        keyword.map(
                                                                            (
                                                                                item,
                                                                                index
                                                                            ) => {
                                                                                return (
                                                                                    <div
                                                                                        className="checkbox checkbox--no-decor"
                                                                                        key={
                                                                                            item
                                                                                        }
                                                                                    >
                                                                                        <label className="tag-lbl">
                                                                                            <div className="checkbox-text">
                                                                                                {
                                                                                                    item
                                                                                                }
                                                                                            </div>
                                                                                        </label>
                                                                                    </div>
                                                                                );
                                                                            }
                                                                        )}
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
