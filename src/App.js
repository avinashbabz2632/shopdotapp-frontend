// Main App.js file which load first, it'll manage entire Application routing with lazy loading

import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './components/Loader';
import ResetPasswordSuccess from './pages/Auth/ResetPassword/ResetPassworeSuccess';
import SiteMap from './pages/Sitemap';

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

//Retailer Portal Pages
const RetailerSettingPage = lazy(() => import('./pages/Retailer/Settings'));

function App() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    {/* Auth Routes:::start */}
                    <Route path="/loader" element={<Loader />} />
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route
                        path="/create-password"
                        element={<CreatePassword />}
                    />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="/forgot-password-sent"
                        element={<ForgotPasswordSent />}
                    />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route
                        path="/reset-password-success"
                        element={<ResetPasswordSuccess />}
                    />
                    {/* Auth Routes:::end */}

                    {/* Onboarding Routes:::start */}
                    <Route path="/create-account" element={<CreateAccount />} />
                    <Route
                        path="/verify-email"
                        element={<EmailVerification />}
                    />
                    <Route path="/personalize" element={<Personalize />} />
                    <Route
                        path="/personalized-not-supported"
                        element={<PersonalizeNotSupport />}
                    />
                    <Route path="/user-info" element={<UserInfo />} />
                    {/* Onboarding Routes:::end */}

                    {/* Brand Onboarding Portal Routes:::start */}
                    <Route
                        path="/brand-onboarding"
                        element={<BrandOnBoarding />}
                    />
                    <Route
                        path="/retailer-onboarding"
                        element={<RetailerOnBoarding />}
                    />
                    {/* Brand Onboarding Portal Routes:::end */}

                    {/* Brand Portal Routes::: start */}
                    <Route
                        path="/brand/setting"
                        element={<BrandSettingPage />}
                    />
                    <Route
                        path="/brand/setting/:activeTab"
                        element={<BrandSettingPage />}
                    />
                    {/* Brand Portal Routes::: end */}

                    {/* Retailer Portal Routes:::start */}
                    <Route
                        path="/retailer/setting/"
                        element={<RetailerSettingPage />}
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
