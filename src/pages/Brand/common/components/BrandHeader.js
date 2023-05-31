import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import Logo from '../../../../assets/images/icons/logo.svg';
import SearchClear from '../../images/icons/icon-search.svg';
import ArrowDown from '../../images/icons/icon-chevron--down.svg';
import IconMail from '../../images/icons/icon-mail.svg';
import IconNotification from '../../images/icons/icon-notification.svg';
import InviteRetailer from './InviteRetailerHeaderModal';
import '../../Style/brand.style.scss';
import '../../Style/brand.media.scss';
import '../../Style/brand.dev.scss';
import { createBrowserHistory } from 'history';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserDetails } from '../../../../redux/user/userSelector';
import { AuthApiService } from '../../../../services/apis/authApis';
import { clearAuthLogout, logOut } from '../../../../redux/auth/authSlice';
import { clearUserLogout } from '../../../../redux/user/userSlice';
import { clearPaidLogout } from '../../../../redux/Brand/GettingPaid2/gettingPaidSlice';
import { clearOrderLogout } from '../../../../redux/Brand/Orders/orderSlice';
import { clearProductLogout } from '../../../../redux/Brand/Products/productSlice';
import { clearProfileLogout } from '../../../../redux/Brand/Profile/brandProfileSlice';
import { clearSecurityLogout } from '../../../../redux/Brand/Security/securitySlice';
import { clearShippingLogout } from '../../../../redux/Brand/Shipping/shippingSlice';
import { clearPreferenceLogout } from '../../../../redux/Brand/Preference/preferenceSlice';

function BrandHeader(props) {
  const location = useLocation();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState(1);
  const [subTab, setSubTab] = useState(null);

  const history = createBrowserHistory();
  const useDetails = useSelector(selectUserDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    const fromData = {
      user_id: useDetails.id,
    };

    const res = await AuthApiService.signOut({ fromData });

    if (res) {
      dispatch(logOut());
      dispatch(clearAuthLogout());
      dispatch(clearUserLogout());
      dispatch(clearPaidLogout());
      dispatch(clearOrderLogout());
      dispatch(clearProductLogout());
      dispatch(clearProfileLogout());
      dispatch(clearSecurityLogout());
      dispatch(clearShippingLogout());
      dispatch(clearPreferenceLogout());
      dispatch({ type: 'LOGOUT' });
      history.replace('/login');
      navigate('/login');
    }

    // toast.error('Seomething went wrong while signing out!');
  };

  useEffect(() => {
    setTab(props.tab);
    setSubTab(props.subTabs);
  }, []);

  const opencloseRetailerModal = useCallback(() => {
    setIsOpen(!modalIsOpen);
  }, [modalIsOpen]);
  console.log(props);
  return (
    <>
      <header className="header_main mp-header">
        <div className="header_block header_block-top mp-header_block-top">
          <div className="header_container">
            <div className="header_logo">
              <NavLink to="/" className="logo">
                <picture>
                  <img src={Logo} alt="logo" />
                </picture>
              </NavLink>
            </div>

            <div className="header_menu-wrap">
              <input type="checkbox" name="" id="" className="" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <ul className="header_menu menu">
                <li className="menu_item">
                  {location?.pathname === '/brand-onboarding' ? (
                    <NavLink
                      to="/brand-onboarding"
                      className={({ isActive }) =>
                        `${isActive ? 'active' : ''} menu_link`
                      }
                    >
                      Getting Started
                    </NavLink>
                  ) : (
                    <NavLink
                      to="/brand/setting/"
                      className={({ isActive }) =>
                        `${isActive ? 'active' : ''} menu_link`
                      }
                    >
                      Dashboard
                    </NavLink>
                  )}
                </li>
                <li className="menu_item">
                  <NavLink
                    to="/brand/products"
                    className={({ isActive }) =>
                      `${isActive ? 'active' : ''} menu_link`
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li className="menu_item">
                  <div className="dropdown">
                    <div className="dropdown_header">
                      <div className="dropdown_header-chevron">
                        <NavLink
                          to="/brand/connected-retailer"
                          className={({ isActive }) =>
                            `${isActive ? 'active' : ''} menu_link`
                          }
                        >
                          Retailers
                          {/* <div className="dropdown_header-chevron">
                            <span className="icon">
                              <img src={ArrowDown} alt="" />
                            </span>
                          </div> */}
                        </NavLink>
                      </div>
                    </div>
                    <div className="dropdown_body">
                      <div className="dropdown_inner styled_drop_down">
                        <ul>
                          <li
                            className={`sublink ${subTab == 1 ? '' : 'link'}`}
                            onClick={() => props.changeSubTab(1)}
                          >
                            <Link to="/brand/connected-retailer">
                              Connected Retailers
                            </Link>
                          </li>
                          <li
                            className={`sublink ${
                              subTab == 2 ? 'active' : 'link'
                            }`}
                            onClick={() => props.changeSubTab(2)}
                          >
                            <Link to="/brand/request-access">
                              Requests for Access
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu_item">
                  <NavLink
                    to="/brand/orders"
                    className={({ isActive }) =>
                      `${isActive ? 'active' : ''} menu_link`
                    }
                  >
                    Orders
                  </NavLink>
                </li>
                <li className="menu_item">
                  <div className="dropdown">
                    <div className="dropdown_header">
                      <div className="dropdown_header-chevron">
                        <NavLink
                          to="/brand/reports/payout"
                          className={({ isActive }) =>
                            `${isActive ? 'active' : ''} menu_link`
                          }
                        >
                          Reports
                          {/* <div className="dropdown_header-chevron">
                            <span className="icon">
                              <img src={ArrowDown} alt="" />
                            </span>
                          </div> */}
                        </NavLink>
                      </div>
                    </div>
                    <div className="dropdown_body">
                      <div className="dropdown_inner styled_drop_down">
                        <ul>
                          <li>
                            <Link to="/brand/reports/payout">Payout</Link>
                          </li>
                          <li>
                            <Link to="">Account</Link>
                          </li>
                          <li>
                            <Link to="">Orders</Link>
                          </li>
                          <li>
                            <Link to="">Retailers</Link>
                          </li>
                          <li>
                            <Link to="">Products</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="header_search search">
              <form className="search_form">
                <div className="search_form-input">
                  <input type="text" placeholder="Search…" />
                </div>
                <button type="cancel" className="search_form-button">
                  <span className="icon">
                    <img src={SearchClear} alt=""></img>
                  </span>
                </button>
                <button type="submit"></button>
                <span className="icon">
                  <img src={SearchClear} alt=""></img>
                </span>
              </form>
            </div>

            <div className="header_actions">
              <div className="header_usermenu">
                <div className="dropdown">
                  <div className="dropdown_header">
                    <div className="dropdown_header-text">
                      Hi,{' '}
                      <span className="username">
                        {' '}
                        {useDetails?.first_name
                          ? `${useDetails?.first_name}`
                          : ''}
                      </span>
                    </div>

                    <div className="dropdown_header-chevron">
                      <span className="icon">
                        <img src={ArrowDown} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="dropdown_body">
                    <div className="dropdown_inner styled_drop_down">
                      <ul>
                        <li>
                          <Link to="/brand/setting">Settings</Link>
                        </li>
                        <li>
                          <Link to="/">Help Center</Link>
                        </li>
                        <li>
                          <a>
                            <span onClick={handleLogOut}>Sign out</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button className="header_action header_action-mails">
                <span className="icon">
                  <img src={IconMail} alt="" />
                </span>
                <div className="text visible">5</div>
              </button>
              <button className="header_action header_action-notifications">
                <div className="dropdown">
                  <div className="dropdown_header">
                    <span className="icon">
                      <img src={IconNotification} alt="" />
                    </span>
                  </div>
                  <div className="dropdown_body">
                    <div className="dropdown_inner styled_drop_down">
                      <ul>
                        <li>
                          <span>Summer Activities Chips for Kids</span> <br />
                          updated Dec.15, 2021, 07:56 PM
                        </li>
                        <li>
                          <span>Summer Activities Chips for Kids</span> <br />
                          updated Dec.15, 2021, 07:56 PM
                        </li>
                        <li>
                          <span>Summer Activities Chips for Kids</span> <br />
                          updated Dec.15, 2021, 07:56 PM
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text visible">1</div>
              </button>
              <div className="header_action header_action-invite">
                <button
                  className="button invite-retailer"
                  onClick={() => opencloseRetailerModal()}
                >
                  Invite Retailers
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="header_block header_block-bottom mp-header_block-bottom"></div>
      </header>
      <InviteRetailer
        modalIsOpen={modalIsOpen}
        opencloseRetailerModal={opencloseRetailerModal}
      />
      <Outlet />
    </>
  );
}

export default React.memo(BrandHeader);
BrandHeader.propTypes = {
  subTabs: PropTypes.number,
  changeSubTab: PropTypes.func,
  tab: PropTypes.any,
};
