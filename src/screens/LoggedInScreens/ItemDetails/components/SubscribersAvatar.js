import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import theme from '../../../../styles/theme';

export const AVATAR = [
  {
    key: 1,
    imgUrl:
      'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
  },
  {
    key: 2,
    imgUrl:
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
  },
  // {
  //   key: 3,
  //   imgUrl:
  //     'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg',
  // },
  {
    key: 4,
    imgUrl:
      'https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80',
  },
  {
    key: 5,
    imgUrl:
      'https://img.freepik.com/free-photo/portrait-african-american-man_23-2149072179.jpg',
  },
  {
    key: 6,
    imgUrl:
      'https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg',
  },
  {
    key: 7,
    imgUrl:
      'https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&w=1000&q=80',
  },
  {
    key: 8,
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Outdoors-man-portrait.jpg/1200px-Outdoors-man-portrait.jpg',
  },
  {
    key: 9,
    imgUrl:
      'https://i.pinimg.com/236x/ff/e5/c7/ffe5c7867c2b9529b62a529ffcc567aa--mens-suits-gorgeous-men.jpg',
  },
];

const SubscribersAvatar = () => {
  return (
    <View style={SubscribersAvatarStyles.container}>
      {AVATAR.map((item, index) => (
        <View key={`subscriber-avatar-${item.key}`}>
          {index >=5 ? null : 
          <View  style={SubscribersAvatarStyles.avatarWrapper}>
            <Avatar imgUrl={item.imgUrl} />
          </View>}
        </View>
      ))}
      {AVATAR.length > 5 ? <Text style={{paddingLeft:20,fontWeight:'bold', color:theme.colors.dark}}>{`+ ${AVATAR.length - 5} subscribers`}</Text> : null}
    </View>
  );
};

export default SubscribersAvatar;

const Avatar = ({imgUrl}) => (
  <View style={SubscribersAvatarStyles.avaterContainer}>
    <Image
      source={{uri: imgUrl}}
      style={SubscribersAvatarStyles.avatarImageStyle}></Image>
  </View>
);

const SubscribersAvatarStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems:'center',
    marginLeft: 0,
  },
  avatarWrapper: {marginRight: -10},
  avaterContainer: {height: 30, width: 30},
  avatarImageStyle: {height: '100%', width: '100%', borderRadius: 50},
});
