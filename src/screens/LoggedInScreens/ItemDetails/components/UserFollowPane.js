import {StyleSheet, Text, View, Image} from 'react-native';
import React,{useMemo} from 'react';
import theme from '../../../../styles/theme';
import FollowButton from './FollowButton';
import {useSelector} from 'react-redux';

const UserFollowPane = () => {
  const isDarkThemed = useSelector(state => state.appState.isDarkThemed);
  const darkThemedStyle = useMemo(() => {
    return {
      userNameTextStyle:{...UserFollowPaneStyles.userNameTextStyle, color:isDarkThemed ? theme.colors.white: theme.colors.dark}
    };
  }, [isDarkThemed]);
  return (
    <View style={UserFollowPaneStyles.userInfoWarapper}>
      <View style={UserFollowPaneStyles.userNameandAvaterWrapper}>
        <View style={UserFollowPaneStyles.userAvaterWrapper}>
          <Image
            style={UserFollowPaneStyles.userAvatarStyle}
            source={{
              uri: 'https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=',
            }}
          />
        </View>
        <Text
          style={darkThemedStyle.userNameTextStyle}>
          Prabhu
        </Text>
      </View>

      {/* //avatarStyl
        //username */}
      <FollowButton />

    </View>
  );
};

export default UserFollowPane;

const UserFollowPaneStyles = StyleSheet.create({
  userInfoWarapper: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userAvaterWrapper: {
    height: 40,
    width: 40,
    borderRadius: 50,
    overflow: 'hidden',
  },
  userAvatarStyle: {height: '100%', width: '100%'},
  userNameSectionWrapper: {
    flexDirection: 'column',
    paddingHorizontal: 5,
  },
  userNameandAvaterWrapper:{flexDirection: 'row', alignItems: 'center'},
  userNameTextStyle:{
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    paddingLeft: 10,
  }
});
