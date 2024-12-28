import React, {PropsWithChildren} from 'react';
import {StyleProp, View, ViewProps} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewProps>;
}

export const Card = ({style, children}: Props) => {
  return (
    <View
      style={[
        {
          borderRadius: 10,
          backgroundColor: colors.cardBackground,
          padding: 10,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
