import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './presentation/navigator/navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from './config/PaperProvider';

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <PaperProvider>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}
