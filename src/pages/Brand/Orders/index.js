import React from 'react';
import '../Style/brand.style.scss';
import '../Style/brand.media.scss';
import '../Style/brand.dev.scss';
import BrandHeader from '../common/components/BrandHeader';
import FilterSideBar from './FiltersInfo';
import OrderTable from './OrderTable';

export default function OrderList() {
  return (
    <div className="wrapper">
      <BrandHeader />
      <main className="content mp-content setting-section">
        <section className="section products pc_tabs tabs">
          <FilterSideBar />
          <OrderTable />
        </section>
      </main>
    </div>
  );
}
