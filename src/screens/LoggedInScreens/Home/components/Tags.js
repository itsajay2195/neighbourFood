import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Tags = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor:'#C6E2FF',
          borderRadius: 0,
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginRight:5,
          opacity:0.9
        }}>
        <Text style={{color: 'blue'}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Tags;

const styles = StyleSheet.create({});
