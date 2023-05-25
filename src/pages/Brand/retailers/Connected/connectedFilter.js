import React, {
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
    setCategoryFilter,
    setStateFilter,
    setSalesFilter,
    resetConnecteRetailersFilter,
} from '../../../../redux/Brand/Retailers/retailerSlice';
import Info from '../../images/icons/info.svg';

const ConnectedFilter = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const [openSelect, setOpenSelect] = useState('');
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedState, setSelectedState] = useState([]);
    const [allTimeSale, setAllTimeSale] = useState({ min: '', max: '' });

    useEffect(() => {
        dispatch(setCategoryFilter(selectedCategory));
        dispatch(setStateFilter(selectedState));
        dispatch(setSalesFilter(allTimeSale));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCategory, selectedState, allTimeSale]);

    const openCloseSelect = (key) => {
        if (openSelect === key) {
            setOpenSelect('');
        } else {
            setOpenSelect(key);
        }
    };

    const handleChangeCheckbox = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedCategory([...selectedCategory, value]);
        } else {
            const newArr = selectedCategory.filter((item) => {
                return item != value;
            });
            setSelectedCategory([...newArr]);
        }
    };
    const handleChangeStateCheckbox = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedState([...selectedState, value]);
        } else {
            const newArr = selectedState.filter((item) => {
                return item != value;
            });
            setSelectedState([...newArr]);
        }
    };

    // The component instance will be extended
    // with whatever you return from the callback passed
    // as the second argument
    useImperativeHandle(ref, () => ({
        handleClearFilter() {
            setAllTimeSale({ min: '', max: '' });
            setSelectedState([]);
            setSelectedCategory([]);
            dispatch(resetConnecteRetailersFilter());
        },
    }));

    return (
        <div className="subfilters">
            <div className="subfilter">
                <div className="subfilter_head mb-2">Retailer Category</div>
                <div className="subfilter_body">
                    <div className="multiselect">
                        <div
                            className="selectBox"
                            onClick={() => openCloseSelect('category')}
                        >
                            <select>
                                <option>Select Retailer Category</option>
                            </select>
                            <div
                                className="overSelect"
                                data-selectid="relailerCategory"
                            ></div>
                        </div>
                        <div
                            id="relailerCategory"
                            className={`select-list select-options ${
                                openSelect === 'category'
                                    ? 'hide retailer-select'
                                    : ''
                            }`}
                        >
                            <label htmlFor="pc1">
                                <input
                                    type="checkbox"
                                    id="pc1"
                                    onChange={handleChangeCheckbox}
                                    value="Florist or Garden Store"
                                />
                                Florist or Garden Store
                                <span></span>
                            </label>
                            <label htmlFor="pc2">
                                <input
                                    type="checkbox"
                                    id="pc2"
                                    onChange={handleChangeCheckbox}
                                    value="Gift Store"
                                />
                                Gift Store
                                <span></span>
                            </label>
                            <label htmlFor="pc3">
                                <input
                                    type="checkbox"
                                    id="pc3"
                                    onChange={handleChangeCheckbox}
                                    value="Stationery Store"
                                />
                                Stationery Store
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="subfilter">
                <div className="subfilter_head mb-2">state</div>
                <div className="subfilter_body">
                    <div className="multiselect">
                        <div
                            className="selectBox"
                            onClick={() => openCloseSelect('state')}
                        >
                            <select>
                                <option>Select State</option>
                            </select>
                            <div
                                className="overSelect"
                                data-selectid="states"
                            ></div>
                        </div>
                        <div
                            id="states"
                            className={`select-list select-options ${
                                openSelect === 'state'
                                    ? 'hide retailer-select'
                                    : ''
                            }`}
                        >
                            <label htmlFor="pc8">
                                <input
                                    type="checkbox"
                                    id="pc8"
                                    value="California"
                                    onChange={handleChangeStateCheckbox}
                                />
                                California
                                <span></span>
                            </label>

                            <label htmlFor="pc9">
                                <input
                                    type="checkbox"
                                    id="pc9"
                                    value="Texas"
                                    onChange={handleChangeStateCheckbox}
                                />
                                Texas
                                <span></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfilter">
                <div className="subfilter_head mb-2">
                    <span>All Time Sales</span>
                    <div className="tooltip">
                        <div className="tooltip-icon">
                            <img src={Info} className="icon" />
                        </div>
                        <div className="tooltip_text">
                            <p className="mb-0">
                                This is the current all time sales of the
                                retailer on your product.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="subfilter_body">
                    {/* <div className="min-max-slider mt-0">
                        <div
                            className="slider-track"
                            style={{
                                background:
                                    'linear-gradient(to right, rgb(208, 208, 208) 0%, rgb(189, 111, 52) 0%, rgb(189, 111, 52) 400%, rgb(208, 208, 208) 400%)',
                            }}
                        ></div>
                        <input
                            type="range"
                            min="0"
                            max="100000"
                            value="0"
                            id="slider-1"
                            oninput="slideOne()"
                        />
                        <input
                            type="range"
                            min="0"
                            max="400000"
                            value="400000"
                            id="slider-2"
                            oninput="slideTwo()"
                        />
                    </div> */}
                    <div className="min-max mt-2">
                        <div className="mm-input">
                            <input
                                type="number"
                                name="min-price-wsp"
                                value={allTimeSale?.min}
                                onChange={(e) =>
                                    setAllTimeSale({
                                        ...allTimeSale,
                                        min: e.target.value,
                                    })
                                }
                                id="range1"
                                placeholder="$ Min"
                            />
                            {/* <span>Min USD</span> */}
                        </div>
                        <span className="spacer">-</span>
                        <div className="mm-input">
                            <input
                                type="number"
                                name="max-price-wsp"
                                onChange={(e) =>
                                    setAllTimeSale({
                                        ...allTimeSale,
                                        max: e.target.value,
                                    })
                                }
                                value={allTimeSale?.max}
                                id="range2"
                                placeholder="$ Max"
                            />
                            {/* <span>Max USD</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

ConnectedFilter.displayName = 'ConnectedFilter';

ConnectedFilter.propTypes = {
    openSideFilter: PropTypes.bool,
    setOpenSideFilter: PropTypes.func,
};

export default ConnectedFilter;
