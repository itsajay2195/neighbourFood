import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import styles from '../../../styles/styles';
import BackButton from '../../../components/BackButton';
import UserFollowPane from './components/UserFollowPane';
import theme from '../../../styles/theme';

const ItemDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <View
        style={{
          flex: 0.5,
          backgroundColor: theme.colors.light,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View style={ItemDetailsStyles.imageWrapper}>
          <Image
            style={ItemDetailsStyles.contentImageStyle}
            source={{
              uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
          />
        </View>
        <View
          style={{flex: 0.2, justifyContent: 'center', paddingHorizontal: 20}}>
          <UserFollowPane />
          {/* user tag and follow pane */}
        </View>
      </View>
      <View style={{flex: 0.5, backgroundColor: theme.colors.white}}>
        <View>
          {/* title */}
          {/* date and time of posting */}
        </View>
      </View>

   
    </SafeAreaView>
  );
};

export default ItemDetails;

const ItemDetailsStyles = StyleSheet.create({
  contentImageStyle: {
    height: '100%',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageWrapper: {
    flex: 0.8,
  },
});
