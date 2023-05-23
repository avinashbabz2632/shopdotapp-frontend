import React, {
    useCallback,
    useState,
    useEffect,
    useRef,
    useLayoutEffect,
} from 'react';
import '../Style/brand.style.scss';
import '../Style/brand.media.scss';
import '../Style/brand.dev.scss';
import BrandHeader from '../common/components/BrandHeader';
import RequestAccess from './RequestAccess';
// import requestAccessData from './utils';
import Connected from './Connected';
import closeBlackIcon from '../images/icons/close-icon.svg';
import ConnectedFilter from './Connected/connectedFilter';
import ArrowLeft from '../images/icons/icon-arrow--left.svg';
import useWindowSize from '../../../hooks/useWindowSize';

export default function Retailer() {
    const childRef = useRef();
    const windowSize = useWindowSize();
    const [height, setHeight] = useState(0);
    const [subTab, setSubTab] = useState(1);
    const [openSideFilter, setOpenSideFilter] = useState(true);
    const [openInviteRetailer, setOpenInviteretailer] = useState(false);
    const [openCloseFilter, setOpenCloseFilter] = useState(true);

    const handleOpenCloseFilter = () => {
        setOpenCloseFilter(!openCloseFilter);
    };
    const changeSubTab = useCallback(
        (key) => {
            if (key === 'connected-retailer') {
                setSubTab(1);
            } else {
                setSubTab(2);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [subTab]
        );
        
        useEffect(() => {
            if(window.location.pathname == "/brand/request-access"){
                setSubTab(2);
            } else {
                setSubTab(1);
            }
        }, [subTab]);

    useLayoutEffect(() => {
        function updateHeight() {
            const headerHeight =
                document.querySelector('.header')?.offsetHeight ?? 0;
            const productsHeadHeight =
                document.querySelector('.products_head')?.offsetHeight ?? 0;
            const paginationHeight =
                document.querySelector('.pagination')?.offsetHeight ?? 0;
            const productsBodyHeight =
                document.querySelector('.products_body')?.offsetHeight ?? 0;
            const productsBodyClientHeight =
                document.querySelector('.products_body')?.clientHeight ?? 0;
            const otherDivs =
                headerHeight +
                productsHeadHeight +
                paginationHeight +
                (productsBodyHeight - productsBodyClientHeight);
            setHeight(window.innerHeight - otherDivs - 50);
        }
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <div className={`'' ${subTab == 1 ? 'sidebar-hidden' : ''}`}>
            <div className="wrapper">
                <BrandHeader
                    tab={3}
                    subTabs={subTab}
                    changeSubTab={changeSubTab}
                />
                <main className="content mp-content">
                    <section
                        className={`section products mp-section ${
                            subTab == 1 ? 'products' : ''
                        }`}
                    >
                        {subTab == 2 && (
                            <RequestAccess
                                openInviteRetailer={openInviteRetailer}
                                setOpenInviteretailer={setOpenInviteretailer}
                                height={height}
                            />
                        )}
                        {subTab == 1 && (
                            <>
                                <aside
                                    className={`filters filter-retailer ${
                                        openCloseFilter ? '' : 'hidden'
                                    }`}
                                >
                                    <div className="filters_wrap">
                                        <div className="filters_block filters_block-head">
                                            <button
                                                className="filters_hide-and-show"
                                                onClick={() =>
                                                    handleOpenCloseFilter()
                                                }
                                            >
                                                <img
                                                    className="icon"
                                                    src={ArrowLeft}
                                                />
                                            </button>
                                            <button
                                                className={`filters-clear products_active-remove-all ${
                                                    openCloseFilter
                                                        ? ''
                                                        : 'hide'
                                                }`}
                                                onClick={() =>
                                                    childRef.current.handleClearFilter()
                                                }
                                            >
                                                Clear Filters
                                            </button>
                                        </div>
                                        <div className="filters_block filters_block-body">
                                            <div className="filter open filter-by-products">
                                                <div className="filter_body pt-3 pb-5">
                                                    <ConnectedFilter
                                                        ref={childRef}
                                                        openSideFilter={
                                                            openSideFilter
                                                        }
                                                        setOpenSideFilter={
                                                            setOpenSideFilter
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>

                                <Connected
                                    height={height}
                                    changeSubTab={changeSubTab}
                                />
                            </>
                        )}
                    </section>
                </main>
                {openInviteRetailer && (
                    <div className="popup popup-invite false active">
                        <div className="popup_wrapper">
                            <div className="popup_content">
                                <div className="popup-close">
                                    <img
                                        src={closeBlackIcon}
                                        onClick={() =>
                                            setOpenInviteretailer(
                                                !openInviteRetailer
                                            )
                                        }
                                    />
                                </div>

                                <form className="primary__form form form_retailers">
                                    <div className="form_retailers-left">
                                        <div className="form_field">
                                            <span>
                                                Add retailer email address
                                            </span>
                                            <input
                                                type="email"
                                                name="add-retailer-email"
                                                id="add-retailer-email"
                                                placeholder="Add retailer email address…"
                                            />
                                            <div className="form_field-help">
                                                <small>
                                                    Don’t worry, the brands
                                                    won’t see the other
                                                    recipients.
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form_retailers-right">
                                        <h3>Edit Message</h3>
                                        <div className="form_field">
                                            <div
                                                className="email-message-box"
                                                id="email-message-box"
                                                contentEditable="true"
                                            >
                                                Hi, it&apos;s Michelle Huie from
                                                Vim &amp; Vigr. I just signed up
                                                for <a href="#">ShopDot</a>, a
                                                brand-to-retail platform that
                                                integrates with my Shopify store
                                                to Distribute products with ease
                                                and streamline inventory and
                                                drop-shipping. <br />
                                                <br />
                                                I&apos;m interested in
                                                partnering with you through{' '}
                                                <a href="#">ShopDot</a>. To
                                                learn more about the benefits of
                                                selling on ShopDot,{' '}
                                                <a href="#">click here</a>.{' '}
                                                <br />
                                                <br />
                                                Here&apos;s my brand profile:{' '}
                                                <a href="#">
                                                    wwww.shopdot.com/brand/profile
                                                </a>
                                            </div>
                                        </div>
                                        <div className="form_field form_field-buttons">
                                            <button
                                                type="submit"
                                                className="button"
                                                disabled=""
                                            >
                                                Invite Retailer
                                            </button>
                                        </div>
                                        <div className="form_field form_field-help">
                                            <div className="later">
                                                <a
                                                    href="#"
                                                    className="popup-close"
                                                    onClick={() =>
                                                        setOpenInviteretailer(
                                                            !openInviteRetailer
                                                        )
                                                    }
                                                >
                                                    Invite Retailers Later
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}