import React, { useEffect, useState } from 'react';
import '../Style/brand.style.scss';
import '../Style/brand.media.scss';
import '../Style/brand.dev.scss';
import BrandHeader from '../common/components/BrandHeader';
import ProductsFilters from './ProductsFilter';
import ProductTable from './ProductTable';
import iconClose from '../../../assets/images/icons/info-blue.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getProductListAction } from '../../../actions/productActions';
import {
  selectProductCatFilter,
  selectProductTagFilter,
  selectStockFilter,
} from '../../../redux/Brand/Products/productSelectors';
import { ToastContainer } from 'react-toastify';

export default function ProductsList() {
  const dispatch = useDispatch();
  const productCatFilter = useSelector(selectProductCatFilter);
  const productTagsFilter = useSelector(selectProductTagFilter);
  const stockFilter = useSelector(selectStockFilter);

  const [actionDes, setActionDes] = useState('');
  const [toasterVisible, setToasterVisible] = useState(false);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const prepareFilter = () => {
    const filter = [];
    // if(productCatFilter && productCatFilter.length > 0) {
    //   const catFilter = {field: 'category', operator: 'in', value: productCatFilter};
    //   filter.push(catFilter);
    // }
    if (productTagsFilter && productTagsFilter.length > 0) {
      const tagFilter = {
        field: 'tag',
        operator: 'in',
        value: productTagsFilter,
      };
      filter.push(tagFilter);
    }
    if (stockFilter && stockFilter.length > 0) {
      stockFilter.forEach((sf) => {
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
    return filter;
  };

  const fetchProducts = () => {
    const data = {
      paging: {
        limit: limit,
        offset: offset,
      },
      sort: [['shopify_product_id', 'DESC']],
      query: {
        category_ids: productCatFilter,
      },
      filter: prepareFilter(),
    };
    dispatch(getProductListAction(data));
  };

  useEffect(() => {
    // fetchProducts();
    console.log('test');
  }, []);

  // useEffect(() => {
  //   fetchProducts();
  // }, [productCatFilter, productTagsFilter, stockFilter]);

  const handleAction = (type, howMuch) => {
    if (type == 'active') {
      setActionDes(`${howMuch} product are set to Active status`);
    } else {
      setActionDes(`${howMuch} products are set to Inactive status`);
    }
    setToasterVisible(true);
    setTimeout(() => {
      setToasterVisible(false);
    }, 5000);
  };

  return (
    <div className="wrapper">
      <BrandHeader />
      <main className="content_main mp-content">
        <section className="section products mp-section">
          <ProductsFilters />
          <ProductTable handleAction={handleAction} />
        </section>
      </main>
      {toasterVisible && (
        <div className="bottom-notify active">
          <div className="container">
            <div className="bottom-notify_text">
              <p>{actionDes}</p>
            </div>
          </div>
          <div className="bottom-notify-close">
            <svg className="close-icon">
              <img src={iconClose} />
            </svg>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
