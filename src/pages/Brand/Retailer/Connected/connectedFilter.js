import React, {
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
    setCategoryFilter,
    setStateFilter,
    resetConnecteRetailersFilter,
} from '../../../../redux/Brand/Retailer/retailerSlice';
import Info from '../../images/icons/info.svg';
import { getRetailerCategory, getStatesAction } from '../../../../actions/generalActions';
import { selectStates } from '../../../../redux/General/States/getStatesSelector';
import { selectCategories } from '../../../../redux/General/Category/getCategorySelector';

const ConnectedFilter = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const [openSelect, setOpenSelect] = useState('');
    const selectedState = useSelector(selectStates);
    const [filterState, setFilterState] = useState([]);
    const [filterCategory, setFilterCategory] = useState([]);
    const selectedCategories = useSelector(selectCategories);
    const [allTimeSale, setAllTimeSale] = useState({ min: '', max: '' });

    useEffect(() => {
        dispatch(getStatesAction(1));
        dispatch(getRetailerCategory())
        dispatch(setCategoryFilter(filterCategory));
        dispatch(setStateFilter(filterState));
    }, [filterCategory, filterState]);

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
            setFilterCategory([...filterCategory, value])
        } else {
            const tempArray = [...filterCategory]
            const index = tempArray.indexOf(value)
            if (index !== -1) {
                tempArray.splice(index, 1);
                setFilterCategory([...tempArray]);
            }
        }
    };
    const handleChangeStateCheckbox = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setFilterState([...filterState, value])
        } else {
            const tempArray = [...filterState]
            const index = tempArray.indexOf(value)
            if (index !== -1) {
                tempArray.splice(index, 1);
                setFilterState([...tempArray]);
            }
        }
    };

    useImperativeHandle(ref, () => ({
        handleClearFilter() {
            setAllTimeSale({ min: '', max: '' });
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
                            className={`select-list select-options ${openSelect === 'category'
                                    ? 'hide retailer-select'
                                    : ''
                                }`}
                        >
                            {
                                selectedCategories?.map((category,i)=>{
                                    return (
                                        <label htmlFor={`category-${i}`} key={i}>
                                            <input
                                                type="checkbox"
                                                id={`category-${i}`}
                                                onChange={handleChangeCheckbox}
                                                value={category.id}
                                            />
                                            {category.name}
                                            <span></span>
                                        </label>
                                    )
                                })
                            }
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
                            className={`select-list select-options ${openSelect === 'state'
                                    ? 'hide retailer-select'
                                    : ''
                                }`}
                        >
                            {
                                selectedState.map((state, i)=>{
                                    return (
                                        <label htmlFor={`state-${i}`} key={i}>
                                            <input type="checkbox" id={`state-${i}`} value={state.name} onChange={handleChangeStateCheckbox}/>
                                            {state.name}
                                            <span></span>
                                        </label>
                                    )
                                })
                            }
                            
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