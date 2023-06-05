import React, { useEffect, useState } from 'react';
import ArrowLeft from '../images/icons/icon-arrow--left.svg';
import { useDispatch, useSelector } from 'react-redux';
import ArrowDown from '../images/icons/icon-chevron--down.svg';
import closeIcon from '../../Brand/images/icons/icon-close.svg';
import searchIcon from '../../Brand/images/icons/icon-search.svg';
// import {
//     selectDaysfullfillOptions,
//     selectProductFilter,
//     selectStatusViseFilterOptions,
//     selectStockFilterOptions,
//     selectfilterByBrandOptions,
//     selectWspFilterOptions,
//     selectMsrpFilterOptions,
// } from '../../../redux/Retailer/Products/RetailerProductsSelector';
// import {
//     resetToInitial,
//     setRetailerProductFilter,
//     setSalesFilter,
// } from '../../../redux/Retailer/Products/RetailerProductsSlice';

function SideBar() {
    const dispatch = useDispatch();
    const productFilter = []//useSelector(selectProductFilter);
    const filterByBrandValue = []//useSelector(selectfilterByBrandOptions);
    const statusViseValue = []//useSelector(selectStatusViseFilterOptions);
    const wspValue = []//useSelector(selectWspFilterOptions);
    const msrpValue = []//useSelector(selectMsrpFilterOptions);
    const stockValue = []//useSelector(selectStockFilterOptions);
    const daysfullfillValue = []//useSelector(selectDaysfullfillOptions);
    const [openCloseFilter, setOpenCloseFilter] = useState(true);
    const [productFilterVal, setProductFilterVal] = useState(productFilter);
    const [filterByBrandOption, setFilterByBrandOption] = useState([]);
    const [filterByBrandOptionClone, setFilterByBrandOptionClone] = useState(
        []
    );
    const [statusViseOption, setStatusViseOption] = useState([]);
    const [wspValueOption, setWspValueOption] = useState([]);
    const [msrpValueOption, setMsrpValueOption] = useState([]);
    const [stockValueOption, setStockValueOption] = useState([]);
    const [daysfullfillValueOption, setDaysfullfillValueOption] = useState([]);
    const [allTimeSale, setAllTimeSale] = useState({ min: '', max: '' });
    const [filterByBrandVal, setFilterByBrandVal] = useState('');
    const [statusViseVal, setStatusViseVal] = useState('');
    const [wspVal, setWspVal] = useState('');
    const [msrpVal, setMsrpVal] = useState('');
    const [stockVal, setStockVal] = useState('');
    const [daysfullfillVal, setDaysfullfillVal] = useState('');
    const [searchVal, setSearchVal] = useState('');
    const [activeTab, setActiveTab] = useState('wsp');
    const [isClickedOne, setIsClickedOne] = useState(true);
    const [isClickedTwo, setIsClickedTwo] = useState(true);

    useEffect(() => {
        if (openCloseFilter) {
            document.body.classList.remove('sidebar-hidden');
        } else {
            document.body.classList.add('sidebar-hidden');
        }
    }, [openCloseFilter]);

    useEffect(() => {
        setFilterByBrandOption(filterByBrandValue);
        setFilterByBrandOptionClone(filterByBrandValue);
        setStatusViseOption(statusViseValue);
        setWspValueOption(wspValue);
        setStockValueOption(stockValue);
        setDaysfullfillValueOption(daysfullfillValue);
        setMsrpValueOption(msrpValue);
    }, []);

    useEffect(() => {
        setProductFilterVal(productFilter);
        setFilterByBrandVal(productFilter?.filterByBrand);
        setStatusViseVal(productFilter?.statusViseFilter);
        setWspVal(productFilter?.wspFilter);
        setMsrpVal(productFilter?.msrpFilter);
        setStockVal(productFilter?.stockFilter);
        setDaysfullfillVal(productFilter?.daysFullfillFilter);
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

    const handleBrandOption = (item) => {
        const isChecked = item.target.checked;
        const value = item.target.value;
        const newData = JSON.parse(JSON.stringify(productFilterVal));
        if (isChecked) {
            newData.filterByBrand.push(value);
            setProductFilterVal({ ...newData });
            setFilterByBrandVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.filterByBrand.filter(
                (product) => product !== value
            );
            newData.filterByBrand = newCategory;
            setProductFilterVal({ ...newData });
            setFilterByBrandVal(newCategory);
        }
        // dispatch(setRetailerProductFilter({ ...newData }));
    };

    const handleBrandStatus = (item) => {
        const isChecked = item.target.checked;
        const value = item.target.value;
        const newData = JSON.parse(JSON.stringify(productFilterVal));
        if (isChecked) {
            newData.statusViseFilter.push(value);
            setProductFilterVal({ ...newData });
            setStatusViseVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.statusViseFilter.filter(
                (product) => product !== value
            );
            newData.statusViseFilter = newCategory;
            setProductFilterVal({ ...newData });
            setStatusViseVal(newCategory);
        }
        // dispatch(setRetailerProductFilter({ ...newData }));
    };

    const handleWSPPrice = (item) => {
        const isChecked = item.target.checked;
        const value = item.target.value;
        const newData = JSON.parse(JSON.stringify(productFilterVal));
        if (isChecked) {
            newData.wspFilter.push(value);
            setProductFilterVal({ ...newData });
            setWspVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.wspFilter.filter(
                (product) => product !== value
            );
            newData.wspFilter = newCategory;
            setProductFilterVal({ ...newData });
            setWspVal(newCategory);
        }
        // dispatch(setRetailerProductFilter({ ...newData }));
    };

    const handleMSRPPrice = (item) => {
        const isChecked = item.target.checked;
        const value = item.target.value;
        const newData = JSON.parse(JSON.stringify(productFilterVal));
        if (isChecked) {
            newData.msrpFilter.push(value);
            setProductFilterVal({ ...newData });
            setMsrpVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.msrpFilter.filter(
                (product) => product !== value
            );
            newData.msrpFilter = newCategory;
            setProductFilterVal({ ...newData });
            setMsrpVal(newCategory);
        }
        // dispatch(setRetailerProductFilter({ ...newData }));
    };

    const handleStock = (item) => {
        const isChecked = item.target.checked;
        const value = item.target.value;
        const newData = JSON.parse(JSON.stringify(productFilterVal));
        if (isChecked) {
            newData.stockFilter.push(value);
            setProductFilterVal({ ...newData });
            setStockVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.stockFilter.filter(
                (product) => product !== value
            );
            newData.stockFilter = newCategory;
            setProductFilterVal({ ...newData });
            setStockVal(newCategory);
        }
        // dispatch(setRetailerProductFilter({ ...newData }));
    };

    const handleDayFullfill = (item) => {
        const isChecked = item.target.checked;
        const value = item.target.value;
        const newData = JSON.parse(JSON.stringify(productFilterVal));
        if (isChecked) {
            newData.daysFullfillFilter.push(value);
            setProductFilterVal({ ...newData });
            setDaysfullfillVal((prev) => [...prev, value]);
        } else {
            const newCategory = newData.daysFullfillFilter.filter(
                (product) => product !== value
            );
            newData.daysFullfillFilter = newCategory;
            setProductFilterVal({ ...newData });
            setDaysfullfillVal(newCategory);
        }
        // dispatch(setRetailerProductFilter({ ...newData }));
    };

    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        if (searchQuery) {
            const searchWords = searchQuery.split(/\s+/);
            const data = filterByBrandOptionClone.map((item) => {
                return `Alpha ${item}`;
            });
            const searchValue = data.filter((ele) => {
                const tags = ele.toLowerCase().split(' ');
                return searchWords.every((word) =>
                    tags.some((tag) => tag.includes(word))
                );
            });
            const finalData = searchValue.map((item) => {
                return item.split('Alpha')[1];
            });
            setFilterByBrandOption(finalData);
            setSearchVal(searchQuery);
        } else {
            setFilterByBrandOption(filterByBrandOptionClone);
            setSearchVal('');
        }
    };

    const handleOpenCloseFilter = () => {
        setOpenCloseFilter(!openCloseFilter);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleClickOne = () => {
        setIsClickedOne(!isClickedOne);
    };

    const handleClickTwo = () => {
        setIsClickedTwo(!isClickedTwo);
    };

    return (
        <>
            <aside
                className={`filters filter-retailer ${
                    openCloseFilter ? '' : 'hidden'
                }`}
            >
                <div className="filters_wrap">
                    <div className="filters_block filters_block-head">
                        <button
                            className="filters_hide-and-show"
                            onClick={() => handleOpenCloseFilter()}
                        >
                            <img className="icon" src={ArrowLeft} />
                        </button>

                        <span
                            style={{ right: '5px' }}
                            className="filters-clear"
                            onClick={() => handleClearFilter()}
                        >
                            Clear Filters
                        </span>
                    </div>
                    <div className="filters_block filters_block-body side_filters_block">
                        <div
                            className={`filter filter-by-brand ${
                                isClickedOne ? 'open' : ''
                            }`}
                        >
                            <div
                                className="filter_head"
                                onClick={() => handleClickOne()}
                            >
                                <div className="text">Filter by Brand</div>
                                <div className="icon">
                                    <img src={ArrowDown} alt="Arrow" />
                                </div>
                            </div>
                            {isClickedOne === true && (
                                <div
                                    className="filter_body"
                                    style={{
                                        height: isClickedOne ? 'auto' : '0px',
                                    }}
                                >
                                    <form
                                        action="#"
                                        className="filter_form search_form"
                                    >
                                        <div className="search_form-input">
                                            <input
                                                type="text"
                                                placeholder="Search brand.."
                                                value={searchVal}
                                                onChange={(e) =>
                                                    handleSearch(e)
                                                }
                                            />
                                        </div>
                                        {searchVal?.length !== 0 ? (
                                            <>
                                                <div
                                                    className="close_icon_search"
                                                    onClick={() =>
                                                        handleSearch({
                                                            target: {
                                                                value: '',
                                                            },
                                                        })
                                                    }
                                                >
                                                    <img
                                                        className="product_clear_icon"
                                                        src={closeIcon}
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <img
                                                className="icon"
                                                src={searchIcon}
                                            />
                                        )}
                                    </form>
                                    <div className="filter_form-results">
                                        <div className="filter_form-items">
                                            {(filterByBrandOption || []).map(
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
                                                                        handleBrandOption
                                                                    }
                                                                    checked={filterByBrandVal?.includes(
                                                                        item
                                                                    )}
                                                                />
                                                                <div className="checkbox-text">
                                                                    <strong>
                                                                        Alpha{' '}
                                                                    </strong>
                                                                    {item}
                                                                </div>
                                                            </label>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                    <div className="subfilters">
                                        <div className="subfilter">
                                            <div className="subfilter_head">
                                                Brand Status
                                            </div>
                                            <div className="subfilter_body">
                                                {(statusViseOption || []).map(
                                                    (item, i) => {
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
                                                                        onChange={
                                                                            handleBrandStatus
                                                                        }
                                                                        checked={statusViseVal?.includes(
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
                                </div>
                            )}
                        </div>
                        <div
                            className={`filter filter-by-products ${
                                isClickedTwo ? 'open' : ''
                            }`}
                        >
                            <div
                                className="filter_head"
                                onClick={() => handleClickTwo()}
                            >
                                <div className="text">
                                    Filter by Products
                                    <div className="filter_clear">
                                        3
                                        <button className="filter-cancel">
                                            <svg className="icon">
                                                {/* <use xlink:href="images/sprite.svg#icon-clear"></use> */}
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="icon">
                                    <img src={ArrowDown} alt="Arrow" />
                                </div>
                            </div>
                            {isClickedTwo === true && (
                                <div
                                    className="filter_body"
                                    style={{
                                        height: isClickedTwo ? 'auto' : '0px',
                                    }}
                                >
                                    <div className="subfilters">
                                        <div className="subfilter mt-5">
                                            <div className="subfilter_head">
                                                wsp
                                            </div>
                                            <div className="subfilter_body">
                                                <div className="tabs">
                                                    <div className="tab_menu">
                                                        <button
                                                            className={`tab-link ${
                                                                activeTab ===
                                                                'wsp'
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
                                                                activeTab ===
                                                                'msrp'
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
                                                                    setAllTimeSale(
                                                                        {
                                                                            ...allTimeSale,
                                                                            min: e
                                                                                .target
                                                                                .value,
                                                                        }
                                                                    )
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
                                                                    setAllTimeSale(
                                                                        {
                                                                            ...allTimeSale,
                                                                            max: e
                                                                                .target
                                                                                .value,
                                                                        }
                                                                    )
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
                                                                        value={
                                                                            item
                                                                        }
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
                                                    daysfullfillValueOption ||
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
                            )}
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default SideBar;
