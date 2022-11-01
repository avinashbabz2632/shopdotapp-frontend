import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SettingsSideBar from '../sceneComponents/UI/SettingsSideBar';
import SettingsBilling from './SettingsBilling';
import SettingsProfile from './SettingsProfile';
import '../sceneComponents/UI/style.css';

export default function Settings(props) {
  const routes = [
    {
      path: '/settings',
      name: 'Settings Profile',
      component: SettingsProfile,
      layout: 'settings',
      exact: true,
    },
    {
      path: '/settings/bills',
      name: 'Settings Bills',
      component: SettingsBilling,
      layout: 'settings',
      exact: true,
    },
  ];
  const handleClick = (activeKeys, sub) => {
    props.history.push({
      pathname: sub.linkTo,
    });
  };
  return (
    <div className="conentWrapper">
      <div className="row g-0">
        <div className="col-2">
          <SettingsSideBar handleClick={handleClick} />
        </div>
        <div className="col-10 rightSide">
          <Switch>
            {routes.map((currentRoute, key) => {
              return (
                <Route
                  path={currentRoute.path}
                  key={key}
                  exact={currentRoute.exact}
                  children={<currentRoute.component {...props} />}
                />
              );
            })}
          </Switch>
        </div>
      </div>
    </div>
  );
}
