import React from 'react';
import {Pressable, StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface Props {
  text: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  color?: string;
  backgroundColor?: string;
  borderRadius?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  onPress: () => void;
}

export const Button = ({
  text,
  style,
  onPress,
  disabled = false,
  color = colors.buttonTextColor,
  backgroundColor = colors.primary,
  borderRadius = 10,
  paddingHorizontal = 20,
  paddingVertical = 10,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({pressed}) => [
        styles.button,
        {backgroundColor: disabled ? colors.text : backgroundColor},
        {opacity: pressed ? 0.8 : 1},
        {borderRadius, paddingHorizontal, paddingVertical},
        style,
      ]}>
      <Text style={[styles.text, {color}]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
