import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../styles/theme';

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity onPress={()=>navigation.goBack()} style={{ zIndex:1,left:10, right:0,top:30,bottom:0,position:'absolute',height:30,width:30, borderRadius:50, justifyContent:'center', alignItems:'center', backgroundColor:theme.colors.grey, opacity:0.4}}>
    <Icon  style={{fontSize:22}} name="angle-left" color={theme.colors.dark} />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({})