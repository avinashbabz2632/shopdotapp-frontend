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
  selectProductCategory,
  selectProductCatFilter,
  selectProductTagFilter,
  selectProductTags,
  selectStockFilter,
  selectStockOptions,
} from '../../../../redux/Brand/Products/productSelectors';
import {
  getProductTagsAction,
  getProductCategoriesAction,
} from '../../../../actions/productActions';
import FilterCheckbox from '../components/FilterCheckbox';

export default function ProductsFilters() {
  const dispatch = useDispatch();
  const productCategory = useSelector(selectProductCategory);
  const productTags = useSelector(selectProductTags);
  const stockOptions = useSelector(selectStockOptions);
  const productCatFilter = useSelector(selectProductCatFilter);
  const productTagsFilter = useSelector(selectProductTagFilter);
  const stockFilter = useSelector(selectStockFilter);
  const [show, setShow] = useState(true);

  useEffect(() => {
    dispatch(getProductCategoriesAction('category', 0));
    dispatch(getProductTagsAction());
  }, []);

  const handleProductCatOption = (checked, value) => {
    const categoryIdsCopy = [...productCatFilter];
    if (checked) {
      categoryIdsCopy.push(parseInt(value));
      dispatch(setProductCatFilter(categoryIdsCopy));
    } else {
      const filter = categoryIdsCopy.filter(
        (catId) => catId !== parseInt(value)
      );
      dispatch(setProductCatFilter(filter));
    }
  };

  const handleProductTagOption = (checked, value) => {
    const productTagsToFilterCopy = [...productTagsFilter];
    if (checked) {
      productTagsToFilterCopy.push(value);
      dispatch(setProductTagsFilter(productTagsToFilterCopy));
    } else {
      const filter = productTagsToFilterCopy.filter((pTag) => pTag !== value);
      dispatch(setProductTagsFilter(filter));
    }
  };

  const handleStockOption = (checked, value) => {
    const stockToFilterCopy = [...stockFilter];
    if (checked) {
      stockToFilterCopy.push(value);
      dispatch(setStockFilter(stockToFilterCopy));
    } else {
      const filter = stockToFilterCopy.filter((pTag) => pTag !== value);
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
            <div className="filters-clear" onClick={() => handleClearFilter()}>
              Clear Filters
            </div>
          )}
        </div>
        <div className="filters_block filters_block-body">
          <div className="filter open filter-by-brand">
            <div className="filter_body">
              <div className="subfilters">
                <div className="subfilter">
                  <div className="subfilter_head">Product category</div>
                  <div className="subfilter_body">
                    <div className="filter_form-items">
                      {(productCategory || []).map((item, i) => {
                        return (
                          <div key={i} className="checkbox checkbox--no-decor">
                            <label>
                              <FilterCheckbox
                                data={item.id}
                                onChange={handleProductCatOption}
                                initialValue={productCatFilter.some(pc => pc == item.id)}
                              />
                              <div className="checkbox-text">{item?.name}</div>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="subfilter">
                  <div className="subfilter_head">Product tags</div>
                  <div className="subfilter_body">
                    <div className="filter_form-items">
                      {(productTags || []).map((item, i) => {
                        return (
                          <div className="checkbox checkbox--no-decor" key={i}>
                            <label>
                              <FilterCheckbox
                                data={item?.tag}
                                onChange={handleProductTagOption}
                                initialValue={productTagsFilter.some(tag => tag == item.tag)}
                              />
                              <div className="checkbox-text">{item.tag}</div>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="subfilter">
                  <div className="subfilter_head">Stock</div>
                  <div className="subfilter_body">
                    {(stockOptions || []).map((item, i) => {
                      return (
                        <div className="checkbox checkbox--no-decor" key={i}>
                          <label>
                            <FilterCheckbox
                              data={item}
                              onChange={handleStockOption}
                              initialValue={stockFilter.some(sf => sf === item)}
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
  );
}
