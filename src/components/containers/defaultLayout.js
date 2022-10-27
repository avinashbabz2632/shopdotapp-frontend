/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Suspense, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import SettingsLayout from './settingsLayout';

const loading = () => <div>Loading...</div>;

const DefaultLayout = (props) => {
  return (
    <div>
      <Suspense fallback={loading()}>
        <Switch>
          {routes.map((route, id) => {
            console.log(
              routes,
              'routesroutes',
              route.component,
              route.layout === 'settings'
            );

            return (
              <Route
                key={id}
                path={route.path}
                exact={route.exact}
                name={route.name}
                children={
                  route.layout === 'settings' ? (
                    <SettingsLayout {...props} />
                  ) : (
                    <route.component {...props} />
                  )
                }
              />
            );
          })}
        </Switch>
      </Suspense>
    </div>
  );
};

export default DefaultLayout;
