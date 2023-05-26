import React, { useState, useEffect, useCallback } from 'react';
import RightIcon from '../../images/icons/icon-chevron--right.svg';
import LeftIcon from '../../images/icons/icon-chevron--left.svg';
import closeIcon from '../../../Brand/images/icons/icon-close.svg';
import downArrow from '../../images/icons/icon-chevron--down.svg';
import SideBar from './SideBar';
import info from '../../images/icons/icon-info-red.svg';
import searchIcon from '../../images/icons/icon-search.svg';
import clearIcon from '../../images/icons/icon-close.svg';
import useWindowSize from '../../../../hooks/useWindowSize';
import { AssignedProducts, UnassignedProducts } from '../../common/utils/utils';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import ConfirmationAssignModel from './ConfirmationAssignModel';
import ConfirmationUnAssignModel from './ConfirmationUnAssignModel';
import DataTable from 'react-data-table-component';
import { Checkbox } from 'antd';
import { selectProfileProductFilter } from '../../../../redux/Brand/RetailerProfile/retailerProfileSelector';
import { useDispatch, useSelector } from 'react-redux';
import NoDataComponent from './NoDataComponent';
import {
    productCatClear,
    productTagClear,
    resetToInitial,
} from '../../../../redux/Brand/RetailerProfile/retailerProfileSlice';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };

const columns = [
    {
        sortable: true,
        name: 'Product Name',
        cell: (row) => (
            <>
                <img
                    style={{
                        borderRadius: '5px',
                        height: '40px',
                        width: '40px',
                    }}
                    alt="image"
                    src={row.productUrl}
                />
                <a
                    className="my_list-product-title"
                    style={{ paddingLeft: '10px' }}
                >
                    {row.ProductName}
                </a>
            </>
        ),
        grow: 4,
    },
    {
        sortable: true,
        name: 'Category ',
        selector: (row) => row.Category,
    },
    {
        sortable: true,
        name: 'Tag ',
        selector: (row) => row.Tag,
        grow: 4,
    },
    {
        sortable: true,
        name: 'Stock ',
        selector: (row) => row.Stock,
    },
    {
        name: (
            <>
                <div className="title cstm-gap" data-tooltip-id="my-tooltip">
                    WSP <img className="icon-info infoIcon" src={info} />
                </div>
                <Tooltip
                    className="tooltip_text tt-right"
                    style={{ backgroundColor: '#354253' }}
                    id="my-tooltip"
                    content={
                        'WSP stands for Wholesale Price. This is the price that retailers pay brands.'
                    }
                />
            </>
        ),
        selector: (row) => <p className="text-bold">{row.WSP}</p>,
    },
];

function RetailerConfiguration({ profileData }) {
    const dispatch = useDispatch();
    const productFilter = useSelector(selectProfileProductFilter);
    const [tab, setTab] = useState('AssignedProducts');
    const [AssignedData, setAssignedData] = useState(AssignedProducts);
    const [AssignedClone, setAssignedClone] = useState(AssignedProducts);
    const [UnassignedData, setUnassignedData] = useState(UnassignedProducts);
    const [UnassignedClone, setUnassignedClone] = useState(UnassignedProducts);
    const [selectedRow, setSelectedRow] = useState([]);
    const [toggledClearRows, setToggleClearRows] = React.useState(false);
    const [isAssignModalOpen, setIsAssignModelOpen] = useState(false);
    const [isUnAssignModelOpen, setUnAssignModelOpen] = useState(false);
    const [productCatStus, setProductCatStus] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [Data, setData] = useState(AssignedProducts);
    const [newData, setNewData] = useState(UnassignedProducts);
    const [productFilterData, setProductFilterData] = useState([]);
    const [productFilterDataClone, setProductFilterClone] = useState([]);
    const [productTagStus, setProductTagStus] = useState([]);
    const [dynamicHeight, setDynamicHeight] = useState(0);
    const windowSize = useWindowSize();

    const customStyles = {
        rows: {
            style: {
                minHeight: '60px',
            },
            selectedHighlightStyle: {
                backgroundColor: 'rgba(115, 103, 240, 0.2)',
                color: 'black',
            },
        },
        headCells: {
            style: {
                fontWeight: 'bold',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px',
                paddingRight: '8px',
            },
        },
    };

    // Toggle the state so React Data Table changes to clearSelectedRows are triggered
    const handleClearRows = () => {
        setToggleClearRows(!toggledClearRows);
    };

    useEffect(() => {
        setProductCatStus(productFilter.productCatFilter);
        setProductTagStus(productFilter.productTagFilter);
        const productArray = ['productCatFilter', 'productTagFilter'];
        const productCatData = [];
        const productTagData = [];
        if (tab === 'AssignedProducts') {
            productArray.forEach((e) => {
                if (e === 'productCatFilter') {
                    productFilter.productCatFilter?.map((ele) => {
                        Data.map((e) => {
                            e.Category === ele && productCatData.push(e);
                        });
                        setProductFilterData(productCatData);
                        setProductFilterClone(productCatData);
                    });
                }
                if (e === 'productTagFilter') {
                    productFilter.productTagFilter?.map((ele) => {
                        (productCatData.length === 0
                            ? Data
                            : productCatData
                        ).map((e) => {
                            e?.Tag?.includes(ele) && productTagData?.push(e);
                        });
                        setProductFilterData(productTagData);
                        setProductFilterClone(productTagData);
                    });
                }
            });
        } else {
            productArray.forEach((e) => {
                if (e === 'productCatFilter') {
                    productFilter.productCatFilter?.map((ele) => {
                        newData.map((e) => {
                            e.Category === ele && productCatData.push(e);
                        });
                        setProductFilterData(productCatData);
                        setProductFilterClone(productCatData);
                    });
                }
                if (e === 'productTagFilter') {
                    productFilter.productTagFilter?.map((ele) => {
                        (productCatData.length === 0
                            ? newData
                            : productCatData
                        ).map((e) => {
                            e?.Tag?.includes(ele) && productTagData?.push(e);
                        });
                        setProductFilterData(productTagData);
                        setProductFilterClone(productTagData);
                    });
                }
            });
        }
    }, [productFilter]);

    useEffect(() => {
        const calculateDynamicHeight = () => {
            const otherDivs =
                document.querySelector('.header')?.offsetHeight +
                document.querySelector('.products_head')?.offsetHeight +
                document.querySelector('.pagination')?.offsetHeight +
                (document.querySelector('.products_active-filter')
                    ?.offsetHeight ?? 0) +
                (document.querySelector('.tab_inner')?.offsetHeight -
                    document.querySelector('.tab_inner')?.clientHeight);
            setDynamicHeight(window?.outerHeight - otherDivs - 65);
        };

        calculateDynamicHeight();

        window.addEventListener('resize', calculateDynamicHeight);

        return () =>
            window.removeEventListener('resize', calculateDynamicHeight);
    }, []);

    const clearProductFilter = (e) => {
        if (e === 'productCat') {
            setProductCatStus([]);
            dispatch(productCatClear());
        } else if (e === 'productTag') {
            setProductTagStus([]);
            dispatch(productTagClear());
        }
    };

    const handalClearFilter = () => {
        setProductTagStus([]);
        setProductCatStus([]);
        dispatch(resetToInitial());
    };

    useEffect(() => {
        handleClearRows();
        setSelectedRow([]);
        handalClearFilter();
    }, [tab]);

    const handleChangTab = (tabName) => {
        setTab(tabName);
    };
    const handleChange = (state) => {
        setSelectedRow(state);
    };

    const AssignedProductsSearch = (e) => {
        const searchQuery = e.target.value?.toLowerCase();
        if (searchQuery) {
            const searchWords = searchQuery.split(' ');
            const searchValue = AssignedClone.filter((ele) => {
                return searchWords.every((word) => {
                    return ele?.ProductName?.toLowerCase().includes(word);
                });
            });
            setAssignedData(searchValue);
            setSearchVal(searchQuery);
        } else {
            setAssignedData(AssignedClone);
            setSearchVal('');
        }
        if (searchQuery) {
            const searchWords = searchQuery.split(' ');
            const searchValue = productFilterDataClone.filter((ele) => {
                return searchWords.every((word) => {
                    return ele?.ProductName?.toLowerCase().includes(word);
                });
            });
            setProductFilterData(searchValue);
            setSearchVal(searchQuery);
        } else {
            setProductFilterData(productFilterDataClone);
            setSearchVal('');
        }
    };

    const UnassignedProductsSearch = (e) => {
        const searchQuery = e.target.value?.toLowerCase();
        if (searchQuery) {
            const searchWords = searchQuery.split(' ');
            const searchValue = UnassignedClone.filter((ele) => {
                return searchWords.every((word) => {
                    return ele?.ProductName?.toLowerCase().includes(word);
                });
            });
            setUnassignedData(searchValue);
            setSearchValue(searchQuery);
        } else {
            setUnassignedData(UnassignedClone);
            setSearchValue('');
        }
        if (searchQuery) {
            const searchWords = searchQuery.split(' ');
            const searchValue = productFilterDataClone.filter((ele) => {
                return searchWords.every((word) => {
                    return ele?.ProductName?.toLowerCase().includes(word);
                });
            });
            setProductFilterData(searchValue);
            setSearchValue(searchQuery);
        } else {
            setProductFilterData(productFilterDataClone);
            setSearchValue('');
        }
    };

    const opencloseConfirmationAssignModel = useCallback(() => {
        setIsAssignModelOpen(!isAssignModalOpen);
    }, [isAssignModalOpen]);

    const opencloseConfirmationUnAssignModel = useCallback(() => {
        setUnAssignModelOpen(!isUnAssignModelOpen);
    }, [isUnAssignModelOpen]);

    return (
        <>
            <div className="retail-config">
                <div className="brand-single_content">
                    <h2 className="rc-title">Retailer Configuration </h2>
                    <div className="sidebar-hidden">
                        <div className="brand-single_content-body">
                            <div className="brand-single_info">
                                <div className="brand-single_block p-5 pt-0">
                                    <h2 className="mb-2">Product Access</h2>
                                    <p className="rc-line">
                                        Please choose products you want the
                                        retailer to have access to. They will be
                                        able to list them and publish to store.
                                    </p>
                                    <div className="section products products--style-1 rc-filter">
                                        <SideBar />
                                        <div className="products_content">
                                            <div className="products_head products_head--style-1 p-0">
                                                <div className="products_head-content">
                                                    <div className="retailers-tab">
                                                        <div className="pc_tabs tabs">
                                                            <div className="tab_wrap">
                                                                <div className="pc_tabs-menu tab_menu">
                                                                    <button
                                                                        data-link="unassigned"
                                                                        className={`tab-link ${
                                                                            tab ===
                                                                            'UnassignedProducts'
                                                                                ? 'active'
                                                                                : ''
                                                                        }`}
                                                                        onClick={() =>
                                                                            handleChangTab(
                                                                                'UnassignedProducts'
                                                                            )
                                                                        }
                                                                    >
                                                                        Unassigned
                                                                        Products
                                                                    </button>
                                                                    <button
                                                                        data-link="assigned"
                                                                        className={`tab-link ${
                                                                            tab ===
                                                                            'AssignedProducts'
                                                                                ? 'active'
                                                                                : ''
                                                                        }`}
                                                                        onClick={() =>
                                                                            handleChangTab(
                                                                                'AssignedProducts'
                                                                            )
                                                                        }
                                                                    >
                                                                        Assigned
                                                                        Products
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            {tab ===
                                                            'AssignedProducts' ? (
                                                                <div className="pc_tabs-content tabs_body">
                                                                    <div
                                                                        className="tab active"
                                                                        data-target="assigned"
                                                                    >
                                                                        <div
                                                                            className="ml-auto-action"
                                                                            style={{
                                                                                top: '-53px',
                                                                                right: '0px',
                                                                            }}
                                                                        >
                                                                            <button
                                                                                className="button button button-red unassign-modal"
                                                                                onClick={() =>
                                                                                    opencloseConfirmationUnAssignModel()
                                                                                }
                                                                            >
                                                                                Unassign
                                                                            </button>
                                                                        </div>
                                                                        <div className="tab_inner">
                                                                            <div className="tab_inner-text">
                                                                                <div className="products_head-content">
                                                                                    {selectedRow?.selectedCount >
                                                                                        0 && (
                                                                                        <label className="fs-14">
                                                                                            You
                                                                                            have
                                                                                            selected{' '}
                                                                                            <span>
                                                                                                {
                                                                                                    selectedRow?.selectedCount
                                                                                                }
                                                                                            </span>{' '}
                                                                                            records
                                                                                        </label>
                                                                                    )}
                                                                                    <div className="products_head-search">
                                                                                        <div className="search_form">
                                                                                            <div className="search_form-input">
                                                                                                <input
                                                                                                    onChange={
                                                                                                        AssignedProductsSearch
                                                                                                    }
                                                                                                    value={
                                                                                                        searchVal
                                                                                                    }
                                                                                                    type="text"
                                                                                                    placeholder="Search product"
                                                                                                />
                                                                                            </div>{' '}
                                                                                            <div>
                                                                                                {searchVal?.length !==
                                                                                                0 ? (
                                                                                                    <>
                                                                                                        <div
                                                                                                            className="close_icon_search"
                                                                                                            onClick={() =>
                                                                                                                AssignedProductsSearch(
                                                                                                                    {
                                                                                                                        target: {
                                                                                                                            value: '',
                                                                                                                        },
                                                                                                                    }
                                                                                                                )
                                                                                                            }
                                                                                                        >
                                                                                                            <img
                                                                                                                className="img_close_icon"
                                                                                                                src={
                                                                                                                    closeIcon
                                                                                                                }
                                                                                                            />
                                                                                                        </div>
                                                                                                    </>
                                                                                                ) : (
                                                                                                    <img
                                                                                                        className="icon"
                                                                                                        src={
                                                                                                            searchIcon
                                                                                                        }
                                                                                                    />
                                                                                                )}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="align-filter-checkbox">
                                                                                    {productTagStus.length !==
                                                                                        0 && (
                                                                                        <>
                                                                                            <div className="products_active-filter">
                                                                                                <div className="txt">
                                                                                                    <b>
                                                                                                        Product
                                                                                                        Tag:{' '}
                                                                                                    </b>
                                                                                                    {productTagStus.join(
                                                                                                        ', '
                                                                                                    )}
                                                                                                </div>
                                                                                                <button
                                                                                                    className="products_active-remove"
                                                                                                    onClick={() =>
                                                                                                        clearProductFilter(
                                                                                                            'productTag'
                                                                                                        )
                                                                                                    }
                                                                                                >
                                                                                                    <img
                                                                                                        className="icon"
                                                                                                        src={
                                                                                                            closeIcon
                                                                                                        }
                                                                                                    />
                                                                                                </button>
                                                                                            </div>
                                                                                        </>
                                                                                    )}
                                                                                    {productCatStus.length !==
                                                                                        0 && (
                                                                                        <>
                                                                                            <div className="products_active-filter">
                                                                                                <div className="txt">
                                                                                                    <b>
                                                                                                        Product
                                                                                                        Category:
                                                                                                    </b>{' '}
                                                                                                    {productCatStus.join(
                                                                                                        ', '
                                                                                                    )}
                                                                                                </div>
                                                                                                <button className="products_active-remove">
                                                                                                    <div className="icon">
                                                                                                        <span
                                                                                                            onClick={() =>
                                                                                                                clearProductFilter(
                                                                                                                    'productCat'
                                                                                                                )
                                                                                                            }
                                                                                                        >
                                                                                                            <img
                                                                                                                src={
                                                                                                                    closeIcon
                                                                                                                }
                                                                                                                alt=""
                                                                                                                style={{
                                                                                                                    marginBottom:
                                                                                                                        '8px',
                                                                                                                }}
                                                                                                            />
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </button>
                                                                                            </div>
                                                                                        </>
                                                                                    )}
                                                                                    {(!isEmpty(
                                                                                        productCatStus
                                                                                    ) ||
                                                                                        !isEmpty(
                                                                                            productTagStus
                                                                                        )) && (
                                                                                        <button
                                                                                            className="products_active-remove-all"
                                                                                            onClick={() =>
                                                                                                handalClearFilter()
                                                                                            }
                                                                                        >
                                                                                            Clear
                                                                                            Filters
                                                                                        </button>
                                                                                    )}
                                                                                </div>
                                                                                <div
                                                                                    className="content_area overflow-auto retailer-table mt-4 dynamic_height bbr-none"
                                                                                    style={{
                                                                                        height: dynamicHeight,
                                                                                    }}
                                                                                >
                                                                                    <DataTable
                                                                                        columns={
                                                                                            columns
                                                                                        }
                                                                                        data={
                                                                                            productCatStus.length !==
                                                                                                0 ||
                                                                                            productTagStus.length !==
                                                                                                0
                                                                                                ? productFilterData
                                                                                                : AssignedData
                                                                                        }
                                                                                        selectableRowsComponent={
                                                                                            Checkbox
                                                                                        }
                                                                                        selectableRowsComponentProps={
                                                                                            selectProps
                                                                                        }
                                                                                        selectableRows
                                                                                        onSelectedRowsChange={
                                                                                            handleChange
                                                                                        }
                                                                                        customStyles={
                                                                                            customStyles
                                                                                        }
                                                                                        clearSelectedRows={
                                                                                            toggledClearRows
                                                                                        }
                                                                                        highlightOnHover
                                                                                        fixedHeader
                                                                                        noDataComponent={
                                                                                            <NoDataComponent />
                                                                                        }
                                                                                        sortIcon={
                                                                                            <img
                                                                                                className="ms-1 icon-sort"
                                                                                                src={
                                                                                                    downArrow
                                                                                                }
                                                                                                alt="sort"
                                                                                            />
                                                                                        }
                                                                                        responsive
                                                                                        persistTableHead
                                                                                    />
                                                                                </div>
                                                                                <div className="pagination_wrap mt-0 sticky-pagination">
                                                                                    <div className="pagination">
                                                                                        <div className="pagination_per">
                                                                                            <select
                                                                                                name="per"
                                                                                                id="per"
                                                                                            >
                                                                                                <option value="10">
                                                                                                    10
                                                                                                </option>
                                                                                                <option
                                                                                                    value="20"
                                                                                                    selected=""
                                                                                                >
                                                                                                    20
                                                                                                </option>
                                                                                                <option value="50">
                                                                                                    50
                                                                                                </option>
                                                                                                <option value="100">
                                                                                                    100
                                                                                                </option>
                                                                                            </select>
                                                                                            <div className="pagination-title">
                                                                                                items
                                                                                                per
                                                                                                page
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="pagination_nav">
                                                                                            <button className="pagination-arrow pagination-arrow-prev">
                                                                                                <div className="icon">
                                                                                                    <img
                                                                                                        className="icon"
                                                                                                        src={
                                                                                                            LeftIcon
                                                                                                        }
                                                                                                    />
                                                                                                </div>
                                                                                            </button>
                                                                                            <div className="pagination-current">
                                                                                                <input
                                                                                                    type="text"
                                                                                                    value="1"
                                                                                                />
                                                                                            </div>
                                                                                            <button className="pagination-arrow pagination-arrow-next">
                                                                                                <div className="icon">
                                                                                                    <img
                                                                                                        style={{
                                                                                                            height: '12px',
                                                                                                        }}
                                                                                                        src={
                                                                                                            RightIcon
                                                                                                        }
                                                                                                    />
                                                                                                </div>
                                                                                            </button>
                                                                                            <div className="pagination-title">
                                                                                                of
                                                                                                10
                                                                                                pages
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div className="pc_tabs-content tabs_body">
                                                                    <div
                                                                        className="tab active"
                                                                        data-target="unassigned"
                                                                    >
                                                                        <div
                                                                            className="ml-auto-action"
                                                                            style={{
                                                                                top: '-53px',
                                                                                right: '0px',
                                                                            }}
                                                                        >
                                                                            <button
                                                                                className="button button button-blue assign-modal"
                                                                                onClick={() =>
                                                                                    opencloseConfirmationAssignModel()
                                                                                }
                                                                            >
                                                                                Assign
                                                                            </button>
                                                                        </div>
                                                                        <div className="tab_inner">
                                                                            <div className="tab_inner-text">
                                                                                <div className="products_head-content">
                                                                                    {selectedRow?.selectedCount >
                                                                                        0 && (
                                                                                        <label className="fs-14">
                                                                                            You
                                                                                            have
                                                                                            selected{' '}
                                                                                            <span>
                                                                                                {
                                                                                                    selectedRow?.selectedCount
                                                                                                }
                                                                                            </span>{' '}
                                                                                            records
                                                                                        </label>
                                                                                    )}
                                                                                    <div className="products_head-search">
                                                                                        <div className="search_form">
                                                                                            <div className="search_form-input">
                                                                                                <input
                                                                                                    type="text"
                                                                                                    placeholder="Search product"
                                                                                                    value={
                                                                                                        searchValue
                                                                                                    }
                                                                                                    onChange={
                                                                                                        UnassignedProductsSearch
                                                                                                    }
                                                                                                />
                                                                                            </div>
                                                                                            {searchValue?.length !==
                                                                                            0 ? (
                                                                                                <>
                                                                                                    <div
                                                                                                        className="close_icon_search"
                                                                                                        onClick={() =>
                                                                                                            UnassignedProductsSearch(
                                                                                                                {
                                                                                                                    target: {
                                                                                                                        value: '',
                                                                                                                    },
                                                                                                                }
                                                                                                            )
                                                                                                        }
                                                                                                    >
                                                                                                        <img
                                                                                                            className="img_close_icon"
                                                                                                            src={
                                                                                                                closeIcon
                                                                                                            }
                                                                                                        />
                                                                                                    </div>
                                                                                                </>
                                                                                            ) : (
                                                                                                <img
                                                                                                    className="icon"
                                                                                                    src={
                                                                                                        searchIcon
                                                                                                    }
                                                                                                />
                                                                                            )}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="align-filter-checkbox">
                                                                                    {productTagStus.length !==
                                                                                        0 && (
                                                                                        <>
                                                                                            <div className="products_active-filter">
                                                                                                <div className="txt">
                                                                                                    <b>
                                                                                                        Product
                                                                                                        Tag:{' '}
                                                                                                    </b>
                                                                                                    {productTagStus.join(
                                                                                                        ', '
                                                                                                    )}
                                                                                                </div>
                                                                                                <button
                                                                                                    className="products_active-remove"
                                                                                                    onClick={() =>
                                                                                                        clearProductFilter(
                                                                                                            'productTag'
                                                                                                        )
                                                                                                    }
                                                                                                >
                                                                                                    <img
                                                                                                        className="icon"
                                                                                                        src={
                                                                                                            closeIcon
                                                                                                        }
                                                                                                    />
                                                                                                </button>
                                                                                            </div>
                                                                                        </>
                                                                                    )}
                                                                                    {productCatStus.length !==
                                                                                        0 && (
                                                                                        <>
                                                                                            <div className="products_active-filter">
                                                                                                <div className="txt">
                                                                                                    <b>
                                                                                                        Product
                                                                                                        Category:
                                                                                                    </b>{' '}
                                                                                                    {productCatStus.join(
                                                                                                        ', '
                                                                                                    )}
                                                                                                </div>
                                                                                                <button className="products_active-remove">
                                                                                                    <div className="icon">
                                                                                                        <span
                                                                                                            onClick={() =>
                                                                                                                clearProductFilter(
                                                                                                                    'productCat'
                                                                                                                )
                                                                                                            }
                                                                                                        >
                                                                                                            <img
                                                                                                                src={
                                                                                                                    closeIcon
                                                                                                                }
                                                                                                                alt=""
                                                                                                                style={{
                                                                                                                    marginBottom:
                                                                                                                        '8px',
                                                                                                                }}
                                                                                                            />
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </button>
                                                                                            </div>
                                                                                        </>
                                                                                    )}
                                                                                    {(!isEmpty(
                                                                                        productCatStus
                                                                                    ) ||
                                                                                        !isEmpty(
                                                                                            productTagStus
                                                                                        )) && (
                                                                                        <button
                                                                                            className="products_active-remove-all"
                                                                                            onClick={() =>
                                                                                                handalClearFilter()
                                                                                            }
                                                                                        >
                                                                                            Clear
                                                                                            Filters
                                                                                        </button>
                                                                                    )}
                                                                                </div>
                                                                                <div
                                                                                    className="content_area overflow-auto retailer-table mt-4 dynamic_height bbr-none"
                                                                                    style={{
                                                                                        height: dynamicHeight,
                                                                                    }}
                                                                                >
                                                                                    <DataTable
                                                                                        columns={
                                                                                            columns
                                                                                        }
                                                                                        noDataComponent={
                                                                                            <NoDataComponent />
                                                                                        }
                                                                                        sortIcon={
                                                                                            <img
                                                                                                className="ms-1 icon-sort"
                                                                                                src={
                                                                                                    downArrow
                                                                                                }
                                                                                                alt="sort"
                                                                                            />
                                                                                        }
                                                                                        data={
                                                                                            productCatStus.length !==
                                                                                                0 ||
                                                                                            productTagStus.length !==
                                                                                                0
                                                                                                ? productFilterData
                                                                                                : UnassignedData
                                                                                        }
                                                                                        selectableRowsComponent={
                                                                                            Checkbox
                                                                                        }
                                                                                        selectableRowsComponentProps={
                                                                                            selectProps
                                                                                        }
                                                                                        selectableRows
                                                                                        onSelectedRowsChange={
                                                                                            handleChange
                                                                                        }
                                                                                        customStyles={
                                                                                            customStyles
                                                                                        }
                                                                                        highlightOnHover
                                                                                        fixedHeader
                                                                                        responsive
                                                                                        persistTableHead
                                                                                        clearSelectedRows={
                                                                                            toggledClearRows
                                                                                        }
                                                                                    />
                                                                                </div>
                                                                                <div className="pagination_wrap mt-0 sticky-pagination">
                                                                                    <div className="pagination">
                                                                                        <div className="pagination_per">
                                                                                            <select
                                                                                                name="per"
                                                                                                id="per"
                                                                                            >
                                                                                                <option value="10">
                                                                                                    10
                                                                                                </option>
                                                                                                <option
                                                                                                    value="20"
                                                                                                    selected=""
                                                                                                >
                                                                                                    20
                                                                                                </option>
                                                                                                <option value="50">
                                                                                                    50
                                                                                                </option>
                                                                                                <option value="100">
                                                                                                    100
                                                                                                </option>
                                                                                            </select>
                                                                                            <div className="pagination-title">
                                                                                                items
                                                                                                per
                                                                                                page
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="pagination_nav">
                                                                                            <button className="pagination-arrow pagination-arrow-prev">
                                                                                                <div className="icon">
                                                                                                    <img
                                                                                                        className="icon"
                                                                                                        src={
                                                                                                            LeftIcon
                                                                                                        }
                                                                                                    />
                                                                                                </div>
                                                                                            </button>
                                                                                            <div className="pagination-current">
                                                                                                <input
                                                                                                    type="text"
                                                                                                    value="1"
                                                                                                />
                                                                                            </div>
                                                                                            <button className="pagination-arrow pagination-arrow-next">
                                                                                                <div className="icon">
                                                                                                    <img
                                                                                                        style={{
                                                                                                            height: '12px',
                                                                                                        }}
                                                                                                        src={
                                                                                                            RightIcon
                                                                                                        }
                                                                                                    />
                                                                                                </div>
                                                                                            </button>
                                                                                            <div className="pagination-title">
                                                                                                of
                                                                                                10
                                                                                                pages
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmationAssignModel
                selectedRow={selectedRow}
                profileData={profileData}
                isModalOpen={isAssignModalOpen}
                handleOpenClose={opencloseConfirmationAssignModel}
            />
            <ConfirmationUnAssignModel
                selectedRow={selectedRow}
                profileData={profileData}
                isModalOpen={isUnAssignModelOpen}
                handleOpenClose={opencloseConfirmationUnAssignModel}
            />
        </>
    );
}

RetailerConfiguration.propTypes = {
    profileData: PropTypes.any,
};

export default RetailerConfiguration;
