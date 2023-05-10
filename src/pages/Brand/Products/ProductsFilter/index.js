import React, { useEffect, useState } from 'react';
import ArrowLeft from '../../images/icons/icon-arrow--left.svg';
import {
    resetToInitial,
    setProductCatFilter,
    setProductTagsFilter,
    setStockFilter,
} from '../../../../redux/Brand/Products/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectProductFilter,
    selectProductCategory,
    selectProductTags,
    selectStockOptions,
} from '../../../../redux/Brand/Products/productSelectors';
import { getProductTagsAction, getProductCategoriesAction } from '../../../../actions/productActions';

export default function ProductsFilters() {
    const dispatch = useDispatch();
    const productFilterValue = useSelector(selectProductFilter);
    const productCategory = useSelector(selectProductCategory);
    const productTags = useSelector(selectProductTags);
    const stockOptions = useSelector(selectStockOptions);
    const [show, setShow] = useState(true);
    const [categoryIdsToFilter, setCategoryIdsToFilter] = useState([]);
    const [productTagsToFilter, setProductTagsToFilter] = useState([]);
    const [stockToFilter, setStockToFilter] = useState([]);


    useEffect(() => {
        dispatch(getProductCategoriesAction());
        dispatch(getProductTagsAction());
    }, []);

    const handleProductCatOption = (e, i) => {
        const isChecked = e.target.checked;
        const value = e.target.value;
        const categoryIdsCopy = categoryIdsToFilter;
        if(isChecked){
            categoryIdsCopy.push(parseInt(value));
            setCategoryIdsToFilter(categoryIdsCopy);
            dispatch(setProductCatFilter(categoryIdsCopy));
        } else {
            const filter = categoryIdsCopy.filter(catId => catId !== value);
            setCategoryIdsToFilter(filter);
            dispatch(setProductCatFilter(filter));
        }
    };

    const handleProductTagOption = (e, i) => {
        const isChecked = e.target.checked;
        const value = e.target.value;
        const productTagsToFilterCopy = productTagsToFilter;
        if (isChecked) {
            productTagsToFilterCopy.push(value);
            setProductTagsToFilter(productTagsToFilterCopy);
            dispatch(setProductTagsFilter(productTagsToFilterCopy));
        } else {
            const filter = productTagsToFilterCopy.filter(pTag => pTag !== value);
            setProductTagsToFilter(filter);
            dispatch(setProductTagsFilter(filter));
        }
    };

    const handleStockOption = (e) => {
        const isChecked = e.target.checked;
        const value = e.target.value;
        const stockToFilterCopy = stockToFilter;
        if (isChecked) {
            stockToFilterCopy.push(value);
            setStockToFilter(stockToFilterCopy);
            dispatch(setStockFilter(stockToFilterCopy))
        } else {
            const filter = stockToFilterCopy.filter(pTag => pTag !== value);
            setStockToFilter(filter);
            dispatch(setStockFilter(filter));
        }
    };

    const handleClearFilter = () => {
        dispatch(resetToInitial());
    };

    return (
        <aside className={show === true ? 'filters' : 'filters hidden'}>
            <div className="filters_wrap">
                <div className="filters_block filters_block-head">
                    <button
                        className="filters_hide-and-show"
                        onClick={() => {
                            show === true ? setShow(false) : setShow(true);
                        }}
                    >
                        <img className="icon" src={ArrowLeft} />
                    </button>
                    {show === true && (
                        <div
                            className="filters-clear"
                            onClick={() => handleClearFilter()}
                        >
                            Clear Filters
                        </div>
                    )}
                </div>
                <div className="filters_block filters_block-body">
                    <div className="filter open filter-by-brand">
                        <div className="filter_body">
                            <div className="subfilters">
                                <div className="subfilter">
                                    <div className="subfilter_head">
                                        Product category
                                    </div>
                                    <div className="subfilter_body">
                                        <div className="filter_form-items">
                                            {(productCategory || []).map((item, i) => {
                                                return (
                                                    <div
                                                        key={i}
                                                        className="checkbox checkbox--no-decor"
                                                    >
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={item.id}
                                                                name="bs"
                                                                onChange={(event) => {
                                                                    handleProductCatOption(event, i);
                                                                }}
                                                            />
                                                            <div className="checkbox-text">
                                                                {item?.name}
                                                            </div>
                                                        </label>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="subfilter">
                                    <div className="subfilter_head">
                                        Product tags
                                    </div>
                                    <div className="subfilter_body">
                                        <div className="filter_form-items">
                                            {(productTags || []).map(
                                                (item, i) => {
                                                    return (
                                                        <div
                                                            className="checkbox checkbox--no-decor"
                                                            key={i}
                                                        >
                                                            <label>
                                                                <input
                                                                    type="checkbox"
                                                                    name="bsa"
                                                                    value={item?.tag}
                                                                    onChange={(event) => {
                                                                        handleProductTagOption(event, i)
                                                                    }}
                                                                />
                                                                <div className="checkbox-text">
                                                                    {item.tag}
                                                                </div>
                                                            </label>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="subfilter">
                                    <div className="subfilter_head">Stock</div>
                                    <div className="subfilter_body">
                                        {(stockOptions || []).map((item, i) => {
                                            return (
                                                <div
                                                    className="checkbox checkbox--no-decor"
                                                    key={i}
                                                >
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            name="bsa"
                                                            value={item}
                                                            onChange={handleStockOption}
                                                        />
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
        </aside>
    );
}
