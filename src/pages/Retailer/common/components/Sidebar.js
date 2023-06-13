import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  getBillingAction,
  getRetailerProfileAction,
} from '../../../../actions/retailerActions';
import { useState } from 'react';
import { selectUserDetails } from '../../../../redux/user/userSelector';
import { selectBrandProfileDetails } from '../../../../redux/Brand/Profile/brandProfileSelectors';
import { selectRetailerProfileCompleted } from '../../../../redux/Retailer/Profile/retailerProfileSelector';

export default function RetailerSidebar() {
  const profileCompleted = useSelector(selectRetailerProfileCompleted);

  return (
    <aside className="filters mp-filter">
      <div className="filters_wrap">
        <div className="filters_block filters_block-body">
          <div className="filter open filter-by-products">
            <div className="filter_body">
              <div className="tab_wrap">
                <div className="setting-tab-title">Settings</div>
                <input type="checkbox" name="" id="" className="" />
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
                      `${isActive ? 'active' : ''} tab-links ${
                        profileCompleted?.profile ? 'checked' : 'required'
                      }`
                    }
                  >
                    Retailer Profile
                    <div className="tooltip_text not-available-tooltip">
                      <p>
                        This is a mandatory setting that is part of the
                        onboarding process.
                      </p>
                    </div>
                  </NavLink>
                  <NavLink
                    to={'/retailer/setting/billing'}
                    data-link="Billing"
                    className={({ isActive }) =>
                      `${isActive ? 'active' : ''} tab-links ${
                        profileCompleted?.paid ? 'checked' : 'required'
                      }`
                    }
                  >
                    Billing
                  </NavLink>

                  <NavLink
                    to={'/retailer/setting/users'}
                    data-link="Users"
                    className={({ isActive }) =>
                      `${isActive ? 'active' : ''} tab-links`
                    }
                  >
                    Users
                  </NavLink>
                  <NavLink
                    to={'/retailer/setting/security'}
                    data-link="Security"
                    className={({ isActive }) =>
                      `${isActive ? 'active' : ''} tab-links`
                    }
                  >
                    Security
                  </NavLink>

                  <NavLink
                    to={'/retailer/setting/notification'}
                    data-link="AlertsNotifications"
                    className={({ isActive }) =>
                      `${isActive ? 'active' : ''} tab-links`
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
