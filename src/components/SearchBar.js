import React, {useMemo} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../styles/theme';
import {useSelector} from 'react-redux';

const SearchBar = ({placeholder, onChangeText}) => {
  const isDarkThemed = useSelector(state => state.appState.isDarkThemed);
  const themedStyles = useMemo(() => {
    return {
      container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: isDarkThemed ? theme.colors.dark : theme.colors.light,
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: isDarkThemed ? theme.colors.grey : null,
        borderWidth: isDarkThemed ? 0.5: null,
      },
    };
  });
  return (
    <View style={themedStyles.container}>
      <Icon name="search" size={18} color="#666" style={{marginRight: 10}} />
      <TextInput
        style={textInputStyles}
        placeholder={placeholder || 'Search Here'}
        placeholderTextColor={
          isDarkThemed ? theme.colors.white : theme.colors.black
        }
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;

const textInputStyles = {fontSize: 16, padding: 6};
