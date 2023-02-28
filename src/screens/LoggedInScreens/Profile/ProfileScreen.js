import {StyleSheet, Text, View, Image, FlatList, Switch, TouchableOpacity} from 'react-native';
import React, {useState, useMemo} from 'react';
import styles from '../../../styles/styles';
import theme from '../../../styles/theme';
import BackButton from '../../../components/BackButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';

const PROFILESECTIONSDATA = [
  {type: 'ICON', id: 1, name: 'user-shield', description: 'My Membership'},
  {type: 'ICON', id: 2, name: 'envelope', description: 'Contact us'},
  {type: 'ICON', id: 3, name: 'file-alt', description: 'Terns and Conditions'},
  {type: 'ICON', id: 4, name: 'sign-out-alt', description: 'Logout'},
  {type: 'TOGGLE', id: 5, name: null, description: 'Theme'},
];

let isDarkThemedOuterScope;
const SwitchItem = () => {
  const dispatch = useDispatch();
  const isDarkThemed = useSelector(state => state.appState.isDarkThemed);
  const [isEnabled, setIsEnabled] = useState(isDarkThemed);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    dispatch({type: 'CHANGE_THEME_ACTION'});
  };

  return (
    <View
      style={ProfileSyles.toggleContainer}>
      <Text style={{...ProfileSyles.themeNameTextStyle,color:isDarkThemed ? theme.colors.white : theme.colors.dark}}>
        {isDarkThemed ? 'Light Mode' : 'Dark Mode'}
      </Text>
      <Switch
        trackColor={{false: 'black', true: 'grey'}}
        thumbColor={isEnabled ? theme.colors.grey : theme.colors.dark}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const renderItem = ({item}) => {
  if (item.type === 'ICON') {
    return (
      <TouchableOpacity
        style={ProfileSyles.renderItemContainer}>
        <Icon name={item.name} size={24} color={'black'} />
        <Text style={{ ...ProfileSyles.renderITemDescTextStyle,color:isDarkThemedOuterScope?theme.colors.white:theme.colors.black}}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );
  }

  if (item.type === 'TOGGLE') {
    return <SwitchItem />;
  }
};

const ProfileScreen = ({navigation}) => {
  const isDarkThemed = useSelector(state => state.appState.isDarkThemed);
  isDarkThemedOuterScope=isDarkThemed;
  const darkThemedContainerStlye = useMemo(() => {
    return {
      container: {
        ...styles.container,
        backgroundColor: isDarkThemed ? theme.colors.dark : theme.colors.white,
      },
    };
  }, [isDarkThemed]);
  return (
    <View style={darkThemedContainerStlye.container}>
      <BackButton navigation={navigation} />
      <View style={ProfileSyles.profilePicWrapper}>
        <View style={ProfileSyles.profilePicContainer}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
            }}
            style={ProfileSyles.avatarImageStyle}></Image>
        </View>
        <Text
          style={{
            paddingVertical: 5,
            fontFamily: 'sans-serif-condensed',
            color: theme.colors.dark,
            fontSize: theme.fontSizes.large,
            fontWeight: '700',
          }}>
          {' '}
          Marcus Rashford
        </Text>
        <Text
          style={{
            fontFamily: 'sans-serif',
            color: theme.colors.dark,
            fontSize: theme.fontSizes.medium,
            fontWeight: '400',
          }}>
          {' '}
          +919710115165
        </Text>
      </View>

      <View style={ProfileSyles.profileInfoSection}>
        <View style={{paddingVertical: 20, paddingHorizontal: 20}}>
          <FlatList
            data={PROFILESECTIONSDATA}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{borderWidth: 0.2}} />}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const ProfileSyles = StyleSheet.create({
  profilePicWrapper: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicContainer: {
    height: 200,
    width: 200,
    borderWidth: 2.25,
    borderColor: theme.colors.blueSecondary,
    borderStyle: 'dashed',
    borderRadius: 100,
    padding: 5,
  },
  avatarImageStyle: {height: '100%', width: '100%', borderRadius: 100},
  profileInfoSection: {flex: 0.6},
  toggleContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  themeNameTextStyle:{paddingHorizontal: 0, fontSize: 18},
  renderItemContainer:{
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  renderITemDescTextStyle:{paddingHorizontal: 10, fontSize: 18,}
});
