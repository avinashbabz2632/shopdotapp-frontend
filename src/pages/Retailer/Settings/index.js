import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import '../Style/retail.style.scss';
import '../Style/retail.media.scss';
import '../Style/retail.dev.scss';
import RetailerHeader from '../common/components/RetailerHeader';
import Loader from '../../../components/Loader';
import RetailerSidebar from '../common/components/Sidebar';
import { getBillingAction } from '../../../actions/retailerActions';
import { setRetilerProfileCompleted } from '../../../redux/Retailer/Profile/retailerProfileSlice';
import { useDispatch } from 'react-redux';

const RetailerProfile = lazy(() => import('./Profile'));
const RetailerBilling = lazy(() => import('./Billing'));
const RetailerUsers = lazy(() => import('./Users'));
const RetailerSecurity = lazy(() => import('./Security'));
const RetailerNotification = lazy(() => import('./Notifications'));

export default function Retailer() {
  const { activeTab } = useParams();
  const [tab, setTab] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    initalCall();
  }, []);

  const initalCall = async () => {
    const response = await getBillingAction();
    if (response?.status === 200) {
      if (response?.data?.data?.length) {
        dispatch(
          setRetilerProfileCompleted({
            paid: true,
          })
        );
      }
    } else {
    }
  };

  useEffect(() => {
    if (activeTab == 'profile') {
      setTab('profile');
    } else if (activeTab == 'billing') {
      setTab('billing');
    } else if (activeTab == 'users') {
      setTab('users');
    } else if (activeTab == 'security') {
      setTab('security');
    } else if (activeTab == 'notification') {
      setTab('notification');
    } else {
      setTab('');
    }
  }, [activeTab]);

  const renderTab = (tabName) => {
    switch (tabName) {
      case 'profile':
        return <RetailerProfile />;
      case 'billing':
        return <RetailerBilling />;
      case 'users':
        return <RetailerUsers />;
      case 'security':
        return <RetailerSecurity />;
      case 'notification':
        return <RetailerNotification />;
      default:
        return <RetailerProfile />;
    }
  };

  return (
    <div className="wrapper">
      <RetailerHeader />
      <main
        className="content mp-content setting-section"
        style={{ background: 'white' }}
      >
        <section
          className="section products pc_tabs tabs mp-section"
          style={{ background: 'white' }}
        >
          <RetailerSidebar />
          <Suspense fallback={null}>
            {tab && renderTab(tab)}
            {!activeTab && <RetailerProfile />}
          </Suspense>
        </section>
      </main>
      <Outlet />
    </div>
  );
}
