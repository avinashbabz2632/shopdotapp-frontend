import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './style.css';

const SettingsSideBar = () => {
  const location = useLocation();
  const items = [
    {
      name: 'Retailer Profile',
      path: '/settings',
    },
    {
      name: 'Billing',
      path: '/settings/bills',
    },
    {
      name: 'Integration',
      path: '/settings/integration',
    },
    {
      name: 'User',
      path: '/settings/user',
    },
    {
      name: 'Security',
      path: '/settings/security',
    },
  ];

  const styles = {
    background: '#fbf5f0',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    borderRight: '2px solid #bd6f34',
    fontWeight: 700,
    color: '#354253',
  };

  return (
    <div className="filters">
      <div className="sideBar">
        <div className="sideBarHeading">
          <h2>Setting</h2>
        </div>
        <div className="sideBarItems mt-4">
          {items.map(({ name, path }, i) => (
            <Link key={i} to={path} className="sideBarLink">
              <p
                className="listItem"
                style={location.pathname == path ? styles : null}
              >
                {name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsSideBar;
