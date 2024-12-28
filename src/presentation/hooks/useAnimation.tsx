import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animationOpacity = useRef(new Animated.Value(0.4)).current;
  const animationTop = useRef(new Animated.Value(0)).current;
  const fadeId = ({duration = 300, toValue = 1, callback = () => {}}) => {
    // Animated.timing(animationTop, {
    //   toValue: 0,
    //   duration: 1000,
    //   useNativeDriver: true,
    //   easing: Easing.bounce, // Easing.elastic(1),
    // }).start();
    Animated.timing(animationOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeOut = ({duration = 300, toValue = 0, callback = () => {}}) => {
    // Animated.timing(animationTop, {
    //   toValue: -100,
    //   duration: 1000,
    //   useNativeDriver: true,
    // }).start();
    Animated.timing(animationOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const startMovingPosition = ({
    initialPosition = 0,
    toValue = 0,
    duration = 1000,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animationTop.setValue(initialPosition);
    Animated.timing(animationTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start(callback);
  };
  return {
    animationOpacity,
    animationTop,
    fadeId,
    fadeOut,
    startMovingPosition,
  };
};
