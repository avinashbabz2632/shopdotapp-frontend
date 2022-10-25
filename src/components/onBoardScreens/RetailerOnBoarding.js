import React from 'react';
import DynamicHeader from '../common/DynamicHeader';
import SetUpGuidCard from '../common/SetUpGuidCard';

const setUpCardData = [
    {
        title: 'Confirm your settings',
        src: '#',
    },
]

const RetailerOnBoarding = () => {
    return (
        <div>
            <DynamicHeader pageTitle="Getting Started" />
            <SetUpGuidCard data={setUpCardData} />
        </div>
    );
}

export default RetailerOnBoarding;
