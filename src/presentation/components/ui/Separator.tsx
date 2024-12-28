import React from 'react';
import {StyleProp, StyleSheet, View, ViewProps} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface Props {
  style?: StyleProp<ViewProps>;
}

export const Separator = ({style}: Props) => {
  return (
    <View style={styles.separatorGlobal}>
      <View style={[styles.separator, style]} />;
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    alignSelf: 'center',
    width: '80%',
    height: 1,
    backgroundColor: colors.text,
    opacity: 0.1,
    marginVertical: 8,
  },
  separatorGlobal: {
    backgroundColor: colors.cardBackground,
  },
});
