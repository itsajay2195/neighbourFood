import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from '../../../styles/styles';
import Header from '../../../components/Header';
import theme from '../../../styles/theme';
import FeedListItem from './components/FeedListItem';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: theme.colors.light, flex: 1}}>
        <Header />
        <ScrollView>
          <FeedListItem />

          <FeedListItem />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
