import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './style.css';

const SettingsLayout = () => {
    const location = useLocation()
    const items = [
        {
            name: 'Integration',
            path: '/setting/404'
        },
        {
            name: 'Brand Profile',
            path: '/setting/brand-profile'
        },
        {
            name: 'Preferences',
            path: '/setting/404'
        },
        {
            name: 'Getting Paid',
            path: '/setting/getting-paid'
        },
        {
            name: 'Shipping',
            path: '/setting/shipping'
        },
        {
            name: 'User',
            path: '/setting/user'
        },
        {
            name: 'Security',
            path: '/setting/security'
        },
        {
            name: 'Alerts and Notifications',
            path: '/setting/alert'
        },
    ]

    const styles = {
        background: '#fbf5f0',
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        borderRight: '2px solid #bd6f34',
        fontWeight: 700,
        color: '#354253',
    }

    // useEffect(() => {

    //     setCurrentPath()
    // }, []);

    return (
        <div className='bg-white'>
            <div className="row g-0">
                <div className="col-2">
                    <div className="sideBarWrapper">
                        <div className='sideBar'>
                            <div className="sideBarHeading">
                                <h2>Setting</h2>
                            </div>
                            <div className="sideBarItems mt-4">
                                {items.map(({ name, path }, i) => (
                                    <Link key={i} to={path} className='sideBarLink'>
                                        <p className='listItem' style={location.pathname == path ? styles : null} >{name}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10 rightSide">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default SettingsLayout;
