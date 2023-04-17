import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../../components/Loader';
import BrandHeader from '../common/components/BrandHeader';
import BrandSidebar from '../common/components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserHistory } from 'history';
import { selectUserDetails } from '../../../redux/user/userSelector';
import { getBrandProfileAction } from '../../../actions/brandActions';
import { selectProfileCompleted } from '../../../redux/Brand/Profile/brandProfileSelectors';
import { AuthApiService } from '../../../services/apis/authApis';
import { logOut } from '../../../redux/auth/authSlice';
import { toast } from 'react-toastify';

const BrandShipping = lazy(() => import('./Shipping'));
const BrandSecurity = lazy(() => import('./Security'));
const BrandProfile = lazy(() => import('./Profile'));
const BrandPreference = lazy(() => import('./Preferences'));
const BrandPaid = lazy(() => import('./Paid'));
const BrandNotification = lazy(() => import('./Notifications'));
const BrandUsers = lazy(() => import('./Users'));
const BrandIntegration = lazy(() => import('./Integration'));

import '../Style/brand.style.scss';
import '../Style/brand.media.scss';
import '../Style/brand.dev.scss';

export default function BrandSettingPage() {
  const navigate = useNavigate();
  const { activeTab } = useParams();
  const [tab, setTab] = useState('');
  const [completedStep, setCompletedStep] = useState([]);
  const dispatch = useDispatch();
  const useDetails = useSelector(selectUserDetails);
  const history = createBrowserHistory();
  const profileCompleted = useSelector(selectProfileCompleted);

  const handleLogOut = async () => {
    const fromData = {
      user_id: useDetails.id,
    };

    const res = await AuthApiService.signOut({ fromData });

    if (res) {
      dispatch(logOut());
      history.replace('/');
      navigate('/');
      return;
    }

    toast.error('Seomething went wrong while signing out!');
  };

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
    if (profileCompleted.profile) {
      steps.push('profile');
    }
    if (profileCompleted.integration) {
      steps.push('integration');
    }
    if (profileCompleted.shipping) {
      steps.push('shipping');
    }
    if (profileCompleted.paid) {
      steps.push('payment');
    }
    if (profileCompleted.preference) {
      steps.push('preference');
    }

    setCompletedStep(steps);
  }, [profileCompleted]);

  const renderTab = (tabName) => {
    switch (tabName) {
      case 'shipping':
        return <BrandShipping />;
      case 'security':
        return <BrandSecurity />;
      case 'integration':
        return <BrandIntegration />;
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
            handleLogOut();
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
          <Suspense>
            {tab && renderTab(tab)}
            {!activeTab && <BrandProfile />}
          </Suspense>
        </section>
      </main>
    </div>
  );
}
