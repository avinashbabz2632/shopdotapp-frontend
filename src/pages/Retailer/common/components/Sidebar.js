import React from 'react';
import { NavLink } from 'react-router-dom';

export default function RetailerSidebar() {
    return (
        <aside className="filters mp-filter">
            <div className="filters_wrap">
                <div className="filters_block filters_block-body">
                    <div className="filter open filter-by-products">
                        <div className="filter_body">
                            <div className="tab_wrap">
                                <div className="setting-tab-title">
                                    Settings
                                </div>
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    className=""
                                />
                                <div className="hamburger-lines tabs-hamburger-lines">
                                    <span className="line line1"></span>
                                    <span className="line line2"></span>
                                    <span className="line line3"></span>
                                </div>
                                <div className="pc_tabs-menu tab_menu">
                                    <NavLink
                                        end
                                        to={'/retailer/setting/'}
                                        data-link="Account"
                                        className={({ isActive }) =>
                                            `${
                                                isActive ? 'active' : ''
                                            } tab-links required`
                                        }
                                    >
                                        Retailer Profile
                                    </NavLink>
                                    <NavLink
                                        to={'/retailer/setting/billing'}
                                        data-link="Billing"
                                        className={({ isActive }) =>
                                            `${
                                                isActive ? 'active' : ''
                                            } tab-links required`
                                        }
                                    >
                                        Billing
                                    </NavLink>

                                    <NavLink
                                        to={'/retailer/setting/users'}
                                        data-link="Users"
                                        className={({ isActive }) =>
                                            `${
                                                isActive ? 'active' : ''
                                            } tab-links required`
                                        }
                                    >
                                        Users
                                    </NavLink>
                                    <NavLink
                                        to={'/retailer/setting/security'}
                                        data-link="Security"
                                        className={({ isActive }) =>
                                            `${
                                                isActive ? 'active' : ''
                                            } tab-links required`
                                        }
                                    >
                                        Security
                                    </NavLink>

                                    <NavLink
                                        to={'/retailer/setting/notification'}
                                        data-link="AlertsNotifications"
                                        className={({ isActive }) =>
                                            `${
                                                isActive ? 'active' : ''
                                            } tab-links required`
                                        }
                                    >
                                        Notifications
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
