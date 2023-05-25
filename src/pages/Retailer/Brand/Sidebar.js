import { forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectStates } from '../../../redux/General/States/getStatesSelector';
import {
  setRetailerBrandValuesFilter,
  setRetailerPricingFilter,
  setRetailerStateFilter,
} from '../../../redux/Retailer/Brand/Products/retailerBrandProductsSlice';
import {
  selectRetailerBrandValuesFilter,
  selectRetailerBrandValuesList,
  selectRetailerPricingFilter,
} from '../../../redux/Retailer/Brand/Products/selectRetailerBrandProductsSelector';
import FilterCheckbox from '../../Brand/Products/components/FilterCheckbox';

const SideBar = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const brandValuesList = useSelector(selectRetailerBrandValuesList);
  const statesOption = useSelector(selectStates);
  const brandValuesFilter = useSelector(selectRetailerBrandValuesFilter);
  const pricingFilter = useSelector(selectRetailerPricingFilter);

  const pricingFilterDataArr = [
    {
      id: 1,
      value: 'Enforce retail price',
    },
    {
      id: 2,
      value: 'Allow for flexible retail pricing',
    },
  ];

  const handleBrandValuesFilter = (checked, value) => {
    const brandValuesCopy = [...brandValuesFilter];
    if (checked) {
      brandValuesCopy.push(parseInt(value));
      dispatch(setRetailerBrandValuesFilter(brandValuesCopy));
    } else {
      const filter = brandValuesCopy.filter(
        (catId) => catId !== parseInt(value)
      );
      dispatch(setRetailerBrandValuesFilter(filter));
    }
  };

  const handlePricingFilter = (checked, value) => {
    const pricingFilterCopy = [...pricingFilter];
    if (checked) {
      pricingFilterCopy.push(value);
      dispatch(setRetailerPricingFilter(pricingFilterCopy));
    } else {
      const filter = pricingFilterCopy.filter((pfv) => pfv !== value);
      dispatch(setRetailerPricingFilter(filter));
    }
  };

  const handleStateFilter = (e) => {
    const value = e.target.value;
    console.log('state-value--', value);
    dispatch(setRetailerStateFilter(value));
  };

  return (
    <>
      <aside className="filters">
        <div className="filters_block filters_block-body">
          <div className="filter-by-brand">
            <div className="filter_body">
              <div className="subfilters">
                <div className="subfilter">
                  <div className="subfilter_head">Brand Values</div>
                  <div className="filter_form-items">
                    <div className="subfilter_body">
                      {(brandValuesList || []).map((bv, i) => {
                        return (
                          <div
                            className="checkbox checkbox--no-decor"
                            key={`${i}`}
                          >
                            <label>
                              <FilterCheckbox
                                data={bv?.id}
                                onChange={handleBrandValuesFilter}
                                initialValue={(brandValuesFilter || []).some(
                                  (el) => el.id == bv.id
                                )}
                              />
                              <div className="checkbox-text">{bv?.name}</div>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="subfilter">
                  <div className="subfilter_head">shipping location</div>
                  <div className="subfilter_body">
                    <div className="select">
                      <select
                        name="ship-state"
                        id="ship-state"
                        onChange={handleStateFilter}
                      >
                        {(statesOption || []).map((state, i) => {
                          return (
                            <option
                              value={state?.name}
                              disabled=""
                              key={`${i}`}
                            >
                              {state?.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="subfilter">
                  <div className="subfilter_head">Retail pricing</div>
                  <div className="subfilter_body">
                    {pricingFilterDataArr.map((pf, i) => {
                      return (
                        <div
                          className="checkbox checkbox--no-decor"
                          key={`${i}`}
                        >
                          <label>
                            {/* <input type="checkbox" id="rp-1" name="rp" /> */}
                            <FilterCheckbox
                              data={pf?.value}
                              onChange={handlePricingFilter}
                              initialValue={(pricingFilter || []).some(
                                (el) => el == pf.value
                              )}
                            />
                            <div className="checkbox-text">{pf.value}</div>
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
      </aside>
    </>
  );
});

export default SideBar;
