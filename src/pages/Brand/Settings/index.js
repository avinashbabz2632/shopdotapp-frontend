import React, { lazy, Suspense, useEffect, useState } from 'react';
import '../Style/brand.style.scss';
import '../Style/brand.media.scss';
import '../Style/brand.dev.scss';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import Loader from '../../../components/Loader';
import BrandHeader from '../common/components/BrandHeader';
import BrandSidebar from '../common/components/Sidebar';
import OnboardingLayout from '../../../layout/OnboardingLayout';
import CommonLayout from '../../../layout/CommonLayout';
import { useDispatch } from 'react-redux';
import { signOutAction } from '../../../actions/authActions';
import { createBrowserHistory } from 'history';

const BrandShipping = lazy(() => import('./Shipping'));
const BrandSecurity = lazy(() => import('./Security'));
const BrandProfile = lazy(() => import('./Profile'));
const BrandPreference = lazy(() => import('./Preferences'));
const BrandPaid = lazy(() => import('./Paid'));
const BrandNotification = lazy(() => import('./Notifications'));
const BrandUsers = lazy(() => import('./Users'));
const BrandSetting = lazy(() => import('./Integration'));

export default function BrandSettingPage() {
  const { activeTab } = useParams();
  const [tab, setTab] = useState('');
  const dispatch = useDispatch();
  const history = createBrowserHistory();

  useEffect(() => {
    if (activeTab == 'shipping') {
      setTab('shipping');
    } else if (activeTab == 'security') {
      setTab('security');
    } else if (activeTab == 'profile') {
      setTab('profile');
    } else if (activeTab == 'preference') {
      setTab('preference');
    } else if (activeTab == 'paid') {
      setTab('paid');
    } else if (activeTab == 'Notification') {
      setTab('Notification');
    } else if (activeTab == 'users') {
      setTab('users');
    } else if (activeTab == 'integration') {
      setTab('integration');
    } else {
      setTab('');
    }
  }, [activeTab]);

  const renderTab = (tabName) => {
    switch (tabName) {
      case 'shipping':
        return <BrandShipping />;
      case 'security':
        return <BrandSecurity />;
      case 'integration':
        return <BrandSetting />;
      case 'preference':
        return <BrandPreference />;
      case 'paid':
        return <BrandPaid />;
      case 'Notification':
        return <BrandNotification />;
      case 'users':
        return <BrandUsers />;
      default:
        return <BrandProfile />;
    }
  };

  return (
    <div className="wrapper">
      <BrandHeader
        callback={(callbackType) => {
          if (callbackType === 'signout') {
            dispatch(signOutAction());
            history.replace('/');
          }
        }}
      />
      <main
        className="content mp-content setting-section"
        style={{ background: 'white' }}
      >
        <section
          className="section products pc_tabs tabs"
          style={{ background: 'white' }}
        >
          <BrandSidebar />
          <Suspense fallback={<Loader />}>
            {tab && renderTab(tab)}
            {!activeTab && <BrandProfile />}
          </Suspense>
        </section>
      </main>
    </div>
  );
}
