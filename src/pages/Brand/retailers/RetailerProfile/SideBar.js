import React, { useEffect, useState } from 'react';
import searchIcon from '../../images/icons/icon-search.svg';
import clearIcon from '../../images/icons/icon-close.svg';
import ArrowLeft from '../../images/icons/icon-arrow--left.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
    resetToInitial,
    setProductFilter,
} from '../../../../redux/Brand/RetailerProfile/retailerProfileSlice';
import {
    selectProfileProductCategory,
    selectProfileProductFilter,
    selectProfileProductTags,
} from '../../../../redux/Brand/RetailerProfile/retailerProfileSelector';

function SideBar() {
    const dispatch = useDispatch();
    const productFilterValue = useSelector(selectProfileProductFilter);
    const productCategory = useSelector(selectProfileProductCategory);
    const productTags = useSelector(selectProfileProductTags);
    const [productCatOption, setProductCatOption] = useState([]);
    const [productTagOption, setProductTagOption] = useState([]);
    const [productTagClon, setProductTagOptionClon] = useState([]);
    const [productCatFilterVal, setProductCatFilterVal] = useState('');
    const [productTagFilterVal, setProductTagFilterVal] = useState('');
    const [productsFilter, setProductsFilter] = useState(productFilterValue);
    const [openCloseFilter, setOpenCloseFilter] = useState(true);
    useEffect(() => {
        setProductCatOption(productCategory);
        setProductTagOption(productTags);
        setProductTagOptionClon(productTags);
    }, []);

    useEffect(() => {
        setProductsFilter(productFilterValue);
        setProductCatFilterVal(productFilterValue?.productCatFilter);
        setProductTagFilterVal(productFilterValue?.productTagFilter);
    }, [productFilterValue]);

    const handleOpenCloseFilter = () => {
        setOpenCloseFilter(!openCloseFilter);
    };

    const handleSearch = (e) => {
        const searchQuery = e.target.value.trim().toLowerCase();
        if (searchQuery) {
            const searchWords = searchQuery.split(/\s+/);
            const searchValue = productTagClon.filter((ele) => {
                const tags = ele.toLowerCase().split(' ');
                return searchWords.every((word) =>
                    tags.some((tag) => tag.includes(word))
                );
            });
            setProductTagOption(searchValue);
        } else {
            setProductTagOption(productTagClon);
        }
    };

    const handleProductTagOption = (e) => {
        const isChecked = e.target.checked;
        const value = e.target.value;
        const newData = JSON.parse(JSON.stringify(productsFilter));
        if (isChecked) {
            newData.productTagFilter.push(value);
            setProductsFilter({ ...newData });
            setProductTagFilterVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.productTagFilter.filter(
                (product) => product !== value
            );
            newData.productTagFilter = newCategory;
            setProductsFilter({ ...newData });
            setProductTagFilterVal(newCategory);
        }
        dispatch(setProductFilter({ ...newData }));
    };

    const handleProductCatOption = (item) => {
        const isChecked = item.target.checked;
        const value = item.target.value;
        const newData = JSON.parse(JSON.stringify(productsFilter));
        if (isChecked) {
            newData.productCatFilter.push(value);
            setProductsFilter({ ...newData });
            setProductCatFilterVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.productCatFilter.filter(
                (product) => product !== value
            );
            newData.productCatFilter = newCategory;
            setProductsFilter({ ...newData });
            setProductCatFilterVal(newCategory);
        }
        dispatch(setProductFilter({ ...newData }));
    };
    const handleClearFilter = () => {
        setProductCatFilterVal([]);
        setProductTagFilterVal([]);
        dispatch(resetToInitial());
    };

    return (
        <>
            <aside
                className={`filters filter-retailer ${
                    openCloseFilter ? '' : 'hidden'
                }`}
            >
                <div className="filters_wrap">
                    <div className="filters_block filters_block-head pb-0">
                        <button
                            className="filters_hide-and-show"
                            onClick={() => handleOpenCloseFilter()}
                        >
                            <img className="icon" src={ArrowLeft} />
                        </button>

                        <span
                            className="filters-clear"
                            onClick={handleClearFilter}
                        >
                            Clear Filters
                        </span>
                    </div>
                    <div className="filters_block-body">
                        <div className="filter-by-products">
                            <div className="filter_body pt-3 pb-5">
                                <div className="filters_block filters_block-body">
                                    <div className="filter-by-products filter-bdr-none">
                                        <div className="link-sidebar">
                                            <div className="subfilters">
                                                <div className="subfilter">
                                                    <div className="subfilter_head">
                                                        Product Category
                                                    </div>
                                                    <div className="subfilter_body">
                                                        {(
                                                            productCatOption ||
                                                            []
                                                        ).map((item, i) => {
                                                            return (
                                                                <div
                                                                    key={i}
                                                                    className="checkbox checkbox--no-decor"
                                                                >
                                                                    <label>
                                                                        <input
                                                                            type="checkbox"
                                                                            value={
                                                                                item
                                                                            }
                                                                            name="bs"
                                                                            onChange={
                                                                                handleProductCatOption
                                                                            }
                                                                            checked={productCatFilterVal?.includes(
                                                                                item
                                                                            )}
                                                                        />
                                                                        <div className="checkbox-text">
                                                                            {
                                                                                item
                                                                            }
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="subfilter">
                                                    <div className="subfilter_head">
                                                        Product tag
                                                    </div>
                                                    <div className="subfilter_body">
                                                        <form className="filter_form search_form mb-3">
                                                            <div className="search_form-input">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Search"
                                                                    onChange={
                                                                        handleSearch
                                                                    }
                                                                />
                                                            </div>
                                                            <button
                                                                type="cancel"
                                                                className="search_form-button"
                                                            >
                                                                <div className="icon">
                                                                    <img
                                                                        src={
                                                                            clearIcon
                                                                        }
                                                                    />
                                                                </div>
                                                            </button>
                                                            <button type="submit"></button>
                                                            <div className="icon">
                                                                <img
                                                                    src={
                                                                        searchIcon
                                                                    }
                                                                />
                                                            </div>
                                                        </form>
                                                        <div className="filter_form-items">
                                                            {(
                                                                productTagOption ||
                                                                []
                                                            ).map((item, i) => {
                                                                return (
                                                                    <div
                                                                        className="checkbox checkbox--no-decor"
                                                                        key={i}
                                                                    >
                                                                        <label>
                                                                            <input
                                                                                type="checkbox"
                                                                                id="product-tag-1"
                                                                                name="product-tag"
                                                                                value={
                                                                                    item
                                                                                }
                                                                                onChange={
                                                                                    handleProductTagOption
                                                                                }
                                                                                checked={productTagFilterVal?.includes(
                                                                                    item
                                                                                )}
                                                                            />
                                                                            <div className="checkbox-text">
                                                                                {
                                                                                    item
                                                                                }
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
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default SideBar;
