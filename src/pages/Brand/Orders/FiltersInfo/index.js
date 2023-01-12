import React, { useEffect, useState } from 'react';
import ArrowLeft from '../../images/icons/icon-arrow--left.svg';
import {
    setOrderFilter,
    resetToInitial,
} from '../../../../redux/Brand/Orders/orderSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectOrderFilter,
    selectRetailerOptions,
    selectFullfillmentOptions,
} from '../../../../redux/Brand/Orders/orderSelectors';

export default function FilterSideBar() {
    const dispatch = useDispatch();
    const orderFilterValue = useSelector(selectOrderFilter);
    const retailerOptions = useSelector(selectRetailerOptions);
    const fulfilmentOptions = useSelector(selectFullfillmentOptions);
    const [show, setShow] = useState(true);
    const [retailerOption, setRetailerOption] = useState([]);
    const [fulfillmentOption, setfulfillmentOption] = useState([]);
    const [searchFilter, setSearchFilter] = useState([]);
    const [orderFilter, setOrderFilters] = useState(orderFilterValue);
    const [retailerFilterVal, setRetailerFilterVal] = useState('');
    const [fulfilmentVal, setFulfilmentVal] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [minDate, setMinDate] = useState('');

    useEffect(() => {
        setRetailerOption(retailerOptions);
        setfulfillmentOption(fulfilmentOptions);
    }, []);

    useEffect(() => {
        setOrderFilters(orderFilterValue);
        setRetailerFilterVal(orderFilterValue?.retailerFilter);
        setFulfilmentVal(orderFilterValue?.fulfillmentFiter);
        setFromDate(orderFilterValue?.dateRange?.From ?? '');
        setToDate(orderFilterValue?.dateRange?.To ?? '');
    }, [orderFilterValue]);

    const handleRetailerOption = (item) => {
        const isChecked = item.target.checked;
        const value = item.target.value;
        const newData = JSON.parse(JSON.stringify(orderFilter));
        if (isChecked) {
            newData.retailerFilter.push(value);
            setOrderFilters({ ...newData });
            setRetailerFilterVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.retailerFilter.filter(
                (product) => product !== value
            );
            newData.retailerFilter = newCategory;
            setOrderFilters({ ...newData });
            setRetailerFilterVal(newCategory);
        }
        dispatch(setOrderFilter({ ...newData }));
    };

    const handleSearch = (e) => {
        const searchValue = retailerOption.filter((ele) => {
            if (e.target.value == '') {
                return [];
            }
            return ele.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setSearchFilter(searchValue);
    };

    const handleFulfillmentOption = (e) => {
        const isChecked = e.target.checked;
        const value = e.target.value;
        const newData = JSON.parse(JSON.stringify(orderFilter));
        if (isChecked) {
            newData.fulfillmentFiter.push(value);
            setOrderFilters({ ...newData });
            setFulfilmentVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.fulfillmentFiter.filter(
                (product) => product !== value
            );
            newData.fulfillmentFiter = newCategory;
            setOrderFilters({ ...newData });
            setFulfilmentVal(newCategory);
        }
        dispatch(setOrderFilter({ ...newData }));
    };

    const handleDateRange = (item, e) => {
        const newData = JSON.parse(JSON.stringify(orderFilter));
        if (item === 'From') {
            newData.dateRange.From = e.target.value;
            setFromDate(e.target.value);
            setMinDate(
                `${new Date(e.target.value).getFullYear()}-${
                    new Date(e.target.value).getMonth() + 1
                }-${new Date(e.target.value).getDate() + 1}`
            );
        } else {
            newData.dateRange.To = e.target.value;
            setToDate(e.target.value);
        }
        setOrderFilters({ ...newData });
        dispatch(setOrderFilter({ ...newData }));
    };

    const handleClearFilter = () => {
        setFromDate('');
        setToDate('');
        setRetailerFilterVal([]);
        setFulfilmentVal([]);
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
                                        Retailer
                                    </div>
                                    <div className="subfilter_body">
                                        <form
                                            action="#"
                                            className="filter_form search_form mb-4"
                                        >
                                            <div className="search_form-input">
                                                <input
                                                    type="text"
                                                    placeholder="Search"
                                                    onChange={handleSearch}
                                                />
                                            </div>
                                            <button
                                                type="cancel"
                                                className="search_form-button"
                                            >
                                                <svg className="icon"> </svg>
                                            </button>
                                            <button type="submit"></button>
                                            <svg className="icon"></svg>
                                        </form>
                                        <div className="filter_form-items">
                                            {(searchFilter.length !== 0
                                                ? searchFilter
                                                : retailerOption
                                            ).map((item, i) => {
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
                                                                    handleRetailerOption
                                                                }
                                                                checked={retailerFilterVal.includes(
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
                                        Fulfillment Status
                                    </div>
                                    <div className="subfilter_body">
                                        <div className="filter_form-items">
                                            {(fulfillmentOption || []).map(
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
                                                                        handleFulfillmentOption
                                                                    }
                                                                    checked={fulfilmentVal.includes(
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
                                    <div className="subfilter_head">
                                        Order Date
                                    </div>
                                    <div className="subfilter_body">
                                        <div className="date-from-to">
                                            <div className="date-area">
                                                <small>From</small>
                                                <input
                                                    type="date"
                                                    name="p-from"
                                                    value={fromDate}
                                                    onChange={(e) =>
                                                        handleDateRange(
                                                            'From',
                                                            e
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="date-area">
                                                <small>To</small>
                                                <input
                                                    type="date"
                                                    placeholder="To"
                                                    name="p-to"
                                                    min={minDate}
                                                    value={toDate}
                                                    onChange={(e) =>
                                                        handleDateRange('TO', e)
                                                    }
                                                />
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
    );
}
