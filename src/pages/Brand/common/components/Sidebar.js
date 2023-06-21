import React, { useState } from 'react';
import { LinkMod } from '../../../../components/common/A';
import { useParams } from 'react-router-dom';

export default function BrandSidebar({ completedStep }) {
  console.log('completedStep----', completedStep);
  const { activeTab } = useParams();

  const [tab, setTab] = useState(activeTab);

  const handleChangTab = (tabName) => {
    setTab(tabName);
  };

  const isStepCompleted = (step) => {
    if (step.required) {
      return completedStep.includes(step.tabName) ? 'checked' : 'required';
    }
    return '';
  };

  const isPreviousStepCompleted = (step, index) => {
    if(step.required) {
      const previousStepIndex = index - 1;
      if(previousStepIndex == -1) return true;
      const item = allSteps[previousStepIndex];
      return  completedStep.includes(item?.tabName);
    }
    return true;
  }

  const allSteps = [
    {
      to: '/brand/setting',
      dataLink: 'Account',
      name: 'Brand Profile',
      tabName: 'profile',
      required: true,
    },
    {
      to: '/brand/setting/preference',
      dataLink: 'Preferences',
      name: 'Preferences',
      tabName: 'preference',
      required: true,
    },
    {
      to: '/brand/setting/paid',
      dataLink: 'GettingPaid',
      name: 'Getting Paid',
      tabName: 'payment',
      required: true,
    },
    {
      to: '/brand/setting/shipping',
      dataLink: 'Shipping',
      name: 'Shipping',
      tabName: 'shipping',
      required: true,
    },
    {
      to: '/brand/setting/integration',
      dataLink: 'Integration',
      name: 'Integration',
      tabName: 'integration',
      required: true,
    },
    {
      to: '/brand/setting/users',
      dataLink: 'Users',
      name: 'Users',
      tabName: 'users',
      required: false,
    },
    {
      to: '/brand/setting/security',
      dataLink: 'Security',
      name: 'Security',
      tabName: 'security',
      required: false,
    },
    {
      to: '/brand/setting/notification',
      dataLink: 'AlertsNotifications',
      name: 'Notifications',
      tabName: 'notification',
      required: false,
    },
  ];

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
                  {allSteps.map((step, index) => {
                    return (
                      <LinkMod
                        key={`${index}`}
                        to={step.to}
                        data-link={step.dataLink}
                        className={`tab-links ${isStepCompleted(step)} ${
                          tab === step.tabName ? 'active' : ''
                        }`}
                        onClick={() => {
                          handleChangTab(step.tabName);
                        }}
                        style={isPreviousStepCompleted(step, index) ? null : { pointerEvents: 'none' }}
                      >
                        {step.name}
                        {step.required && <div className="tooltip_text not-available-tooltip">
                          <p>
                            This is a mandatory setting that is part of the
                            onboarding process.
                          </p>
                        </div>}
                      </LinkMod>
                    );
                  })}
                  {/* <LinkMod
                    to={'/brand/setting'}
                    data-link="Account"
                    className={`tab-links ${
                      completedStep.includes('profile') ? 'checked' : 'required'
                    } ${tab === 'profile' || tab == undefined ? 'active' : ''}`}
                    onClick={() => handleChangTab('profile')}
                    style={{pointerEvents: 'none'}}
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
                    className={`tab-links required ${checkStepCompleted(
                      'preference'
                    )} ${tab === 'preference' ? 'active' : ''}`}
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
                    className={`tab-links required ${checkStepCompleted(
                      'payment'
                    )} ${tab === 'paid' ? 'active' : ''}`}
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
                    className={`tab-links required ${checkStepCompleted(
                      'shipping'
                    )} ${tab === 'shipping' ? 'active' : ''}`}
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
                    className={`tab-links required ${checkStepCompleted(
                      'integration'
                    )} ${tab == 'integration' ? 'active' : ''}`}
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
                  </LinkMod> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
