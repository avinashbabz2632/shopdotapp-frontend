import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ArrowLeft from '../../images/icons/icon-arrow--left.svg';
import { useDispatch } from 'react-redux';
import {
    setCategoryFilter,
    setStateFilter,
    setSalesFilter,
} from '../../../../redux/Brand/Retailers/retailerSlice';

export default function SideFilter({ component }) {
    const [openCloseFilter, setOpenCloseFilter] = useState(true);

    const handleOpenCloseFilter = () => {
        setOpenCloseFilter(!openCloseFilter);
    };

    return (
        <aside
            className={`filters filter-retailer ${
                openCloseFilter ? '' : 'hidden'
            }`}
        >
            <div className="filters_wrap">
                <div className="filters_block filters_block-head">
                    <button
                        className="filters_hide-and-show"
                        onClick={() => handleOpenCloseFilter()}
                    >
                        <img className="icon" src={ArrowLeft} />
                    </button>
                    <a
                        href="#"
                        className={`filters-clear ${
                            openCloseFilter ? '' : 'hide'
                        }`}
                    >
                        Clear Filters
                    </a>
                </div>
                <div className="filters_block filters_block-body">
                    <div className="filter open filter-by-products">
                        <div className="filter_body pt-3 pb-5">{component}</div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

SideFilter.propTypes = {
    component: PropTypes.any,
};
