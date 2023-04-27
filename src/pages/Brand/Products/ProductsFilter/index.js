import React, { useEffect, useState } from 'react';
import ArrowLeft from '../../images/icons/icon-arrow--left.svg';
import {
    setProductFilter,
    resetToInitial,
} from '../../../../redux/Brand/Products/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectProductFilter,
    selectProductCategory,
    selectProductTags,
    selectStockOptions,
} from '../../../../redux/Brand/Products/productSelectors';

export default function ProductsFilters() {
    const dispatch = useDispatch();
    const productFilterValue = useSelector(selectProductFilter);
    const productCategory = useSelector(selectProductCategory);
    console.log('productCategory----', productCategory);
    const productTags = useSelector(selectProductTags);
    const stockOptions = useSelector(selectStockOptions);
    const [show, setShow] = useState(true);
    const [productCatOption, setProductCatOption] = useState([]);
    const [productTagOption, setProductTagOption] = useState([]);
    const [stockOption, setStockOption] = useState([]);
    const [productsFilter, setProductsFilter] = useState(productFilterValue);
    const [productCatFilterVal, setProductCatFilterVal] = useState('');
    const [productTagFilterVal, setProductTagFilterVal] = useState('');
    const [stockFilterVal, setStockFilterVal] = useState('');

    useEffect(() => {
        setProductCatOption(productCategory);
        setProductTagOption(productTags);
        setStockOption(stockOptions);
    }, []);

    useEffect(() => {
        setProductsFilter(productFilterValue);
        setProductCatFilterVal(productFilterValue?.productCatFilter);
        setProductTagFilterVal(productFilterValue?.productTagFilter);
        setStockFilterVal(productFilterValue?.stockFilter);
    }, [productFilterValue]);

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

    const handleStockOption = (e) => {
        const isChecked = e.target.checked;
        const value = e.target.value;
        const newData = JSON.parse(JSON.stringify(productsFilter));
        if (isChecked) {
            newData.stockFilter.push(value);
            setProductsFilter({ ...newData });
            setStockFilterVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.stockFilter.filter(
                (product) => product !== value
            );
            newData.stockFilter = newCategory;
            setProductsFilter({ ...newData });
            setStockFilterVal(newCategory);
        }
        dispatch(setProductFilter({ ...newData }));
    };

    const handleClearFilter = () => {
        setProductCatFilterVal([]);
        setProductTagFilterVal([]);
        setStockFilterVal([]);
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
                                            {productCatOption.map((item, i) => {
                                                return (
                                                    <div
                                                        key={i}
                                                        className="checkbox checkbox--no-decor"
                                                    >
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                value={item}
                                                                name="bs"
                                                                onChange={
                                                                    handleProductCatOption
                                                                }
                                                                checked={productCatFilterVal.includes(
                                                                    item
                                                                )}
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

                                <div className="subfilter">
                                    <div className="subfilter_head">
                                        Product tags
                                    </div>
                                    <div className="subfilter_body">
                                        <div className="filter_form-items">
                                            {(productTagOption || []).map(
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
                                                                    value={item}
                                                                    onChange={
                                                                        handleProductTagOption
                                                                    }
                                                                    checked={productTagFilterVal.includes(
                                                                        item
                                                                    )}
                                                                />
                                                                <div className="checkbox-text">
                                                                    {item}
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
                                        {(stockOption || []).map((item, i) => {
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
                                                            onChange={
                                                                handleStockOption
                                                            }
                                                            checked={stockFilterVal.includes(
                                                                item
                                                            )}
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
