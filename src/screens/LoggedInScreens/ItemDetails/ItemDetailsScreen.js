import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from '../../../styles/styles';
import BackButton from '../../../components/BackButton';
import UserFollowPane from './components/UserFollowPane';
import theme from '../../../styles/theme';
import SubscribersAvatar from './components/SubscribersAvatar';
import ReadMore from '../../../components/ReadMore';
import ShareOn from '../../../components/ShareOn';

const ItemDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton  navigation={navigation}/>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View
          style={{
            flex: 0.5,
            backgroundColor: theme.colors.light,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <View style={ItemDetailsStyles.imageWrapper}>
            <Image
              resizeMode="cover"
              style={ItemDetailsStyles.contentImageStyle}
              source={{
                uri: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/11/whole-grain-pancake-stack.jpg',
              }}
            />
          </View>
          <View
            style={{
              flex: 0.2,
              justifyContent: 'center',
              paddingHorizontal: 20,
            }}>
            <UserFollowPane />
            {/* user tag and follow pane */}
          </View>
        </View>
        <View
          style={{
            flex: 0.5,
            backgroundColor: theme.colors.white,
            paddingHorizontal: 20,
          }}>
          <View style={{paddingVertical: 5}}>
            {/* title */}
            <Text style={ItemDetailsStyles.itemNameTextStyle}>Pancake</Text>
            {/* date and time of posting */}
            <Text style={ItemDetailsStyles.userPostDescStlye}>
              December 12, 2022
            </Text>
          </View>

          <View style={{paddingVertical: 5}}>
            {/* subscribers- title */}
            <Text style={ItemDetailsStyles.itemNameTextStyle}>Subscribers</Text>
            {/* subscrivers Avaatar */}
            <SubscribersAvatar />
          </View>

          <View style={{paddingVertical: 5}}>
            {/* Description- title */}
            <Text style={ItemDetailsStyles.itemNameTextStyle}>Description</Text>
            {/* item description */}
            <ReadMore
              text={
                'Eggless pancake, 5 in numbers topped with some berries and maple syrup.Eggless pancake, 5 in numbers topped with some berries and maple syrup. Eggless pancake, 5 in numbers topped with some berries and maple syrup.Eggless pancake, 5 in numbers topped with some berries and maple syrup.'
              }
              maxLength={100}
            />
          </View>

          <View style={{paddingVertical: 5}}>
            <Text style={ItemDetailsStyles.itemNameTextStyle}>Share On</Text>
            <ShareOn />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          left: '10%',
          bottom: 20,
          right: '10%',
          position: 'absolute',
          flex: 1,
          height: 60,
          alignItems: 'center',
          backgroundColor: theme.colors.light,
          borderRadius: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <View
          style={{flex: 0.5, backgroundColor: 'transparent', alignItems: 'center'}}>
          <>
            {/* <Text>Total</Text> */}
            <Text
              style={{fontSize: theme.fontSizes.medium, fontWeight: 'bold', color:theme.colors.dark}}>
              10 INR
            </Text>
          </>
        </View>

        <TouchableOpacity style={{flex:0.5,borderRadius:10,backgroundColor:"blue", alignItems:'center', padding:8}}>
          <Text style={{fontFamily:'sans-serif-condensed', fontSize:theme.fontSizes.medium, fontWeight:'700'}}>Add to Cart</Text>
        </TouchableOpacity>
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
  itemNameTextStyle: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
  },
  userPostDescStlye: {fontFamily: 'sans-serif-condensed', fontSize: 12,color:'grey'},
});
