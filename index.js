/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
// import './gesture-handler';

AppRegistry.registerComponent(appName, () => App);
