import { createBottomTabNavigator } from 'react-navigation';

export default TabNavigator = (tabStructure, bottomNavConfigs = {}) => {
  return createBottomTabNavigator(tabStructure, bottomNavConfigs);
}