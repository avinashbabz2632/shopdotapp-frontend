import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import closeBlackIcon from '../../images/icons/close-icon.svg';
import { RetailerData } from '../utils';
import addRetaielr from '../../../../assets/images/icons/add_circle.svg';
import remvoeRetaielr from '../../../../assets/images/icons/remove_circle.svg';
import saveIcon from '../../../../assets/images/icons/save.svg';

export default function RetailerPopup(props) {
    const { handalPopup, assignedData } = props;
    const [assignedRetailer, setAssignedRetailer] = useState([]);
    const [allRetailer, setAllRetailer] = useState([...RetailerData]);
    const [searchResult, setSearchResult] = useState([...RetailerData]);
    // const [searchValue, setSearchValue] = useState('')

    // const handleSerchValue = (e) => {
    //     setSearchValue(e.target.value || '')
    // }
    useEffect(() => {
        if (assignedData != '') {
            const newArr = allRetailer.splice(0, 2);
            setAssignedRetailer(newArr);
        }
    }, []);
    console.log('searchresult', searchResult);
    const handleSearchRetailer = (e) => {
        const searchValue = e.target.value || '';
        const namesToDeleteSet = new Set(assignedRetailer);
        const newArr = searchResult.filter((name) => {
            return !namesToDeleteSet.has(name);
        });
        const sortValueBasedOnSearch = newArr.filter((item) => {
            return item.name.toLowerCase().includes(searchValue.toLowerCase());
        });

        console.log('newsearch', newArr);
        // if(searchValue.length == 0){
        //     setAllRetailer(newArr)
        // }else{
        //     setAllRetailer(sortValueBasedOnSearch)
        // }
        setAllRetailer(sortValueBasedOnSearch);
        // setSearchResult(newArr)
    };

    const assignedSingleRetailer = (item, index) => {
        allRetailer.splice(index, 1);
        setAssignedRetailer([...assignedRetailer, item]);
    };

    const assignedAllRetailer = () => {
        const totalData = allRetailer.length && allRetailer.length;
        allRetailer.length &&
            setAssignedRetailer([...assignedRetailer, ...allRetailer]);
        allRetailer.splice(0, totalData);
    };

    const removeSingleRetailer = (item, index) => {
        assignedRetailer.splice(index, 1);
        setAllRetailer([...allRetailer, item]);
    };
    const removeAllRetailer = () => {
        const totalData = assignedRetailer.length && assignedRetailer.length;
        assignedRetailer.length &&
            setAllRetailer([...allRetailer, ...assignedRetailer]);
        assignedRetailer.splice(0, totalData);
    };

    const handleSave = () => {
        console.log('Assigned Retailer -->', assignedRetailer);
        handalPopup();
    };

    return (
        <div className="popup my-product-modal pd-retailer-modal">
            <div className="popup_wrapper">
                <div className="popup_content">
                    <div className="popup-close" onClick={() => handalPopup()}>
                        <img className="icon" src={closeBlackIcon} />
                    </div>
                    <div className="popup-display pd-retailer active">
                        <div className="retailers-tab">
                            <div className="action-head">
                                <button
                                    className="button button-white cancel"
                                    onClick={() => handalPopup()}
                                >
                                    Cancel{' '}
                                </button>
                                <button
                                    className="button button-orange-dark"
                                    onClick={handleSave}
                                >
                                    <span className="icon-size">
                                        <img src={saveIcon} />
                                    </span>
                                    Save Changes
                                </button>
                            </div>
                            <div className="product-title">
                                Allow Product for Retailer
                            </div>

                            <div className="products_head-search">
                                <form action="#" className="search_form">
                                    <div className="search_form-input">
                                        <input
                                            type="text"
                                            placeholder="Search product name or SKU"
                                            onChange={handleSearchRetailer}
                                        />
                                    </div>
                                    <button
                                        type="cancel"
                                        className="search_form-button"
                                    >
                                        <svg className="icon"></svg>
                                    </button>
                                    <button type="submit"></button>
                                    <svg className="icon"></svg>
                                </form>
                            </div>

                            <div className="product-retailer-area">
                                <div className="available-area">
                                    <div className="av-title">
                                        {allRetailer.length &&
                                            allRetailer.length}{' '}
                                        Retailers Available
                                    </div>

                                    <a
                                        onClick={assignedAllRetailer}
                                        href="#"
                                        className={`add-item-label add-category ${
                                            allRetailer.length &&
                                            allRetailer.length > 0
                                                ? ''
                                                : 'light-pill'
                                        }`}
                                    >
                                        <span>+</span> Assign All
                                    </a>

                                    <div className="retailer-box">
                                        {allRetailer.length > 0 &&
                                            allRetailer.map((e, i) => (
                                                <div
                                                    className="retailer-area"
                                                    key={i}
                                                >
                                                    <span
                                                        id="add_retailer"
                                                        onClick={() =>
                                                            assignedSingleRetailer(
                                                                e,
                                                                i
                                                            )
                                                        }
                                                    >
                                                        <img
                                                            src={addRetaielr}
                                                        />
                                                    </span>
                                                    <div className="retailer-item">
                                                        <div className="ri-photo">
                                                            <img src="https://placeimg.com/200/200/nature" />
                                                        </div>
                                                        <div className="ri-detail">
                                                            <h3>{e.name}</h3>
                                                            <p>
                                                                Published to
                                                                Store Products:{' '}
                                                                <span>
                                                                    {
                                                                        e.productStore
                                                                    }
                                                                </span>
                                                            </p>
                                                            <p>
                                                                Products Sales:{' '}
                                                                <span>
                                                                    {
                                                                        e.productSales
                                                                    }
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="retailer-category">
                                                        <label>Category:</label>
                                                        <p className="chips-area">
                                                            <label>
                                                                {e.category}
                                                            </label>
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>

                                <div className="assigned-area">
                                    <div className="av-title">
                                        {assignedRetailer.length &&
                                            assignedRetailer.length}{' '}
                                        Retailer Assigned
                                    </div>
                                    <a
                                        onClick={removeAllRetailer}
                                        href="#"
                                        className={`add-item-label add-category ${
                                            assignedRetailer.length &&
                                            assignedRetailer.length > 0
                                                ? ''
                                                : 'light-pill'
                                        }`}
                                    >
                                        <span>-</span> Remove All
                                    </a>
                                    <div className="retailer-box">
                                        {assignedRetailer.length > 0 &&
                                            assignedRetailer.map((e, i) => (
                                                <div
                                                    className="retailer-area"
                                                    key={i}
                                                >
                                                    <span
                                                        id="add_retailer"
                                                        onClick={() =>
                                                            removeSingleRetailer(
                                                                e,
                                                                i
                                                            )
                                                        }
                                                    >
                                                        <img
                                                            src={remvoeRetaielr}
                                                        />
                                                    </span>
                                                    <div className="retailer-item">
                                                        <div className="ri-photo">
                                                            <img src="https://placeimg.com/200/200/nature" />
                                                        </div>
                                                        <div className="ri-detail">
                                                            <h3>{e.name}</h3>
                                                            <p>
                                                                Published to
                                                                Store Products:{' '}
                                                                <span>
                                                                    {
                                                                        e.productStore
                                                                    }
                                                                </span>
                                                            </p>
                                                            <p>
                                                                Products Sales:{' '}
                                                                <span>
                                                                    {
                                                                        e.productSales
                                                                    }
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="retailer-category">
                                                        <label>Category:</label>
                                                        <p className="chips-area">
                                                            <label>
                                                                {e.category}
                                                            </label>
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

RetailerPopup.propTypes = {
    handalPopup: PropTypes.func,
    assignedData: PropTypes.any,
};
