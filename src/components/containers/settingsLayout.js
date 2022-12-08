/* eslint-disable react/no-string-refs */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';

const SettingsLayout = (props) => {
  return (
    <div>
      <Switch>
        {routes.map((prop, key) => {
          console.log(prop.layout, 'prop.layout');
          return (
            <Route
              path={prop.path}
              key={key}
              exact={prop.exact}
              children={<prop.component {...props} />}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default SettingsLayout;
