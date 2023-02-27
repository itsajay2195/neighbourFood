import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../styles/theme';

const PLATFORMS = [
  {id: 1, iconName: 'facebook'},
  {id: 1, iconName: 'instagram'},
  {id: 1, iconName: 'whatsapp'},
];

const ShareOn = () => {
  return (
    <View >
      {/* <Text>ShareOn</Text> */}
      <View style={ShareOnStyles.iconWrapper}>
        {PLATFORMS.map((item, index) => (
          <TouchableOpacity
            key={`platform-${index}`}
            style={ShareOnStyles.avatarContainer}>
            <Icon name={item.iconName} size={18} color={theme.colors.dark} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ShareOn;

const ShareOnStyles = StyleSheet.create({
  avatarContainer: {height: 30, width: 30, marginRight: 5},
  iconWrapper: {paddingTop: 10, flexDirection: 'row'},
});
