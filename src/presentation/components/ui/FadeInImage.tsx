import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: Props) => {
  const {animationOpacity, fadeId} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={[styles.container, style]}>
      {isLoading && (
        <ActivityIndicator style={styles.indicator} color="green" size={30} />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={() => {
          fadeId({duration: 1000});
          setIsLoading(false);
        }}
        style={[styles.image, style, {opacity: animationOpacity}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  indicator: {
    position: 'absolute',
  },
});
