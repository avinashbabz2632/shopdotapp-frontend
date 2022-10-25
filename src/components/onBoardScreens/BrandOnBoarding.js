import React from 'react';
import './style.css';
import DynamicHeader from '../common/DynamicHeader';
import SetUpGuidCard from '../common/SetUpGuidCard';

const setUpCardData = [
    {
        title: 'Connect your shopify store',
        src: '#',
        isInputRequired: true
    },
    {
        title: 'Confirm your settings',
        src: '#'
    },
    {
        title: 'Add shopify products to ShopDot',
        src: '#'
    },
    {
        title: 'Activate your products',
        src: '#'
    }
]

const BrandOnBoarding = () => {
    return (
        <div>
            <DynamicHeader pageTitle="Getting Started" />
            <SetUpGuidCard data={setUpCardData} />
        </div>
    );
};

export default BrandOnBoarding;