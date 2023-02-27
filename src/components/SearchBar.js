import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = ({ placeholder, onChangeText }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: 10, paddingHorizontal:10 }}>
      <Icon name="search" size={18} color="#666" style={{ marginRight: 10 }} />
      <TextInput
        style={textInputStyles}
        placeholder={placeholder || "Search Here"}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;

const textInputStyles = { fontSize: 16, padding:6 }
