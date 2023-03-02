import {StyleSheet, Animated, Text, View, Dimensions} from 'react-native';
import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
import theme from '../../../styles/theme';
import { LOGGED_IN_SCREEN_NAME } from '../../../constants/ScreenConstants';

const {width} = Dimensions.get('window');

const SplashScreen = ({navigation}) => {
  const animationValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setTimeout(()=>{
      navigation.reset({
        index: 0,
        routes: [{ name: LOGGED_IN_SCREEN_NAME.home }],
      });
    },3000)
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, );

  const translateX = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  const opacity = animationValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 1],
  });

  

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.brandTextWrapper,
          transform: [{translateX}],
          opacity,
        }}>
        <Text style={styles.text}>NaberFood</Text>
        <LottieView
          style={{height: 60}}
          source={require('../../../assets/animations/location-marker.json')}
          autoPlay
          autoSize
          speed={0.5}
          loop={true}
        />
      </Animated.View>

      <Animated.View
        style={{...styles.animationWrapper,    transform: [{translateX}],
        opacity,}}>
        <LottieView
          style={{width: width, height: width, marginTop: 20}}
          source={require('../../../assets/animations/tossing.json')}
          autoSize
          autoPlay
          speed={0.5}
          loop={true}
        />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.dark,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    fontFamily: 'sans-serif-condensed', // Replace with your custom font sans-serif-condensed
    color: theme.colors.white, // Replace with your preferred text color
  },
  brandTextWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    flex: 1,
    left: 0,
    right: 0,
    top: '30%',
    bottom: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animationWrapper:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
