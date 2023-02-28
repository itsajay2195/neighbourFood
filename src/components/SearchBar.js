import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../styles/theme';

const SearchBar = ({ placeholder, onChangeText }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.light, borderRadius: 10, paddingHorizontal:10 }}>
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
