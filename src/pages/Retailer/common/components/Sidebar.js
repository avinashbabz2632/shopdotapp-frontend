import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { LinkMod } from '../../../../components/common/A';

export default function RetailerSidebar() {
    const { activeTab } = useParams();
    const [tab, setTab] = useState(activeTab);

    const handleChangTab = (tabName) => {
        setTab(tabName);
    };

    return (
        <aside className="filters mp-filter">
            <div className="filters_wrap">
                <div className="filters_block filters_block-body">
                    <div className="filter open filter-by-products">
                        <div className="filter_body">
                            <div className="tab_wrap">
                                <div className="setting-tab-title">Setting</div>
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
                                    <LinkMod
                                        to={'/retailer/setting/'}
                                        data-link="Account"
                                        className={`tab-links required ${
                                            tab == 'profile' || tab == undefined
                                                ? 'active'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleChangTab('profile')
                                        }
                                    >
                                        Retailer Profile
                                    </LinkMod>
                                    <LinkMod
                                        to={'/retailer/setting/billing'}
                                        data-link="Billing"
                                        className={`tab-links required ${
                                            tab == 'billing' ? 'active' : ''
                                        }`}
                                        onClick={() =>
                                            handleChangTab('billing')
                                        }
                                    >
                                        Billing
                                    </LinkMod>

                                    <LinkMod
                                        to={'/retailer/setting/users'}
                                        data-link="Users"
                                        className={`tab-links ${
                                            tab == 'users' ? 'active' : ''
                                        }`}
                                        onClick={() => handleChangTab('users')}
                                    >
                                        Users
                                    </LinkMod>
                                    <LinkMod
                                        to={'/retailer/setting/security'}
                                        data-link="Security"
                                        className={`tab-links ${
                                            tab == 'security' ? 'active' : ''
                                        }`}
                                        onClick={() =>
                                            handleChangTab('security')
                                        }
                                    >
                                        Security
                                    </LinkMod>

                                    <LinkMod
                                        to={'/retailer/setting/notification'}
                                        data-link="AlertsNotifications"
                                        className={`tab-links ${
                                            tab == 'notification'
                                                ? 'active'
                                                : ''
                                        }`}
                                        onClick={() =>
                                            handleChangTab('notification')
                                        }
                                    >
                                        Notifications
                                    </LinkMod>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
