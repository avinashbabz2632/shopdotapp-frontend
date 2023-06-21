import React, { useEffect, useState } from 'react';
import ArrowLeft from '../images/icons/icon-arrow--left.svg';
import { useDispatch, useSelector } from 'react-redux';
import ArrowDown from '../images/icons/icon-chevron--down.svg';
import closeIcon from '../../Brand/images/icons/icon-close.svg';
import searchIcon from '../../Brand/images/icons/icon-search.svg';
import {
  getBrandFiltersAction,
  getRetailerProductsAction,
} from '../../../actions/retailerActions';
import {
  productSearchQuery,
  selectBrandFilters,
  selectLimit,
  selectOffset,
  selectSelectedBrandFilters,
  selectSelectedBrandStatusFilters,
  selectSelectedDaysToFullfillFilters,
  selectSelectedMSRPFilters,
  selectSelectedStockFilters,
  selectSelectedWSPFilters,
} from '../../../redux/Brand/Retailer/retailerSelector';
import FilterCheckbox from '../../Brand/Products/components/FilterCheckbox';
import {
  setSelectedBrandFilters,
  setSelectedBrandStatusFilters,
  setSelectedDaysToFullfilFilters,
  setSelectedMSRPFilter,
  setSelectedStockFilters,
  setSelectedWSPFilter,
} from '../../../redux/Brand/Retailer/retailerSlice';

function SideBar() {
  const dispatch = useDispatch();
  const brandFilters = useSelector(selectBrandFilters);
  const [brandFiltersClone, setBrandFiltersClone] = useState(brandFilters);
  const [openCloseFilter, setOpenCloseFilter] = useState(true);
  const [allTimeSale, setAllTimeSale] = useState({ min: '', max: '' });
  const [searchVal, setSearchVal] = useState('');
  const [activeTab, setActiveTab] = useState('wsp');
  const [isClickedOne, setIsClickedOne] = useState(true);
  const [isClickedTwo, setIsClickedTwo] = useState(true);

  const selectedBrandFilters = useSelector(selectSelectedBrandFilters);
  const selectedBrandStatusFilters = useSelector(
    selectSelectedBrandStatusFilters
  );
  const selectedDaysToFullfilFilters = useSelector(
    selectSelectedDaysToFullfillFilters
  );
  const selectedStockFilters = useSelector(selectSelectedStockFilters);
  const selectedWSPFilter = useSelector(selectSelectedWSPFilters);
  const selectedMSRPFilter = useSelector(selectSelectedMSRPFilters);
  const limit = useSelector(selectLimit);
  const offset = useSelector(selectOffset);
  const productSearchValue = useSelector(productSearchQuery);

  const brandStatusOptions = [
    {
      name: 'Connected',
      value: 'accepted',
    },
    {
      name: 'Pending',
      value: 'pending',
    },
    {
      name: 'Not Connected',
      value: 'not_connected',
    },
  ];

  const stockOptions = ['< 10 units', '11-50 units', '> 50 units'];

  const daysToFullfilOptions = ['1-3 days', '4-6 days', '> 7 days'];

  const priceRangeOptions = [
    '$1 - $99',
    '$100 - $499',
    '$500 - $999',
    '$1000 or more',
  ];

  const prepareFilter = () => {
    let filter = [];
    if (selectedBrandFilters && selectedBrandFilters.length > 0) {
      const brandFilter = {
        field: 'brand_id',
        operator: 'in',
        value: selectedBrandFilters.map((el) => parseInt(el.brand_details.id)),
      };
      filter.push(brandFilter);
    }

    if (selectedBrandStatusFilters && selectedBrandStatusFilters.length > 0) {
      const statusFilter = {
        field: 'brand_status',
        operator: 'in',
        value: selectedBrandStatusFilters.map((el) => el.value),
      };
      filter.push(statusFilter);
    }

    if (selectedWSPFilter && selectedWSPFilter.length > 0) {
      selectedWSPFilter.forEach((el) => {
        let wsp;
        if (el == '$1 - $99') {
          wsp = {
            field: 'wsp',
            operator: 'between',
            value: '1-99',
          };
        } else if (el == '$100 - $499') {
          wsp = {
            field: 'wsp',
            operator: 'between',
            value: '100-499',
          };
        } else if (el == '$500 - $999') {
          wsp = {
            field: 'wsp',
            operator: 'between',
            value: '500-999',
          };
        } else if (el == '$1000 or more') {
          const wsp = {
            field: 'wsp',
            operator: 'gte',
            value: '1000',
          };
        }

        if (wsp) {
          filter.push(wsp);
        }
      });
    }

    if (selectedMSRPFilter && selectedMSRPFilter.length > 0) {
      selectedMSRPFilter.forEach((el) => {
        let msrp;
        if (el == '$1 - $99') {
          msrp = {
            field: 'price',
            operator: 'between',
            value: '1-99',
          };
        }
        if (el == '$100 - $499') {
          msrp = {
            field: 'price',
            operator: 'between',
            value: '100-499',
          };
        }
        if (el == '$500 - $999') {
          msrp = {
            field: 'price',
            operator: 'between',
            value: '500-999',
          };
        }
        if (el == '$1000 or more') {
          msrp = {
            field: 'price',
            operator: 'gte',
            value: '1000',
          };
        }

        if (msrp) {
          filter.push(msrp);
        }
      });
    }

    if (selectedStockFilters && selectedStockFilters.length > 0) {
      selectedStockFilters.forEach((sf) => {
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

    if (
      selectedDaysToFullfilFilters &&
      selectedDaysToFullfilFilters.length > 0
    ) {
      const daysToFullFill = {
        field: 'days_to_fulfill',
        operator: 'in',
        value: selectedDaysToFullfilFilters,
      };
      filter.push(daysToFullFill);
    }

    if (allTimeSale.min && allTimeSale.max && (parseInt(allTimeSale.max) > parseInt(allTimeSale.min))) {
      const minMax = {
        field: activeTab,
        operator: 'between',
        value: `${allTimeSale.min}-${allTimeSale.max}`,
      };
      filter.push(minMax);
    }
    return filter;
  };

  const fetchRetailerProducts = () => {
    const body = {
      paging: {
        limit: limit,
        offset: offset,
      },
      query: {},
      filter: prepareFilter(),
    };
    if (productSearchValue) {
      body.query.search = productSearchValue;
    }
    dispatch(getRetailerProductsAction(body));
  };

  const fetchBrandFilters = () => {
    const body = {
      query: {
        search: searchVal,
      },
    };
    dispatch(getBrandFiltersAction(body));
  };

  useEffect(() => {
    fetchBrandFilters();
  }, []);

  useEffect(() => {
    if (openCloseFilter) {
      document.body.classList.remove('sidebar-hidden');
    } else {
      document.body.classList.add('sidebar-hidden');
    }
  }, [openCloseFilter]);

  const handleClearFilter = () => {
    dispatch(setSelectedBrandFilters([]));
    dispatch(setSelectedBrandStatusFilters([]));
    dispatch(setSelectedDaysToFullfilFilters([]));
    dispatch(setSelectedStockFilters([]));
    dispatch(setSelectedWSPFilter([]));
    dispatch(setSelectedMSRPFilter([]));
  };

  useEffect(() => {
    handleClearFilter();
  }, []);

  useEffect(() => {
    fetchRetailerProducts();
  }, [
    selectedBrandFilters,
    selectedBrandStatusFilters,
    selectedDaysToFullfilFilters,
    selectedStockFilters,
    selectedWSPFilter,
    selectedMSRPFilter,
    allTimeSale,
    productSearchValue,
    limit,
    offset,
  ]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    if (searchQuery) {
      const searchWords = searchQuery.split(/\s+/);
      const data = brandFilters.map((item) => {
        return {
          id: item.id,
          name: `${item?.brand_details?.company_name} ${item?.brand_details?.store_name}`,
        };
      });
      const searchValue = data.filter((ele) => {
        const tags = ele.name.split(' ');
        return searchWords.every((word) =>
          tags.some((tag) => tag.includes(word))
        );
      });
      const finalData = searchValue.map((item) => {
        return brandFilters.find((el) => el.id === item.id);
      });
      setBrandFiltersClone(finalData);
      setSearchVal(searchQuery);
    } else {
      setBrandFiltersClone(brandFilters);
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

  const handleBrandFilter = (checked, value) => {
    const copy = [...selectedBrandFilters];
    if (checked) {
      const item = brandFilters.find((el) => el.brand_details?.id == value);
      copy.push(item);
      dispatch(setSelectedBrandFilters(copy));
    } else {
      const filter = copy.filter((el) => el.brand_details?.id !== value);
      dispatch(setSelectedBrandFilters(filter));
    }
  };

  const handleStockFilter = (checked, value) => {
    const copy = [...selectedStockFilters];
    if (checked) {
      copy.push(value);
      dispatch(setSelectedStockFilters(copy));
    } else {
      const filter = copy.filter((el) => el !== value);
      dispatch(setSelectedStockFilters(filter));
    }
  };

  const handleStatusFilter = (checked, value) => {
    const copy = [...selectedBrandStatusFilters];
    if (checked) {
      const item = brandStatusOptions.find((el) => el.value == value);
      copy.push(item);
      dispatch(setSelectedBrandStatusFilters(copy));
    } else {
      const filter = copy.filter((el) => el.value !== value);
      dispatch(setSelectedBrandStatusFilters(filter));
    }
  };

  const handleDaysToFullfilFilter = (checked, value) => {
    const copy = [...selectedDaysToFullfilFilters];
    if (checked) {
      copy.push(value);
      dispatch(setSelectedDaysToFullfilFilters(copy));
    } else {
      const filter = copy.filter((el) => el !== value);
      dispatch(setSelectedDaysToFullfilFilters(filter));
    }
  };

  const handleWSPFilter = (checked, value) => {
    const copy = [...selectedWSPFilter];
    if (checked) {
      copy.push(value);
      dispatch(setSelectedWSPFilter(copy));
    } else {
      const filter = copy.filter((el) => el !== value);
      dispatch(setSelectedWSPFilter(filter));
    }
  };

  const handleMSRPFilter = (checked, value) => {
    const copy = [...selectedMSRPFilter];
    if (checked) {
      copy.push(value);
      dispatch(setSelectedMSRPFilter(copy));
    } else {
      const filter = copy.filter((el) => el !== value);
      dispatch(setSelectedMSRPFilter(filter));
    }
  };

  return (
    <>
      <aside
        className={`filters filter-retailer ${openCloseFilter ? '' : 'hidden'}`}
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
              className={`filter filter-by-brand ${isClickedOne ? 'open' : ''}`}
            >
              <div className="filter_head" onClick={() => handleClickOne()}>
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
                  <form action="#" className="filter_form search_form">
                    <div className="search_form-input">
                      <input
                        type="text"
                        placeholder="Search brand.."
                        value={searchVal}
                        onChange={(e) => handleSearch(e)}
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
                          <img className="product_clear_icon" src={closeIcon} />
                        </div>
                      </>
                    ) : (
                      <img className="icon" src={searchIcon} />
                    )}
                  </form>
                  <div className="filter_form-results">
                    <div className="filter_form-items">
                      {(brandFiltersClone || []).map((item, i) => {
                        return (
                          <div key={i} className="checkbox checkbox--no-decor">
                            <label>
                              <FilterCheckbox
                                data={item?.brand_details?.id}
                                onChange={handleBrandFilter}
                                initialValue={
                                  selectedBrandFilters &&
                                  selectedBrandFilters?.some(
                                    (pc) =>
                                      pc.brand_details.id ==
                                      item?.brand_details?.id
                                  )
                                }
                              />
                              <div className="checkbox-text">
                                <strong>
                                  {item?.brand_details?.company_name}{' '}
                                </strong>
                                {item?.brand_details?.store_name}
                              </div>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="subfilters">
                    <div className="subfilter">
                      <div className="subfilter_head">Brand Status</div>
                      <div className="subfilter_body">
                        {brandStatusOptions.map((item, i) => {
                          return (
                            <div
                              key={i}
                              className="checkbox checkbox--no-decor"
                            >
                              <label>
                                <FilterCheckbox
                                  data={item.value}
                                  onChange={handleStatusFilter}
                                  initialValue={
                                    selectedBrandStatusFilters &&
                                    selectedBrandStatusFilters?.some(
                                      (pc) => pc.value == item.value
                                    )
                                  }
                                />
                                <div className="checkbox-text">{item.name}</div>
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
            <div
              className={`filter filter-by-products ${
                isClickedTwo ? 'open' : ''
              }`}
            >
              <div className="filter_head" onClick={() => handleClickTwo()}>
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
                      <div className="subfilter_head">wsp</div>
                      <div className="subfilter_body">
                        <div className="tabs">
                          <div className="tab_menu">
                            <button
                              className={`tab-link ${
                                activeTab === 'wsp' ? 'active' : ''
                              }`}
                              onClick={() => handleTabClick('wsp')}
                            >
                              WSP
                            </button>
                            <button
                              className={`tab-link ${
                                activeTab === 'msrp' ? 'active' : ''
                              }`}
                              onClick={() => handleTabClick('msrp')}
                            >
                              MSRP
                            </button>
                          </div>
                          <div className="tabs_body">
                            {activeTab === 'wsp' ? (
                              <div className="tab active" data-target="wsp">
                                <div className="tab_inner">
                                  {priceRangeOptions.map((item, i) => {
                                    return (
                                      <div
                                        key={i}
                                        className="checkbox checkbox--no-decor"
                                      >
                                        <label>
                                          <FilterCheckbox
                                            data={item}
                                            onChange={handleWSPFilter}
                                            initialValue={
                                              activeTab === 'wsp' &&
                                              selectedWSPFilter &&
                                              selectedWSPFilter.some(
                                                (el) => el == item
                                              )
                                            }
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
                            ) : (
                              <div className="tab active" data-target="msrp">
                                <div className="tab_inner">
                                  {priceRangeOptions.map((item, i) => {
                                    return (
                                      <div
                                        key={i}
                                        className="checkbox checkbox--no-decor"
                                      >
                                        <label>
                                          <FilterCheckbox
                                            data={item}
                                            onChange={handleMSRPFilter}
                                            initialValue={
                                              activeTab === 'msrp' &&
                                              selectedMSRPFilter &&
                                              selectedMSRPFilter.some(
                                                (el) => el == item
                                              )
                                            }
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
                            )}
                            <div className="min-max">
                              <input
                                type="number"
                                name="min-wsp-wsp"
                                placeholder="$ Min"
                                value={allTimeSale?.min}
                                onChange={(e) =>
                                  setAllTimeSale({
                                    ...allTimeSale,
                                    min: e.target.value,
                                  })
                                }
                              />
                              <span className="spacer">-</span>
                              <input
                                type="number"
                                name="max-wsp-wsp"
                                placeholder="$ Max"
                                onChange={(e) =>
                                  setAllTimeSale({
                                    ...allTimeSale,
                                    max: e.target.value,
                                  })
                                }
                                value={allTimeSale?.max}
                              />
                            </div>
                            <span style={{ color: '#ff0000' }}>
                              {allTimeSale.max &&
                              parseInt(allTimeSale.max) <
                                parseInt(allTimeSale.min)
                                ? 'Min must be less than Max'
                                : null}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="subfilter">
                      <div className="subfilter_head">Stock</div>
                      <div className="subfilter_body">
                        {stockOptions.map((item, i) => {
                          return (
                            <div
                              key={i}
                              className="checkbox checkbox--no-decor"
                            >
                              <label>
                                <FilterCheckbox
                                  data={item}
                                  onChange={handleStockFilter}
                                  initialValue={
                                    selectedStockFilters &&
                                    selectedStockFilters.some(
                                      (sf) => sf == item
                                    )
                                  }
                                />
                                <div className="checkbox-text">{item}</div>
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="subfilter">
                      <div className="subfilter_head">Days to Fulfill</div>
                      <div className="subfilter_body">
                        {daysToFullfilOptions.map((item, i) => {
                          return (
                            <div
                              key={i}
                              className="checkbox checkbox--no-decor"
                            >
                              <label>
                                <FilterCheckbox
                                  data={item}
                                  onChange={handleDaysToFullfilFilter}
                                  initialValue={
                                    selectedDaysToFullfilFilters &&
                                    selectedDaysToFullfilFilters.some(
                                      (dtf) => dtf === item
                                    )
                                  }
                                />
                                <div className="checkbox-text">{item}</div>
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
