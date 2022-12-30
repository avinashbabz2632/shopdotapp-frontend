// Component:: Loader component

import React from 'react';
import loader from '../../assets/loader.svg';
import '../../pages/Brand/Style/brand.dev.scss';

function Loader() {
    return (
        <>
            <div className="loader_area">
                <div className="loader">
                    <img src={loader} alt="Loading..." />
                </div>
            </div>
        </>
    );
}

export default Loader;
