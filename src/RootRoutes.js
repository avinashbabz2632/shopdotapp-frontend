import React from 'react';
import {
    Route, createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import SignIn from './components/scence/SignIn';
import SignUp from './components/scence/SignUp';
import OnBoardingSignUp from './components/onBoardScreens/CreateShopdotAccount';
import AlertAndNotifications from './components/settings/AlertAndNotifications';
import GettingPaid from './components/settings/GettingPaid';
import Security from './components/settings/Security';
import Shipping from './components/settings/shipping';
import User from './components/settings/User';
import SettingsLayout from './layouts/SettingsLayout';
import PersonalisedPlatfromExperience from './components/onBoardScreens/PersonalisePlatformExperience';
import BrandOnBoarding from './components/onBoardScreens/BrandOnBoarding';
import RetailerOnBoarding from './components/onBoardScreens/retailerOnBoarding';
import BrandPrfile from './components/settings/BrandProfile';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <OnBoardingSignUp />
    },
    {
        path: "/onboarding-signup",
        element: <OnBoardingSignUp />
    },
    {
        path: "/personalised",
        element: <PersonalisedPlatfromExperience />
    },
    {
        path: "/brandonboarding",
        element: <BrandOnBoarding />
    },
    {
        path: "/retaileronboarding",
        element: <RetailerOnBoarding />
    },
    {
        path: "/signin",
        element: <SignIn />
    },
    {
        path: "/setting",
        element: <SettingsLayout />,
        children: [
            {
                path: "404",
                element: <NotFoundPage />,
            },
            {
                path: "brand-profile",
                element: <BrandPrfile />,
            },
            {
                path: "getting-paid",
                element: <GettingPaid />,
            },
            {
                path: "shipping",
                element: <Shipping />,
            },
            {
                path: "user",
                element: <User />,
            },
            {
                path: "security",
                element: <Security />,
            },
            {
                path: "alert",
                element: <AlertAndNotifications />,
            },

        ],
    },
    // {
    //     path: "*",
    //     element: <NotFoundPage />
    // },
]);

