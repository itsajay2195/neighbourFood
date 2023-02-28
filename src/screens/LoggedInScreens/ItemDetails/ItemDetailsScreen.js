import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React,{useMemo} from 'react';
import styles from '../../../styles/styles';
import BackButton from '../../../components/BackButton';
import UserFollowPane from './components/UserFollowPane';
import theme from '../../../styles/theme';
import SubscribersAvatar from './components/SubscribersAvatar';
import ReadMore from '../../../components/ReadMore';
import ShareOn from '../../../components/ShareOn';
import {useSelector} from 'react-redux';

const ItemDetails = ({navigation}) => {
  const isDarkThemed = useSelector(state => state.appState.isDarkThemed);
  const darkThemedStyle = useMemo(() => {
    return {
      container: {
        ...styles.container,
        backgroundColor: isDarkThemed ? theme.colors.dark : theme.colors.white,
      },
      imageWrapperContainer:{...ItemDetailsStyles.imageWrapperContainer,
        backgroundColor: isDarkThemed ? theme.colors.dark : theme.colors.white,
      },
      itemNameTextStyle:{...ItemDetailsStyles.itemNameTextStyle,
        color: isDarkThemed ? theme.colors.white : theme.colors.grey,
      },
      contentWrapper:{...ItemDetailsStyles.contentWrapper, backgroundColor: isDarkThemed ? theme.colors.dark: theme.colors.white},
      userPostDescStlye:{...ItemDetailsStyles.userPostDescStlye, color: isDarkThemed ? theme.colors.white : theme.colors.black,},
      itemNameTextStyle:{...ItemDetailsStyles.itemNameTextStyle, color: isDarkThemed ? theme.colors.white : theme.colors.black,},
    };
  }, [isDarkThemed]);
  return (
    <SafeAreaView style={darkThemedStyle.container}>
      <BackButton  navigation={navigation}/>
      <ScrollView   contentContainerStyle={ItemDetailsStyles.scrollViewContentContainerStyle}>
        
        <View
          style={darkThemedStyle.imageWrapperContainer}>
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
          style={darkThemedStyle.contentWrapper}>
          <View style={ItemDetailsStyles.paddingVertical}>
            {/* title */}
            <Text style={darkThemedStyle.itemNameTextStyle}>Pancake</Text>
            {/* date and time of posting */}
            <Text style={darkThemedStyle.userPostDescStlye}>
              December 12, 2022
            </Text>
          </View>

          <View style={ItemDetailsStyles.paddingVertical}>
            {/* subscribers- title */}
            <Text style={darkThemedStyle.itemNameTextStyle}>Subscribers</Text>
            {/* subscrivers Avaatar */}
            <SubscribersAvatar />
          </View>

          <View style={ItemDetailsStyles.paddingVertical}>
            {/* Description- title */}
            <Text style={darkThemedStyle.itemNameTextStyle}>Description</Text>
            {/* item description */}
            <ReadMore
              text={
                'Eggless pancake, 5 in numbers topped with some berries and maple syrup.Eggless pancake, 5 in numbers topped with some berries and maple syrup. Eggless pancake, 5 in numbers topped with some berries and maple syrup.Eggless pancake, 5 in numbers topped with some berries and maple syrup.'
              }
              maxLength={100}
            />
          </View>
          <View style={ItemDetailsStyles.paddingVertical}>
            {/* Description- title */}
            <Text style={darkThemedStyle.itemNameTextStyle}>Description</Text>
            {/* item description */}
            <ReadMore
              text={
                'Eggless pancake, 5 in numbers topped with some berries and maple syrup.Eggless pancake, 5 in numbers topped with some berries and maple syrup. Eggless pancake, 5 in numbers topped with some berries and maple syrup.Eggless pancake, 5 in numbers topped with some berries and maple syrup.'
              }
              maxLength={100}
            />
          </View>

          <View style={{paddingVertical: 10}}>
            <Text style={darkThemedStyle.itemNameTextStyle}>Share On</Text>
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
          <Text style={{fontFamily:'sans-serif-condensed', color:theme.colors.white,fontSize:theme.fontSizes.medium, fontWeight:'700'}}>Add to Cart</Text>
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
  userPostDescStlye: {fontFamily: 'sans-serif-condensed', fontSize: 12,color:theme.colors.dark},
  imageWrapperContainer:{
    flex: 2.5,
    backgroundColor: theme.colors.light,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  contentWrapper:{
    flex: 0.5,
    paddingHorizontal: 20,
  },paddingVertical:{paddingVertical: 10},
  scrollViewContentContainerStyle:{flexGrow: 1, paddingBottom:60}
});
