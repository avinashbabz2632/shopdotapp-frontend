import React, { useCallback, useState } from 'react';
import Logo from '../../../../assets/images/icons/logo.svg';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import ArrowDown from '../../images/icons/icon-chevron--down.svg';
import InviteBrandModel from './InviteBrandModel';
import '../../Style/retail.style.scss';
import '../../Style/retail.media.scss';
import '../../Style/retail.dev.scss';
import { useSelector } from 'react-redux';
import { selectUserDetails } from '../../../../redux/user/userSelector';

function RetailerHeader() {
  const location = useLocation();
  const [modalIsOpen, setIsOpen] = useState(false);
  const useDetails = useSelector(selectUserDetails);

  const opencloseBrandModal = useCallback(() => {
    setIsOpen(!modalIsOpen);
  }, [modalIsOpen]);

  return (
    <>
      <header className="header_main mp-header">
        <div className="header_block header_block-top mp-header_block-top">
          <div className="header_container">
            <div className="h-left">
              <div className="header_logo">
                <NavLink to="/" className="logo">
                  <picture>
                    <img src={Logo} alt="logo" />
                  </picture>
                </NavLink>
              </div>
              <div className="header_menu-wrap">
                <ul className="header_menu menu">
                  <li className="menu_item">
                    {location?.pathname === '/retailer-onboarding' ? (
                      <NavLink
                        to="/retailer-onboarding"
                        className={({ isActive }) =>
                          `${isActive ? 'active' : ''} menu_link`
                        }
                      >
                        Getting Started
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/retailer/dashboard"
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
                      to="/retailer/brands"
                      className={({ isActive }) =>
                        `${isActive ? 'active' : ''} menu_link`
                      }
                    >
                      Brands
                    </NavLink>
                  </li>
                  <li className="menu_item">
                    <NavLink
                      to="/retailer/products"
                      className={({ isActive }) =>
                        `${isActive ? 'active' : ''} menu_link`
                      }
                    >
                      Products
                    </NavLink>
                  </li>
                  <li className="menu_item">
                    <NavLink
                      to="/retailer/orders"
                      className={({ isActive }) =>
                        `${isActive ? 'active' : ''} menu_link`
                      }
                    >
                      Orders
                    </NavLink>
                  </li>{' '}
                  <li className="menu_item">
                    <div className="dropdown">
                      <div className="dropdown_header">
                        <div className="dropdown_header-chevron">
                          <NavLink
                            to="/retailer/reports/transaction"
                            className="menu_link"
                          >
                            Reports
                            {/* <div className="dropdown_header-chevron">
                              <div className="icon">
                                <img src={ArrowDown} alt="Arrow" />
                              </div>
                            </div> */}
                          </NavLink>
                        </div>
                      </div>
                      <div className="dropdown_body">
                        <div className="dropdown_inner">
                          <ul>
                            <li>
                              <Link to="/retailer/reports/transaction">
                                Transactions
                              </Link>
                            </li>
                            <li>
                              <Link to="/retailer/reports/orders">Orders</Link>
                            </li>
                            <li>
                              <Link to="/retailer/reports/brands">Brands</Link>
                            </li>
                            <li>
                              <Link to="/retailer/reports/products">
                                Products
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
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
                      <div className="icon">
                        <img src={ArrowDown} alt="Arrow" />
                      </div>
                    </div>
                  </div>
                  <div className="dropdown_body">
                    <div className="dropdown_inner">
                      <ul>
                        <li>
                          <Link to="/retailer/setting">Settings</Link>
                        </li>
                        <li>
                          <Link to="/">Help Center</Link>
                        </li>
                        <li>
                          <Link to="/login">Sign out</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header_action header_action-invite">
                <button
                  className="button invite-brand"
                  onClick={() => opencloseBrandModal()}
                >
                  Invite Brands
                </button>
              </div>
            </div>
          </div>
        </div>
        {location?.pathname === '/retailer/brands' ||
        location?.pathname === '/retailer/products' ? (
          <>
            <div className="header_block header_block-bottom">
              <button className="header_submenu-scroll-button header_submenu-scroll-button-prev">
                <span className="icon">
                  <img src={ArrowDown} alt="" />
                </span>
              </button>
              <div className="header_submenu">
                <ul className="submenu">
                  <li
                    className="submenu_item with-child"
                    data-target="automotive"
                  >
                    <Link to="#" className="submenu_link">
                      Automotive
                      <div className="icon_wrap">
                        <span className="icon">
                          <img
                            className="marginBottom"
                            src={ArrowDown}
                            alt=""
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    className="submenu_item with-child"
                    data-target="baby-and-kids"
                  >
                    <Link to="#" className="submenu_link">
                      Baby &amp; Kids
                      <div className="icon_wrap">
                        <span className="icon">
                          <img
                            className="marginBottom"
                            src={ArrowDown}
                            alt=""
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    className="submenu_item with-child"
                    data-target="beauty-and-wellness"
                  >
                    <Link to="#" className="submenu_link">
                      Beauty &amp; Wellness
                      <div className="icon_wrap">
                        <span className="icon">
                          <img
                            className="marginBottom"
                            src={ArrowDown}
                            alt=""
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    className="submenu_item with-child"
                    data-target="electronics-and-gadgets"
                  >
                    <Link to="#" className="submenu_link">
                      Electronics &amp; Gadgets
                      <div className="icon_wrap">
                        <span className="icon">
                          <img
                            className="marginBottom"
                            src={ArrowDown}
                            alt=""
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    className="submenu_item with-child"
                    data-target="food-and-drinks"
                  >
                    <Link to="#" className="submenu_link">
                      Food &amp; Drinks
                      <div className="icon_wrap">
                        <span className="icon">
                          <img
                            className="marginBottom"
                            src={ArrowDown}
                            alt=""
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    className="submenu_item with-child"
                    data-target="home-decor"
                  >
                    <Link to="#" className="submenu_link">
                      Home Decor
                      <div className="icon_wrap">
                        <span className="icon">
                          <img
                            className="marginBottom"
                            src={ArrowDown}
                            alt=""
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="submenu_item with-child" data-target="jewelry">
                    <Link to="#" className="submenu_link">
                      Jewelry
                      <div className="icon_wrap">
                        <span className="icon">
                          <img
                            className="marginBottom"
                            src={ArrowDown}
                            alt=""
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="submenu_item with-child" data-target="men">
                    <Link to="#" className="submenu_link">
                      Men
                      <div className="icon_wrap">
                        <span className="icon">
                          <img
                            className="marginBottom"
                            src={ArrowDown}
                            alt=""
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    className="submenu_item with-child"
                    data-target="music-and-instruments"
                  >
                    <Link to="#" className="submenu_link">
                      Music &amp; Instruments
                      <div className="icon_wrap">
                        <span className="icon">
                          <img
                            className="marginBottom"
                            src={ArrowDown}
                            alt=""
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    className="submenu_item with-child"
                    data-target="paper-and-novelty"
                  >
                    <Link to="#" className="submenu_link">
                      Paper &amp; Novelty
                      <div className="icon_wrap">
                        <span className="icon">
                          <img
                            className="marginBottom"
                            src={ArrowDown}
                            alt=""
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="submenu_item with-child" data-target="pets">
                    <Link to="#" className="submenu_link">
                      Pets
                      <div className="icon_wrap">
                        <span className="icon">
                          <img
                            className="marginBottom"
                            src={ArrowDown}
                            alt=""
                          />
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <button className="header_submenu-scroll-button header_submenu-scroll-button-next">
                <span className="icon">
                  <img className="marginBottom" src={ArrowDown} alt="" />
                </span>
              </button>
            </div>
            <div className="header_submenu-content">
              <div className="header_submenu-content-item" id="baby-and-kids">
                <div className="header_submenu-category-wrap">
                  <div className="header_submenu-category-title">
                    Bath &amp; Safety (7)
                  </div>
                  <ul className="header_submenu-category">
                    <li>
                      <Link to="#">Air Quality</Link>
                    </li>
                    <li>
                      <Link to="#">Baby Monitors</Link>
                    </li>
                    <li>
                      <Link to="#">Bath &amp; Potty</Link>
                    </li>
                    <li>
                      <Link to="#">Body &amp; Haircare</Link>
                    </li>
                    <li>
                      <Link to="#">Dental Care</Link>
                    </li>
                    <li>
                      <Link to="#">First Aid</Link>
                    </li>
                    <li>
                      <Link to="#">Towels &amp; Washclothes</Link>
                    </li>
                  </ul>
                </div>
                <div className="header_submenu-category-wrap">
                  <div className="header_submenu-category-title">
                    Baby Apparel (10)
                  </div>
                  <ul className="header_submenu-category">
                    <li>
                      <Link to="#">Accessories</Link>
                    </li>
                    <li>
                      <Link to="#">Body Suits &amp; Footies</Link>
                    </li>
                    <li>
                      <Link to="#">Bottoms</Link>
                    </li>
                    <li>
                      <Link to="#">Dresses &amp; Rompers</Link>
                    </li>
                    <li>
                      <Link to="#">Sleep &amp; Swaddles</Link>
                    </li>
                    <li>
                      <Link to="#">Socks &amp; Underwear</Link>
                    </li>
                    <li>
                      <Link to="#">Swim</Link>
                    </li>
                    <li>
                      <Link to="#">Footwear</Link>
                    </li>
                    <li>
                      <Link to="#">Sweaters &amp; Outerwear</Link>
                    </li>
                    <li>
                      <Link to="#">Tops</Link>
                    </li>
                  </ul>
                </div>
                <div className="header_submenu-category-wrap">
                  <div className="header_submenu-category-title">
                    Gear &amp; Essentials (6)
                  </div>
                  <ul className="header_submenu-category">
                    <li>
                      <Link to="#">Car Seats &amp; Carriers</Link>
                    </li>
                    <li>
                      <Link to="#">Diaper Bags &amp; Bagpacks</Link>
                    </li>
                    <li>
                      <Link to="#">Baby Food</Link>
                    </li>
                    <li>
                      <Link to="#">Feeding Gears</Link>
                    </li>
                    <li>
                      <Link to="#">Highchairs &amp; Strollers</Link>
                    </li>
                    <li>
                      <Link to="#">Travel Essentials</Link>
                    </li>
                  </ul>
                </div>
                <div className="header_submenu-category-wrap">
                  <div className="header_submenu-category-title">
                    Kids Apparel (11)
                  </div>
                  <ul className="header_submenu-category">
                    <li>
                      <Link to="#">Accessories</Link>
                    </li>
                    <li>
                      <Link to="#">Bottoms</Link>
                    </li>
                    <li>
                      <Link to="#">Costumes</Link>
                    </li>
                    <li>
                      <Link to="#">Dresses &amp; Rompers</Link>
                    </li>
                    <li>
                      <Link to="#">Footwear</Link>
                    </li>
                    <li>
                      <Link to="#">Pajamas &amp; Robes</Link>
                    </li>
                    <li>
                      <Link to="#">Socks &amp; Underwear</Link>
                    </li>
                    <li>
                      <Link to="#">Sweaters &amp; Outerwear</Link>
                    </li>
                    <li>
                      <Link to="#">Sweatshirts &amp; Hoodies</Link>
                    </li>
                    <li>
                      <Link to="#">Swims</Link>
                    </li>
                    <li>
                      <Link to="#">Tops</Link>
                    </li>
                  </ul>
                </div>
                <div className="header_submenu-category-wrap">
                  <div className="header_submenu-category-title">
                    Maternity (3)
                  </div>
                  <ul className="header_submenu-category">
                    <li>
                      <Link to="#">Accessories</Link>
                    </li>
                    <li>
                      <Link to="#">Apparel</Link>
                    </li>
                    <li>
                      <Link to="#">Nursing Essentials</Link>
                    </li>
                  </ul>
                </div>
                <div className="header_submenu-category-wrap">
                  <div className="header_submenu-category-title">
                    Nursery &amp; Decor (6)
                  </div>
                  <ul className="header_submenu-category">
                    <li>
                      <Link to="#">Blankets, Beddings &amp; Pillows</Link>
                    </li>
                    <li>
                      <Link to="#">Keepsakes &amp; Decor</Link>
                    </li>
                    <li>
                      <Link to="#">Furniture &amp; Storage</Link>
                    </li>
                    <li>
                      <Link to="#">Laundry &amp; Cleaning</Link>
                    </li>
                    <li>
                      <Link to="#">Lounges &amp; Covers</Link>
                    </li>
                    <li>
                      <Link to="#">Rugs &amp; Playmats</Link>
                    </li>
                  </ul>
                </div>
                <div className="header_submenu-category-wrap">
                  <div className="header_submenu-category-title">
                    Paper &amp; Novelty (2)
                  </div>
                  <ul className="header_submenu-category">
                    <li>
                      <Link to="#">Greeting Cards</Link>
                    </li>
                    <li>
                      <Link to="#">Stickers, Pins &amp; Magnets</Link>
                    </li>
                  </ul>
                </div>
                <div className="header_submenu-category-wrap">
                  <div className="header_submenu-category-title">
                    Toys &amp; Learning (7)
                  </div>
                  <ul className="header_submenu-category">
                    <li>
                      <Link to="#">Arts &amp; Crafts</Link>
                    </li>
                    <li>
                      <Link to="#">Baby Toys</Link>
                    </li>
                    <li>
                      <Link to="#">Bath Toys</Link>
                    </li>
                    <li>
                      <Link to="#">Dolls &amp; Dollhouses</Link>
                    </li>
                    <li>
                      <Link to="#">Kids’ Books</Link>
                    </li>
                    <li>
                      <Link to="#">Kids’ Toys &amp; Games</Link>
                    </li>
                    <li>
                      <Link to="#">Puppets</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="header_block header_block-bottom mp-header_block-bottom"></div>
        )}
      </header>
      <InviteBrandModel
        modalIsOpen={modalIsOpen}
        opencloseBrandModal={opencloseBrandModal}
      />
      <Outlet />
    </>
  );
}
export default RetailerHeader;
