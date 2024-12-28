import React from 'react';
import {Pressable, StyleProp, Text, ViewProps} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';

interface Props {
  text: string;
  disabled?: boolean;
  style?: StyleProp<ViewProps>;
  color?: string;
  backgroundColor?: string;
  borderRadius?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  children?: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
  iconSize?: number;
  iconColor?: string;
  loadingSize?: number;
  loadingColor?: string;

  onPress: () => void;
}

export const Button = ({text, style, onPress}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
      ]}>
      <Text
        style={[
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor,
          },
          style,
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};
