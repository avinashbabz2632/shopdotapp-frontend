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
import { selectBrandFilters } from '../../../redux/Brand/Retailer/retailerSelector';
import FilterCheckbox from '../../Brand/Products/components/FilterCheckbox';

function SideBar() {
  const dispatch = useDispatch();
  const brandFilters = useSelector(selectBrandFilters);
  console.log('brandFilters----', brandFilters);
  const [brandFiltersClone, setBrandFiltersClone] = useState(brandFilters);
  const [openCloseFilter, setOpenCloseFilter] = useState(true);
  const [allTimeSale, setAllTimeSale] = useState({ min: '', max: '' });
  const [searchVal, setSearchVal] = useState('');
  const [activeTab, setActiveTab] = useState('wsp');
  const [isClickedOne, setIsClickedOne] = useState(true);
  const [isClickedTwo, setIsClickedTwo] = useState(true);
  const [selectedBrandFilters, setSelectedBrandFilters] = useState([]);
  const [selectedBrandStatusFilters, setSelectedBrandStatusFilters] = useState([]);
  const [selectedDaysToFullfilFilters, setSelectedDaysToFullfilFilters] =
    useState([]);
  const [selectedStockFilters, setSelectedStockFilters] = useState([]);
  const [selectedWSPFilter, setSelectedWSPFilter] = useState('');
  const [selectedMSRPFilter, setSelectedMSRPFilter] = useState('');
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  console.log('selectedBrandFilters----', selectedBrandFilters);
  console.log('selectedBrandStatusFilters----', selectedBrandStatusFilters);
  console.log('selectedDaysToFullfilFilters----', selectedDaysToFullfilFilters);
  console.log('selectedStockFilters----', selectedStockFilters);
  console.log('selectedWSPFilter----', selectedWSPFilter);
  console.log('selectedMSRPFilter----', selectedMSRPFilter);

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
    const filter = [];
    if (selectedBrandFilters && selectedBrandFilters.length > 0) {
      const brandFilter = {field: 'brand_id', operator: 'in', value: selectedBrandFilters.map(el => parseInt(el))};
      filter.push(brandFilter);
    }

    if (selectedBrandStatusFilters && selectedBrandStatusFilters.length > 0) {
        const statusFilter = { field: 'brand_status', operator: 'in', value: selectedBrandStatusFilters };
        filter.push(statusFilter);
    }

    if (selectedWSPFilter) {
      let wsp;
      if (selectedWSPFilter === '$1000 or more') {
        wsp = {
          field: 'wsp',
          operator: 'gte',
          value: '1000',
        };
      } else {
        wsp = {
          field: 'wsp',
          operator: 'between',
          value: 'selectedWSPFilter'.replace('$', ''),
        };
      }
      filter.push(wsp);
    }

    if (selectedMSRPFilter) {
      let msrp;
      if (selectedMSRPFilter === '$1000 or more') {
        msrp = {
          field: 'price',
          operator: 'gte',
          value: '1000',
        };
      } else {
        msrp = {
          field: 'price',
          operator: 'between',
          value: 'selectedWSPFilter'.replace('$', ''),
        };
      }
      filter.push(msrp);
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
      const daysToFullFill = {field: 'days_to_fulfill', operator: 'in', value: selectedDaysToFullfilFilters};
      filter.push(daysToFullFill);
    }

    if(allTimeSale.min && allTimeSale.max) {
        const minMax = {field: '', operator: 'between', value: `${allTimeSale.min}-${allTimeSale.max}`};
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
      query: {
        search: searchVal ? searchVal : 'full',
      },
      filter: prepareFilter(),
    };
    // if (searchVal == '') {
    //   delete body.query;
    // }
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
    setSelectedBrandFilters([]);
    setSelectedBrandStatusFilters([]);
    setSelectedDaysToFullfilFilters([]);
    setSelectedStockFilters([]);
    setSelectedWSPFilter('');
    setSelectedMSRPFilter('');
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
  ]);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    console.log('searchQuery----', searchQuery);
    if (searchQuery) {
      const searchWords = searchQuery.split(/\s+/);
      const data = brandFiltersClone.map((item) => {
        return `${item?.brand_details?.company_name} ${item?.brand_details?.store_name}`;
      });
      console.log('data------', data);
      const searchValue = data.filter((ele) => {
        const tags = ele.toLowerCase().split(' ');
        return searchWords.every((word) =>
          tags.some((tag) => tag.includes(word))
        );
      });
      const finalData = searchValue.map((item) => {
        return item.split('Alpha')[1];
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
      copy.push(value);
      setSelectedBrandFilters(copy);
    } else {
      const filter = copy.filter((id) => id !== value);
      setSelectedBrandFilters(filter);
    }
  };

  const handleStockFilter = (checked, value) => {
    const copy = [...selectedStockFilters];
    if (checked) {
      copy.push(value);
      setSelectedStockFilters(copy);
    } else {
      const filter = copy.filter((el) => el !== value);
      setSelectedStockFilters(filter);
    }
  };

  const handleStatusFilter = (checked, value) => {
      const copy = [...selectedBrandStatusFilters];
    if (checked) {
      copy.push(value);
      setSelectedBrandStatusFilters(copy);
    } else {
      const filter = copy.filter((el) => el !== value);
      setSelectedBrandStatusFilters(filter);
    }
  };

  const handleDaysToFullfilFilter = (checked, value) => {
    const copy = [...selectedDaysToFullfilFilters];
    if (checked) {
      copy.push(value);
      setSelectedDaysToFullfilFilters(copy);
    } else {
      const filter = copy.filter((el) => el !== value);
      setSelectedDaysToFullfilFilters(filter);
    }
  };

  const handleWSPFilter = (checked, value) => {
    if (checked) {
      setSelectedWSPFilter(value);
    } else {
      setSelectedWSPFilter('');
    }
  };

  const handleMSRPFilter = (checked, value) => {
    if (checked) {
      setSelectedMSRPFilter(value);
    } else {
      setSelectedMSRPFilter('');
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
                                initialValue={selectedBrandFilters.some(pc => pc == item?.brand_details?.id)}
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
                                //   initialValue={selectedBrandStatusFilters?.some(pc => pc == item.value)}
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
                                              selectedWSPFilter === item
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
                                              selectedMSRPFilter === item
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
                                  initialValue={selectedStockFilters.some(sf => sf == item)}
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
                                  initialValue={selectedDaysToFullfilFilters.some(dtf => dtf === item)}
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
