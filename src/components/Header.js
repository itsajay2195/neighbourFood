import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import theme from '../styles/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import SearchBar from './SearchBar';
import { LOGGED_IN_SCREEN_NAME } from '../constants/ScreenConstants';

const Header = ({navigation}) => {
  const handleSearch = text => {
    setSearchQuery(text);
    // Perform search logic here
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 0.1, alignItems:'center'}}>
        <View style={styles.iconWrapper}>
          <Icon  name="form" size={15} color="blue" />
        </View>
      </View>

      <View style={{flex:1, paddingHorizontal:10}}>
        <SearchBar/>
      </View>

      <View style={{flex: 0.1,  alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate(LOGGED_IN_SCREEN_NAME.profile)} style={styles.avatarWrapper}>
          <Image
            style={styles.avatarStyle}
            source={{
              uri: 'https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: theme.colors.white,
    height: 80,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  avatarWrapper: {
    height: 35,
    width: 35,
    backgroundColor: 'transparent',
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatarStyle: {height: 35, width: 35},
  headingStyle: {
    fontSize: theme.fontSizes.large,
    color: theme.colors.dark,
    fontWeight: '700',
    fontFamily: 'sans-serif-condensed',
  },
  iconWrapper: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: '#C6E2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
