import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item105096Navigator from '../features/Add-Item105096/navigator';
import Maps105092Navigator from '../features/Maps105092/navigator';
import UserProfile105088Navigator from '../features/UserProfile105088/navigator';
import Maps1105046Navigator from '../features/Maps1105046/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item105096: { screen: Add-Item105096Navigator },
Maps105092: { screen: Maps105092Navigator },
UserProfile105088: { screen: UserProfile105088Navigator },
Maps1105046: { screen: Maps1105046Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
