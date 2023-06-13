import React, { useEffect, useState } from 'react';
import ArrowLeft from '../../images/icons/icon-arrow--left.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  productSearchQuery,
  selectLimit,
  selectOffset,
  selectSelectedBrandFilters,
  selectSelectedBrandStatusFilters,
  selectSelectedDaysToFullfillFilters,
  selectSelectedMSRPFilters,
  selectSelectedStockFilters,
  selectSelectedWSPFilters,
} from '../../../../redux/Brand/Retailer/retailerSelector';
import {
  setSelectedBrandFilters,
  setSelectedBrandStatusFilters,
  setSelectedDaysToFullfilFilters,
  setSelectedMSRPFilter,
  setSelectedStockFilters,
  setSelectedWSPFilter,
} from '../../../../redux/Brand/Retailer/retailerSlice';
import FilterCheckbox from '../../../Brand/Products/components/FilterCheckbox';
import { getRetailerProductsAction } from '../../../../actions/retailerActions';


function BrandProductsSidebar(props) {
  const {brandId} = props;
  const [openCloseFilter, setOpenCloseFilter] = useState(true);
  const dispatch = useDispatch();

  const productFilter = [];
  const [productFilterVal, setProductFilterVal] = useState(productFilter);
  const [tagsOption, setTagsOption] = useState([]);
  const [allTimeSale, setAllTimeSale] = useState({ min: '', max: '' });
  const [filterTagsVal, setFilterTagsVal] = useState('');
  const [activeTab, setActiveTab] = useState('wsp');
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
  const productSearchValue = useSelector(productSearchQuery)

  const stockOptions = ['< 10 units', '11-50 units', '> 50 units'];

  const priceRangeOptions = [
    '$1 - $99',
    '$100 - $499',
    '$500 - $999',
    '$1000 or more',
  ];

  const daysToFullfilOptions = ['1-3 days', '4-6 days', '> 7 days'];

  const prepareFilter = () => {
    let filter = [];
    filter.push({
      field: 'brand_id',
      operator: 'in',
      value: [brandId]
    });
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
        value: selectedBrandStatusFilters.map(el => el.value),
      };
      filter.push(statusFilter);
    }

    if (selectedWSPFilter && selectedWSPFilter.length > 0) {
      selectedWSPFilter.forEach(el => {
        let wsp;
        if(el == '$1 - $99') {
          wsp = {
            field: 'wsp',
            operator: 'between',
            value: '1-99',
          };
          // filter.push(wsp);
        } else if (el == '$100 - $499') {
          wsp = {
            field: 'wsp',
            operator: 'between',
            value: '100-499',
          };
          // filter.push(wsp);
        }else if (el == '$500 - $999') {
          wsp = {
            field: 'wsp',
            operator: 'between',
            value: '500-999',
          };
          // filter.push(wsp);
        } else if (el == '$1000 or more') {
          const wsp = {
            field: 'wsp',
            operator: 'gte',
            value: '1000',
          };
          // filter.push(wsp);
        } 

        if(wsp) {
          filter.push(wsp);
        }
      });
      
    }

    if (selectedMSRPFilter && selectedMSRPFilter.length > 0) {
      selectedMSRPFilter.forEach(el => {
        let msrp;
        if(el == '$1 - $99') {
          msrp = {
            field: 'price',
            operator: 'between',
            value: '1-99',
          };
          // filter.push(msrp);
        } 
        if (el == '$100 - $499') {
          msrp = {
            field: 'price',
            operator: 'between',
            value: '100-499',
          };
          // filter.push(msrp);
        }
        if (el == '$500 - $999') {
          msrp = {
            field: 'price',
            operator: 'between',
            value: '500-999',
          };
          // filter.push(msrp);
        } 
        if (el == '$1000 or more') {
          msrp = {
            field: 'price',
            operator: 'gte',
            value: '1000',
          };
          // filter.push(msrp);
        } 

        if(msrp) {
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

    console.log("all time sale --- ", allTimeSale)
    if (allTimeSale.min && allTimeSale.max) {
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
      body.query.search = productSearchValue;;
    }
    dispatch(getRetailerProductsAction(body));
  };

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
                    <div className="subfilter_head">tagsValue</div>
                    <div className="filter_form-items">
                      {(tagsOption || []).map((item, i) => {
                        return (
                          <div key={i} className="checkbox checkbox--no-decor">
                            <label>
                              <input
                                type="checkbox"
                                value={item}
                                onChange={handleTagsOption}
                                checked={filterTagsVal?.includes(item)}
                              />
                              <div className="checkbox-text">{item}</div>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="subfilter mt-5">
                    <div className="subfilter_head">Price</div>
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
                                              selectedMSRPFilter && selectedMSRPFilter.some(el => el == item)
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
                                  initialValue={selectedStockFilters && selectedStockFilters.some(
                                    (sf) => sf == item
                                  )}
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
                                  initialValue={selectedDaysToFullfilFilters && selectedDaysToFullfilFilters.some(
                                    (dtf) => dtf === item
                                  )}
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
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default BrandProductsSidebar;
