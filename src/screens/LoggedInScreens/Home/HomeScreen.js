import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../../../styles/styles';
import Header from '../../../components/Header';
import theme from '../../../styles/theme';
import FeedListItem from './components/FeedListItem';
import { useSelector } from 'react-redux';

const HomeScreen = ({navigation}) => {
  const isDarkThemed = useSelector(state=>state.appState.isDarkThemed)
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: isDarkThemed? theme.colors.dark : theme.colors.light, flex: 1}}>
        <Header navigation={navigation} />
        <ScrollView>
          <FeedListItem  navigation={navigation}/>
          <FeedListItem  navigation={navigation}/>
          <FeedListItem  navigation={navigation}/>
          <FeedListItem  navigation={navigation}/>
          <FeedListItem  navigation={navigation}/>
          <FeedListItem  navigation={navigation}/>

        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
