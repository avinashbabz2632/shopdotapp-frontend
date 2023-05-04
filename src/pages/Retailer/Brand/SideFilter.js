import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowLeft from '../images/icons/icon-arrow--left.svg';

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
                <div className="filters_block filters_block-head pb-0">
                    <button
                        className="filters_hide-and-show"
                        onClick={() => handleOpenCloseFilter()}
                    >
                        <img className="icon" src={ArrowLeft} />
                    </button>

                    <div className="result-action">
                        <a href="#" className="filters-clear">
                            Apply
                        </a>
                        <a href="#" className="filters-clear">
                            Clear
                        </a>
                    </div>
                </div>
                <div className="filters_block-body">
                    <div className="filter-by-products">
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
