import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';

import {CustomView} from '../../components/ui/CustomView';
import {globalStyles} from '../../../config/theme/theme';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {showPrompt} from '../../../config/adapters/prompt.adapters';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const onShowPrompt = () => {
    showPrompt({
      title: 'Alert Title',
      subtitle: 'My Alert Msg',
      buttons: [
        {text: 'ok', onPress: () => console.log('ok'), style: 'default'},
        {
          text: 'cancel',
          onPress: () => console.log('cancel'),
          style: 'default',
        },
      ],
      prompType: 'plain-text',
      placeholder: 'Input value',
      defaultValue: 'default value',
    });

    // Alert.prompt(
    //   'Alert Title',
    //   'My Alert Msg',
    //   (value: string) => console.log(value),
    //   'secure-text',
    //   'value',
    //   'number-pad',
    // );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alerta" />
      <Button text="Alert - 1" onPress={createTwoButtonAlert} />
      <View style={styles.container} />
      <Button text="Alert - 2" onPress={createThreeButtonAlert} />
      <View style={styles.container} />
      <Button text="Alert - 3" onPress={onShowPrompt} />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
  },
});
