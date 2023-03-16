import React, { useState } from 'react';
import { LinkMod } from '../../../../components/common/A';
import { useParams } from 'react-router-dom';

export default function BrandSidebar({ completedStep }) {
  const { activeTab } = useParams();

  const [tab, setTab] = useState(activeTab);

  const handleChangTab = (tabName) => {
    setTab(tabName);
  };

  return (
    <aside className="filters mp-filter">
      <div className="filters_wrap">
        <div className="filters_block filters_block-body">
          <div className="filter-by-products">
            <div className="link-sidebar">
              <div className="tab_wrap">
                <div className="setting-tab-title">Setting</div>
                <input type="checkbox" name="" id="" className="" />
                <div className="hamburger-lines tabs-hamburger-lines">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </div>
                <div className="pc_tabs-menu tab_menu">
                  <LinkMod
                    to={'/brand/setting'}
                    data-link="Account"
                    className={`tab-links ${
                      completedStep.includes('profile') ? 'checked' : 'required'
                    } ${tab === 'profile' || tab == undefined ? 'active' : ''}`}
                    onClick={() => handleChangTab('profile')}
                  >
                    Brand Profile
                    <div className="tooltip_text not-available-tooltip">
                      <p>
                        This is a mandatory setting that is part of the
                        onboarding process.
                      </p>
                    </div>
                  </LinkMod>
                  <LinkMod
                    to={'/brand/setting/preference'}
                    data-link="Preferences"
                    className={`tab-links required ${
                      tab === 'preference' ? 'active' : ''
                    }`}
                    onClick={() => handleChangTab('preference')}
                  >
                    Preferences
                    <div className="tooltip_text not-available-tooltip">
                      <p>
                        This is a mandatory setting that is part of the
                        onboarding process.
                      </p>
                    </div>
                  </LinkMod>
                  <LinkMod
                    to={'/brand/setting/paid'}
                    data-link="GettingPaid"
                    className={`tab-links required ${
                      tab === 'paid' ? 'active' : ''
                    }`}
                    onClick={() => handleChangTab('paid')}
                  >
                    Getting Paid
                    <div className="tooltip_text not-available-tooltip">
                      <p>
                        This is a mandatory setting that is part of the
                        onboarding process.
                      </p>
                    </div>
                  </LinkMod>
                  <LinkMod
                    to={'/brand/setting/shipping'}
                    data-link="Shipping"
                    className={`tab-links required ${
                      tab === 'shipping' ? 'active' : ''
                    }`}
                    onClick={() => handleChangTab('shipping')}
                  >
                    Shipping
                    <div className="tooltip_text not-available-tooltip">
                      <p>
                        This is a mandatory setting that is part of the
                        onboarding process.
                      </p>
                    </div>
                  </LinkMod>
                  <LinkMod
                    to={'/brand/setting/integration'}
                    data-link="Integration"
                    className={`tab-links required ${
                      tab == 'integration' ? 'active' : ''
                    }`}
                    onClick={() => handleChangTab('integration')}
                  >
                    Integration
                    <div className="tooltip_text not-available-tooltip">
                      <p>
                        This is a mandatory setting that is part of the
                        onboarding process.
                      </p>
                    </div>
                  </LinkMod>
                  <LinkMod
                    to={'/brand/setting/users'}
                    data-link="Users"
                    className={`tab-links ${tab === 'users' ? 'active' : ''}`}
                    onClick={() => handleChangTab('users')}
                  >
                    Users
                  </LinkMod>
                  <LinkMod
                    to={'/brand/setting/security'}
                    data-link="Security"
                    className={`tab-links ${
                      tab === 'security' ? 'active' : ''
                    }`}
                    onClick={() => handleChangTab('security')}
                  >
                    Security
                  </LinkMod>
                  <LinkMod
                    to={'/brand/setting/notification'}
                    data-link="AlertsNotifications"
                    className={`tab-links ${
                      tab === 'notification' ? 'active' : ''
                    }`}
                    onClick={() => handleChangTab('notification')}
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
