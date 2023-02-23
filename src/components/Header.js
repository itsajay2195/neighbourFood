import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import theme from '../styles/theme';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View
      style={styles.container}>
      <View
        style={styles.avatarWrapper}>
        <Image
          style={styles.avatarStyle}
          source={{
            uri: 'https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=',
          }}
        />
      </View>

      <View>
        <Text
          style={styles.headingStyle}>
          Feed
        </Text>
      </View>

      <View style={styles.iconWrapper}>
        <Icon name="form" size={15} color="blue" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 10,
    backgroundColor: theme.colors.white,
    height: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  avatarWrapper:{
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatarStyle:{height: 30, width: 30},
  headingStyle:{
    fontSize: theme.fontSizes.large,
    color: theme.colors.dark,
    fontWeight: '700',
    fontFamily: 'sans-serif-condensed'
  },
  iconWrapper:{height:30,width:30, borderRadius:50, backgroundColor:'#C6E2FF', justifyContent:'center', alignItems:"center"}
});
