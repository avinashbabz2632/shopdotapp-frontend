import React from 'react';
import Logo from '../../assets/images/icons/logo.svg';
import SearchClear from '../../assets/images/icons/icon-search.svg';
import '../../pages/Brand/Style/brand.style.scss';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import ArrowDown from '../../assets/images/sprite.svg';
import IconMarket from '../../assets/images/icons/icon-retailers.svg';
import IconMail from '../../assets/images/icons/icon-mail.svg';
import IconNotification from '../../assets/images/icons/icon-notification.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserDetails } from '../../redux/user/userSelector';
import { createBrowserHistory } from 'history';
import { AuthApiService } from '../../services/apis/authApis';
import { logOut } from '../../redux/auth/authSlice';
import { toast } from 'react-toastify';

export default function BrandHeader() {
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
      history.replace('/');
      navigate('/');
      return;
    }

    toast.error('Seomething went wrong while signing out!');
  };

  return (
    <>
      <header className="header mp-header">
        <div
          className="header_block header_block-top mp-header_block-top"
          style={{ width: '100%' }}
        >
          <div className="header_container">
            <div className="header_logo">
              <a href="/brand-onboarding" className="logo">
                <picture>
                  <img style={{ width: '100%' }} src={Logo} alt="" />
                </picture>
              </a>
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
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? 'active menu_link' : 'link menu_link'
                    }
                    to="/brand-onboarding"
                  >
                    Getting Started
                  </NavLink>
                </li>
                <li className="menu_item">
                  <NavLink  to="/brand/products" className="menu_link">
                    Products
                  </NavLink>
                </li>
                <li className="menu_item">
                  <div className="dropdown">
                    <div className="dropdown_header" style={{ width: '110px' }}>
                      <div className="dropdown_header-chevron">
                        <a href="#" className="menu_link">
                          Retailers
                          <div className="dropdown_header-chevron">
                            <span className="icon">
                              <img src={ArrowDown} alt="" />
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="dropdown_body">
                      <div className="dropdown_inner">
                        <ul>
                          <li>
                            <a href="#">Connected Retailers</a>
                          </li>
                          <li>
                            <a href="#">Requests for Access</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="menu_item">
                  <a href="#" className="menu_link">
                    Orders
                  </a>
                </li>
              </ul>
            </div>

            <div className="header_search search">
              <form action="#" className="search_form">
                <div className="search_form-input">
                  <input type="text" placeholder="Search…" />
                </div>
                <button type="cancel" className="search_form-button">
                  <img src={SearchClear} alt=""></img>
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
                        {useDetails?.first_name
                          ? `${useDetails?.first_name}`
                          : ''}
                      </span>
                    </div>
                    <div className="dropdown_header-icon">
                      <span className="icon">
                        <img src={IconMarket} alt="" />
                      </span>
                    </div>
                    <div className="dropdown_header-chevron">
                      <span className="icon">
                        <img src={ArrowDown} alt="" />
                      </span>
                    </div>
                  </div>
                  <div className="dropdown_body">
                    <div className="dropdown_inner">
                      <ul>
                        <li>
                          <a href="#">Settings</a>
                        </li>
                        <li>
                          <a href="#">Help Center</a>
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
                    <div className="dropdown_inner">
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
                <button className="button invite-retailer">
                  Invite Retailers
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="header_block header_block-bottom mp-header_block-bottom"></div>
      </header>
      <Outlet />
    </>
  );
}
