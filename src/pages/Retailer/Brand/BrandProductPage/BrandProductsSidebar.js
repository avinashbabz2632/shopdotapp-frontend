import React, { useEffect, useState } from 'react';
import ArrowLeft from '../../images/icons/icon-arrow--left.svg';
// import {
//     selectBrandProductFilter,
//     selectDaysfullfillOptions,
//     selectMsrpFilterOptions,
//     selectStockFilterOptions,
//     selectTagsOptions,
//     selectWspFilterOptions,
// } from '../../../../redux/Retailer/Brand/BrandProductSelector';
import { useDispatch, useSelector } from 'react-redux';
// import {
//     resetToInitial,
//     setBrandProductFilter,
//     setSalesFilter,
// } from '../../../../redux/Retailer/Brand/BrandProductsSlice';

function BrandProductsSidebar() {
    const [openCloseFilter, setOpenCloseFilter] = useState(true);
    const dispatch = useDispatch();
    // const productFilter = useSelector(selectBrandProductFilter);
    // const tagsValue = useSelector(selectTagsOptions);
    // const wspValue = useSelector(selectWspFilterOptions);
    // const msrpValue = useSelector(selectMsrpFilterOptions);
    // const stockValue = useSelector(selectStockFilterOptions);
    // const daysfullfillValue = useSelector(selectDaysfullfillOptions);
    const productFilter = [];
    const tagsValue = []
    const wspValue = [];
    const msrpValue = [];
    const stockValue = [];
    const daysfullfillValue = [];
    const [productFilterVal, setProductFilterVal] = useState(productFilter);
    const [tagsOption, setTagsOption] = useState([]);
    const [tagsOptionClone, setTagsOptionClone] = useState([]);
    const [wspValueOption, setWspValueOption] = useState([]);
    const [msrpValueOption, setMsrpValueOption] = useState([]);
    const [stockValueOption, setStockValueOption] = useState([]);
    const [daysfullfillValueOption, setDaysfullfillValueOption] = useState([]);
    const [allTimeSale, setAllTimeSale] = useState({ min: '', max: '' });
    const [filterTagsVal, setFilterTagsVal] = useState('');
    const [wspVal, setWspVal] = useState('');
    const [msrpVal, setMsrpVal] = useState('');
    const [stockVal, setStockVal] = useState('');
    const [daysfullfillVal, setDaysfullfillVal] = useState('');
    const [activeTab, setActiveTab] = useState('wsp');

    useEffect(() => {
        setTagsOption(tagsValue);
        setTagsOptionClone(tagsValue);
        setWspValueOption(wspValue);
        setStockValueOption(stockValue);
        setDaysfullfillValueOption(daysfullfillValue);
        setMsrpValueOption(msrpValue);
    }, []);

    useEffect(() => {
        setProductFilterVal(productFilter);
        setFilterTagsVal(productFilter?.tagsValue);
        setWspVal(productFilter?.wspFilterValues);
        setMsrpVal(productFilter?.msrpFilterValues);
        setStockVal(productFilter?.stockFilters);
        setDaysfullfillVal(productFilter?.daysFullfillFilters);
    }, [productFilter]);

    useEffect(() => {
        // dispatch(setSalesFilter(allTimeSale));
    }, [allTimeSale]);

    const handleClearFilter = () => {
        // dispatch(resetToInitial());
    };

    useEffect(() => {
        handleClearFilter();
    }, []);

    const handleTagsOption = (item) => {
        const isChecked = item.target.checked;
        const value = item.target.value;
        const newData = JSON.parse(JSON.stringify(productFilterVal));
        if (isChecked) {
            newData.tagsValue.push(value);
            setProductFilterVal({ ...newData });
            setFilterTagsVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.tagsValue.filter(
                (product) => product !== value
            );
            newData.tagsValue = newCategory;
            setProductFilterVal({ ...newData });
            setFilterTagsVal(newCategory);
        }
        // dispatch(setBrandProductFilter({ ...newData }));
    };

    const handleWSPPrice = (item) => {
        const isChecked = item.target.checked;
        const value = item.target.value;
        const newData = JSON.parse(JSON.stringify(productFilterVal));
        if (isChecked) {
            newData.wspFilterValues.push(value);
            setProductFilterVal({ ...newData });
            setWspVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.wspFilterValues.filter(
                (product) => product !== value
            );
            newData.wspFilterValues = newCategory;
            setProductFilterVal({ ...newData });
            setWspVal(newCategory);
        }
        // dispatch(setBrandProductFilter({ ...newData }));
    };

    const handleMSRPPrice = (item) => {
        const isChecked = item.target.checked;
        const value = item.target.value;
        const newData = JSON.parse(JSON.stringify(productFilterVal));
        if (isChecked) {
            newData.msrpFilterValues.push(value);
            setProductFilterVal({ ...newData });
            setMsrpVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.msrpFilterValues.filter(
                (product) => product !== value
            );
            newData.msrpFilterValues = newCategory;
            setProductFilterVal({ ...newData });
            setMsrpVal(newCategory);
        }
        // dispatch(setBrandProductFilter({ ...newData }));
    };

    const handleStock = (item) => {
        const isChecked = item.target.checked;
        const value = item.target.value;
        const newData = JSON.parse(JSON.stringify(productFilterVal));
        if (isChecked) {
            newData.stockFilters.push(value);
            setProductFilterVal({ ...newData });
            setStockVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.stockFilters.filter(
                (product) => product !== value
            );
            newData.stockFilters = newCategory;
            setProductFilterVal({ ...newData });
            setStockVal(newCategory);
        }
        // dispatch(setBrandProductFilter({ ...newData }));
    };

    const handleDayFullfill = (item) => {
        const isChecked = item.target.checked;
        const value = item.target.value;
        const newData = JSON.parse(JSON.stringify(productFilterVal));
        if (isChecked) {
            newData.daysFullfillFilters.push(value);
            setProductFilterVal({ ...newData });
            setDaysfullfillVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.daysFullfillFilters.filter(
                (product) => product !== value
            );
            newData.daysFullfillFilters = newCategory;
            setProductFilterVal({ ...newData });
            setDaysfullfillVal(newCategory);
        }
        dispatch(setBrandProductFilter({ ...newData }));
    };

    const handleOpenCloseFilter = () => {
        setOpenCloseFilter(!openCloseFilter);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <aside className={`filters ${openCloseFilter ? '' : 'hidden'}`}>
                <div className="filters_wrap">
                    {/* <!--filters head--> */}
                    <div className="filters_block filters_block-head">
                        {/* <!--filters close/unclose filters--> */}
                        <button
                            className="filters_hide-and-show"
                            onClick={() => handleOpenCloseFilter()}
                        >
                            <div className="icon">
                                <img src={ArrowLeft} />
                            </div>
                        </button>
                        {/* <!--filters clearn--> */}
                        {openCloseFilter === true && (
                            <span
                                className="filters-clear"
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleClearFilter()}
                            >
                                Clear Filters
                            </span>
                        )}
                    </div>
                    <div className="filters_block filters_block-body">
                        {/* <!--single filter head--> */}

                        <div className="filter-by-products">
                            <div className="filter_body">
                                {/* <!--single filter subfilters--> */}
                                <div className="subfilters">
                                    <div className="filter_form-results">
                                        <div className="subfilter_head">
                                            tagsValue
                                        </div>
                                        <div className="filter_form-items">
                                            {(tagsOption || []).map(
                                                (item, i) => {
                                                    return (
                                                        <div
                                                            key={i}
                                                            className="checkbox checkbox--no-decor"
                                                        >
                                                            <label>
                                                                <input
                                                                    type="checkbox"
                                                                    value={item}
                                                                    onChange={
                                                                        handleTagsOption
                                                                    }
                                                                    checked={filterTagsVal?.includes(
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

                                    <div className="subfilter mt-5">
                                        <div className="subfilter_head">
                                            Price
                                        </div>
                                        <div className="subfilter_body">
                                            <div className="tabs">
                                                <div className="tab_menu">
                                                    <button
                                                        className={`tab-link ${
                                                            activeTab === 'wsp'
                                                                ? 'active'
                                                                : ''
                                                        }`}
                                                        onClick={() =>
                                                            handleTabClick(
                                                                'wsp'
                                                            )
                                                        }
                                                    >
                                                        WSP
                                                    </button>
                                                    <button
                                                        className={`tab-link ${
                                                            activeTab === 'msrp'
                                                                ? 'active'
                                                                : ''
                                                        }`}
                                                        onClick={() =>
                                                            handleTabClick(
                                                                'msrp'
                                                            )
                                                        }
                                                    >
                                                        MSRP
                                                    </button>
                                                </div>
                                                <div className="tabs_body">
                                                    {activeTab === 'wsp' ? (
                                                        <div
                                                            className="tab active"
                                                            data-target="wsp"
                                                        >
                                                            <div className="tab_inner">
                                                                {(
                                                                    wspValueOption ||
                                                                    []
                                                                ).map(
                                                                    (
                                                                        item,
                                                                        i
                                                                    ) => {
                                                                        return (
                                                                            <div
                                                                                key={
                                                                                    i
                                                                                }
                                                                                className="checkbox checkbox--no-decor"
                                                                            >
                                                                                <label>
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        value={
                                                                                            item
                                                                                        }
                                                                                        onChange={
                                                                                            handleWSPPrice
                                                                                        }
                                                                                        checked={wspVal?.includes(
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
                                                                    }
                                                                )}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className="tab active"
                                                            data-target="msrp"
                                                        >
                                                            <div className="tab_inner">
                                                                {(
                                                                    msrpValueOption ||
                                                                    []
                                                                ).map(
                                                                    (
                                                                        item,
                                                                        i
                                                                    ) => {
                                                                        return (
                                                                            <div
                                                                                key={
                                                                                    i
                                                                                }
                                                                                className="checkbox checkbox--no-decor"
                                                                            >
                                                                                <label>
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        value={
                                                                                            item
                                                                                        }
                                                                                        onChange={
                                                                                            handleMSRPPrice
                                                                                        }
                                                                                        checked={msrpVal?.includes(
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
                                                                    }
                                                                )}
                                                                {/* <div className="min-max">
                                                                    <input
                                                                        type="text"
                                                                        name="min-wsp-msrp"
                                                                        id="min-wsp-msrp"
                                                                        placeholder="$ Min"
                                                                    />
                                                                    <span className="spacer">
                                                                        -
                                                                    </span>
                                                                    <input
                                                                        type="text"
                                                                        name="max-wsp-msrp"
                                                                        id="max-wsp-msrp"
                                                                        placeholder="$ Max"
                                                                    />
                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className="min-max">
                                                        <input
                                                            type="number"
                                                            name="min-wsp-wsp"
                                                            placeholder="$ Min"
                                                            value={
                                                                allTimeSale?.min
                                                            }
                                                            onChange={(e) =>
                                                                setAllTimeSale({
                                                                    ...allTimeSale,
                                                                    min: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                        />
                                                        <span className="spacer">
                                                            -
                                                        </span>
                                                        <input
                                                            type="number"
                                                            name="max-wsp-wsp"
                                                            placeholder="$ Max"
                                                            onChange={(e) =>
                                                                setAllTimeSale({
                                                                    ...allTimeSale,
                                                                    max: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                            value={
                                                                allTimeSale?.max
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="subfilter">
                                        <div className="subfilter_head">
                                            Stock
                                        </div>
                                        <div className="subfilter_body">
                                            {(stockValueOption || []).map(
                                                (item, i) => {
                                                    return (
                                                        <div
                                                            key={i}
                                                            className="checkbox checkbox--no-decor"
                                                        >
                                                            <label>
                                                                <input
                                                                    type="checkbox"
                                                                    value={item}
                                                                    onChange={
                                                                        handleStock
                                                                    }
                                                                    checked={stockVal?.includes(
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
                                    <div className="subfilter">
                                        <div className="subfilter_head">
                                            Days to Fulfill
                                        </div>
                                        <div className="subfilter_body">
                                            {(
                                                daysfullfillValueOption || []
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
                                                                onChange={
                                                                    handleDayFullfill
                                                                }
                                                                checked={daysfullfillVal?.includes(
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
        </>
    );
}

export default BrandProductsSidebar;
