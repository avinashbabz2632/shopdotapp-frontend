// Main App.js file which load first, it'll manage entire Application routing with lazy loading

import { createBrowserHistory } from 'history';
import React, { Suspense, lazy, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Loader from './components/Loader';
import ResetPasswordSuccess from './pages/Auth/ResetPassword/ResetPassworeSuccess';
import SiteMap from './pages/Sitemap';
import { isLoggedIn } from './redux/auth/authSelector';
import {
  selectRoleUpdated,
  selectUserDetails,
} from './redux/user/userSelector';
import Retailer from './pages/Brand/Retailer';

// Auth Pages
const SignIn = lazy(() => import('./pages/Auth/SignIn'));
const SignUp = lazy(() => import('./pages/Auth/SignUp'));
const ForgotPassword = lazy(() => import('./pages/Auth/ForgotPassword'));
const ResetPassword = lazy(() =>
  import('./pages/Auth/ResetPassword/ResetPassword')
);
const CreatePassword = lazy(() => import('./pages/Auth/CreatePassword'));
const PersonalizeNotSupport = lazy(() =>
  import('./pages/Onboarding/Personalize/personalizedNotSupport')
);
const ForgotPasswordSent = lazy(() =>
  import('./pages/Auth/ForgotPassword/ForgotPasswordSent')
);

// NoMatch Page
const NoMatch = lazy(() => import('./components/NoMatch'));

// Onboarding Pages
const CreateAccount = lazy(() => import('./pages/Onboarding/CreateAccount'));
const EmailVerification = lazy(() =>
  import('./pages/Onboarding/EmailVerification')
);
const EmailVerificationSuccess = lazy(() =>
  import('./pages/Onboarding/EmailVerificationSuccessfully')
);
const EmailVerificationFailure = lazy(() =>
  import('./pages/Onboarding/EmailVerificationFailure')
);
const Personalize = lazy(() => import('./pages/Onboarding/Personalize'));
const BrandOnBoarding = lazy(() =>
  import('./pages/Onboarding/BrandOnboarding')
);
const RetailerOnBoarding = lazy(() =>
  import('./pages/Onboarding/RetailerOnboarding')
);
const UserInfo = lazy(() => import('./pages/Onboarding/UserInfo'));
// Brand Portal Pages
const BrandSettingPage = lazy(() => import('./pages/Brand/Settings'));
const BrandOrdersPage = lazy(() => import('./pages/Brand/Orders'));
const BrandProductsPage = lazy(() => import('./pages/Brand/Products'));
const BrandProductDetails = lazy(() =>
  import('./pages/Brand/ProductDetails/index')
);
const EditProductDetails = lazy(() =>
  import('./pages/Brand/EditProductDetails')
);
const BrandRetailerPage = lazy(() => import('./pages/Brand/retailers'));
const RetailerProfile = lazy(() =>
  import('./pages/Brand/retailers/RetailerProfile')
);

//Retailer Portal Pages
const RetailerSettingPage = lazy(() => import('./pages/Retailer/Settings'));
const RetailerBrandListPage = lazy(() =>
  import('./pages/Retailer/Brand/Brands')
);
const RetailerBrandSinglePage = lazy(() =>
  import('./pages/Retailer/Brand/BrandProductPage/Products')
);
const RetailerBrandSingleProductDetailPage = lazy(() =>
  import('./pages/Retailer/Products/ProductDetailsPage/ProductDetails')
);

function App() {
  const navigate = useNavigate();
  const history = createBrowserHistory();
  const isLogged = useSelector(isLoggedIn);
  const isRoleUpdated = useSelector(selectRoleUpdated);
  const userDetails = useSelector(selectUserDetails);

  // useEffect(() => {
  //   const pathname = window.location.pathname;
  //   if (
  //     pathname.includes('/reset-password/') ||
  //     pathname.includes('/forgot-password-sent')
  //   ) {
  //     return;
  //   }

  //   if (isLogged) {
  //     if (!userDetails?.is_email_verified) {
  //       navigate('verify-email');
  //     } else if (!isRoleUpdated) {
  //       navigate('/personalize');
  //     } else if (userDetails.role && userDetails.role.name === 'retailer') {
  //       navigate('/retailer-onboarding');
  //     } else if (userDetails.role && userDetails.role.name === 'brand') {
  //       navigate('/brand-onboarding');
  //     }
  //   } else {
  //     navigate('/login');
  //   }
  // }, []);

  useEffect(() => {
    const pathname = window.location.pathname;
    if (
      pathname.includes('/reset-password/') ||
      pathname.includes('/forgot-password-sent') ||
      pathname.includes('/signup') ||
      pathname.includes('/') ||
      pathname.includes('/login')
    ) {
      return;
    }

    if (isLogged) {
      if (
        pathname == '/signup' ||
        pathname == '/' ||
        (pathname == '/' && !isRoleUpdated)
      ) {
        if (userDetails?.role?.name) {
          if (userDetails?.role?.name === 'retailer') {
            navigate('/retailer-onboarding');
          } else {
            navigate('/brand-onboarding');
          }
        } else {
          navigate('/personalize');
        }
      } else if (pathname == '/') {
        navigate('/login');
      }
    } else if (pathname == '/') {
      navigate('/login');
    } else {
      if (pathname !== '/signup') {
        navigate('/login');
      }
    }
  }, []);

  return (
    <>
      <Suspense>
        <Routes>
          {/* Auth Routes:::start */}
          <Route path="/loader" element={<Loader />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/:referralcode" element={<SignUp />} />
          <Route path="/create-password" element={<CreatePassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/forgot-password-sent"
            element={<ForgotPasswordSent />}
          />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-password/:user_id" element={<ResetPassword />} />
          <Route
            path="/reset-password-success"
            element={<ResetPasswordSuccess />}
          />
          {/* Auth Routes:::end */}

          {/* Onboarding Routes:::start */}
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route
            path="/email-verification-success"
            element={<EmailVerificationSuccess />}
          />
          <Route
            path="/email-verification-failure"
            element={<EmailVerificationFailure />}
          />
          <Route path="/personalize" element={<Personalize />} />
          <Route
            path="/personalized-not-supported"
            element={<PersonalizeNotSupport />}
          />
          <Route path="/user-info" element={<UserInfo />} />
          {/* Onboarding Routes:::end */}

          {/* Brand Onboarding Portal Routes:::start */}
          <Route path="/brand-onboarding" element={<BrandOnBoarding />} />
          <Route path="/retailer-onboarding" element={<RetailerOnBoarding />} />
          {/* Brand Onboarding Portal Routes:::end */}

          {/* Brand Portal Routes::: start */}
          <Route path="/brand/setting" element={<BrandSettingPage />} />
          <Route
            path="/brand/setting/:activeTab"
            element={<BrandSettingPage />}
          />
          <Route path="/brand/orders" element={<BrandOrdersPage />} />
          <Route path="/brand/products" element={<BrandProductsPage />} />
          <Route
            path="/brand/product-details/:id"
            element={<BrandProductDetails />}
          />
          <Route
            path="/brand/edit-product/:id"
            element={<EditProductDetails />}
          />
          <Route path="/brand/retailer" element={<BrandRetailerPage />} />
          <Route
            path="/brand/retailer-profile/:id"
            element={<RetailerProfile />}
          />
          {/* Brand Portal Routes::: end */}
          {/* Brand Retailer Request::: start */}
          <Route path="/brand/request-access" element={<Retailer />} />
          <Route path="/brand/connected-retailer" element={<Retailer />} />
          {/* Brand Retailer Request::: end */}

          {/* Retailer Portal Routes:::start */}
          <Route path="/retailer/setting/" element={<RetailerSettingPage />} />
          <Route path="/retailer/brands" element={<RetailerBrandListPage />} />
          <Route
            path="/retailer/brand/single"
            element={<RetailerBrandSinglePage />}
          />
          <Route
            path="/retailer/brand/single-product-details"
            element={<RetailerBrandSingleProductDetailPage />}
          />
          <Route
            path="/retailer/setting/:activeTab"
            element={<RetailerSettingPage />}
          />
          {/* Retailer Portal Routes:::end */}

          <Route path="/sitemap" element={<SiteMap />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
