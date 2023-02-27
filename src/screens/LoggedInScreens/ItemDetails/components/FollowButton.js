import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import theme from '../../../../styles/theme';

const FollowButton = () => {
  return (
    <TouchableOpacity style={FollowButtonStyles.container}>
        <Text style={FollowButtonStyles.followTextStyle}>Follow</Text>
    </TouchableOpacity>
  )
}

export default FollowButton

const FollowButtonStyles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:theme.colors.blue,
        borderRadius:10
    },
    followTextStyle:{
        fontSize:theme.fontSizes.medium,
        fontWeight:'bold'
    }
})