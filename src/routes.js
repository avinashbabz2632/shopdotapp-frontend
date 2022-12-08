import SettingsBilling from './components/scence/SettingsBilling';
import SettingsProfile from './components/scence/SettingsProfile';

var routes = [
  {
    path: '/settings/',
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
export default routes;
