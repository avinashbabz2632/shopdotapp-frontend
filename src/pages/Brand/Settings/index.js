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
import { useDispatch, useSelector } from 'react-redux';
import { signOutAction } from '../../../actions/authActions';
import { createBrowserHistory } from 'history';
import { selectUserDetails } from '../../../redux/user/userSelector';
import { getBrandProfileAction } from '../../../actions/brandActions';
import { selectBrandProfileDetails } from '../../../redux/Brand/Profile/brandProfileSelectors';

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
  const [completedStep, setCompletedStep] = useState([]);
  const dispatch = useDispatch();
  const useDetails = useSelector(selectUserDetails);
  const history = createBrowserHistory();
  const brandProfileDetails = useSelector(selectBrandProfileDetails);

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
    } else if (activeTab == 'notification') {
      setTab('notification');
    } else if (activeTab == 'users') {
      setTab('users');
    } else if (activeTab == 'integration') {
      setTab('integration');
    } else {
      setTab('');
    }
  }, [activeTab]);

  useEffect(() => {
    dispatch(getBrandProfileAction(useDetails.id));
  }, []);

  useEffect(() => {
    const steps = [];
    if (
      brandProfileDetails.brand_profile &&
      brandProfileDetails.brand_profile.company_name
    ) {
      steps.push('profile');
    }
    if (brandProfileDetails.shop_detail) {
      steps.push('integration');
    }
    if (brandProfileDetails.shippingRate) {
      steps.push('shipping');
    }
    if (brandProfileDetails.payment_detail) {
      steps.push('payment');
    }
    if (brandProfileDetails.brandPreference) {
      steps.push('preference');
    }
    console.log(steps, brandProfileDetails, 'brandprofile')
    setCompletedStep(steps);
  }, [brandProfileDetails]);

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
      case 'notification':
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
        useDetails={useDetails}
        callback={(callbackType) => {
          if (callbackType === 'logout') {
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
          <BrandSidebar completedStep={completedStep} />
          <Suspense fallback={<Loader />}>
            {tab && renderTab(tab)}
            {!activeTab && <BrandProfile />}
          </Suspense>
        </section>
      </main>
    </div>
  );
}
