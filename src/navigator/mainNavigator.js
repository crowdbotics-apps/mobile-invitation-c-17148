import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen016084Navigator from '../features/BlankScreen016084/navigator';
import BlankScreen116083Navigator from '../features/BlankScreen116083/navigator';
import BlankScreen216082Navigator from '../features/BlankScreen216082/navigator';
import CopyOfBlankScreen216076Navigator from '../features/CopyOfBlankScreen216076/navigator';
import CopyOfCopyOfBlankScreen216075Navigator from '../features/CopyOfCopyOfBlankScreen216075/navigator';
import BlankScreen216068Navigator from '../features/BlankScreen216068/navigator';
import BlankScreen116067Navigator from '../features/BlankScreen116067/navigator';
import BlankScreen016065Navigator from '../features/BlankScreen016065/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen016084: { screen: BlankScreen016084Navigator },
BlankScreen116083: { screen: BlankScreen116083Navigator },
BlankScreen216082: { screen: BlankScreen216082Navigator },
CopyOfBlankScreen216076: { screen: CopyOfBlankScreen216076Navigator },
CopyOfCopyOfBlankScreen216075: { screen: CopyOfCopyOfBlankScreen216075Navigator },
BlankScreen216068: { screen: BlankScreen216068Navigator },
BlankScreen116067: { screen: BlankScreen116067Navigator },
BlankScreen016065: { screen: BlankScreen016065Navigator },

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
