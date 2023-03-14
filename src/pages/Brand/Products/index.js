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
import { selectProduct } from '../../../redux/Brand/Products/productSelectors';

export default function ProductsList() {
  const dispatch = useDispatch();
  const [actionDes, setActionDes] = useState('');
  const [toasterVisible, setToasterVisible] = useState(false);
  const brandProduct = useSelector(selectProduct);

  useEffect(() => {
    const payload = {
      paging: {
        limit: brandProduct.pagination.limit,
        offset: brandProduct.pagination.page - 1,
      },
      sort: [['shopify_product_id', 'DESC']],
      query: {
        category_id: 48,
      },
      filter: [],
    };
    if (brandProduct.filter.status && brandProduct.filter.status !== 'all') {
      payload.filter.push({
        field: 'status',
        operator: 'eq',
        value: brandProduct.filter.status,
      });
    }
    dispatch(getProductListAction(payload));
  }, [brandProduct.pagination, brandProduct.filter]);

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
      <main className="content mp-content">
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
    </div>
  );
}
