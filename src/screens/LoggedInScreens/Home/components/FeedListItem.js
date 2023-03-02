import {Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import theme from '../../../../styles/theme';
import {useSelector} from 'react-redux';
// import FavouriteIcon from '../../../../components/Favourites';
// import CommentIconWithCount from '../../../../components/Comments';
import {LOGGED_IN_SCREEN_NAME} from '../../../../constants/ScreenConstants';
// import Tags from './Tags';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FeedItemDarkstyles, FeedItemLightstyles } from '../../../../styles/FeedItemStyle';

const FeedListItem = ({navigation}) => {
  const isDarkTheme = useSelector(state => state.appState.isDarkThemed);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(LOGGED_IN_SCREEN_NAME.itemDetails);
      }}
      style={isDarkTheme? FeedItemDarkstyles.container : FeedItemLightstyles.container}>
      <View style={isDarkTheme?  FeedItemDarkstyles.userInfoWarapper : FeedItemLightstyles.userInfoWarapper}>
        <TouchableOpacity onPress={()=> navigation.navigate(LOGGED_IN_SCREEN_NAME.userDayMenu)} style={ isDarkTheme? FeedItemDarkstyles.userAvaterWrapper: FeedItemLightstyles.userAvaterWrapper}>
          <Image
            style={FeedItemLightstyles.userAvatarStyle}
            source={{
              uri: 'https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=',
            }}
          />
        </TouchableOpacity>

        <View style={isDarkTheme? FeedItemDarkstyles.userNameSectionWrapper :FeedItemLightstyles.userNameSectionWrapper }>
          <Text style={isDarkTheme?FeedItemDarkstyles.userNameStyle :FeedItemLightstyles.userNameStyle}>Prabu </Text>
          <Text style={isDarkTheme?FeedItemDarkstyles.userPostDescStlye :FeedItemLightstyles.userPostDescStlye}>5 min ago - Chitlapakkam</Text>
        </View>
      </View>

      <View style={isDarkTheme?FeedItemDarkstyles.bodyWrapper :FeedItemLightstyles.bodyWrapper}>
        <View style={isDarkTheme?FeedItemDarkstyles.contentWrapper :FeedItemLightstyles.contentWrapper}>
          <View style={isDarkTheme?FeedItemDarkstyles.leftContentWrapper :FeedItemLightstyles.leftContentWrapper}>
            <Text style={isDarkTheme?FeedItemDarkstyles.itemNameTextStyle :FeedItemLightstyles.itemNameTextStyle}>Pancake</Text>
            
            {/* <Text style={{color:'grey'}} numberOfLines={2}>
              Eggless pancake, 5 in numbers topped with some berries and maple
              syrup.
            </Text> */}

            <View style={isDarkTheme?FeedItemDarkstyles.distanceinforWrapper :FeedItemLightstyles.distanceinforWrapper}>
              <View style={isDarkTheme?FeedItemDarkstyles.mapMarkerWrapper :FeedItemLightstyles.mapMarkerWrapper}>
              <Icon name="map-marker"  style={isDarkTheme? FeedItemDarkstyles.iconColorStyle : FeedItemLightstyles.iconColorStyle } size={15} />
              <Text style={isDarkTheme?FeedItemDarkstyles.distanceTextStyle :FeedItemLightstyles.distanceTextStyle}> 8 kms</Text>
              </View>

              <View style={isDarkTheme?FeedItemDarkstyles.clockIconWrapper :FeedItemLightstyles.clockIconWrapper}>
              <Icon name="clock-o" size={15} style={isDarkTheme? FeedItemDarkstyles.iconColorStyle :FeedItemLightstyles.iconColorStyle}  />
              <Text style={isDarkTheme?FeedItemDarkstyles.distanceTextStyle :FeedItemLightstyles.distanceTextStyle} > 10-15 mins</Text>
              </View>
           
              {/* <Text style={{fontWeight:'700', fontSize:14, color:theme.colors.dark}}> 200 INR</Text> */}
            </View>

            <View style={isDarkTheme ? FeedItemDarkstyles.straIconWrapper : FeedItemLightstyles.straIconWrapper}>
              <Icon name="star" size={15} style={ FeedItemLightstyles.starIconColorStyle} />
              <Text style={{ paddingLeft:5, color:theme.colors.grey,fontSize:theme.fontSizes.small, fontFamily: 'sans-serif', fontWeight:'bold'}}> 4.5</Text>
            </View>
          </View>
          <View style={isDarkTheme?FeedItemDarkstyles.contentImageWrapper :FeedItemLightstyles.contentImageWrapper}>
            <Image
              style={isDarkTheme?FeedItemDarkstyles.contentImageStyle :FeedItemLightstyles.contentImageStyle}
              source={{
                uri: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/11/whole-grain-pancake-stack.jpg',
              }}
            />
            <View style={isDarkTheme?FeedItemDarkstyles.priceWrapper :FeedItemLightstyles.priceWrapper}>
              <Text style={isDarkTheme?FeedItemDarkstyles.priceText :FeedItemLightstyles.priceText}>10 INR</Text>
            </View>
          </View>
        </View>

        {/* <View style={styles.tagsWrapper}>
          <Tags label="#food" onPress={() => console.log('Tag 1 pressed')} />
          <Tags label="#english" onPress={() => console.log('Tag 1 pressed')} />
        </View> */}

        {/* //title
            //descrption 
            //https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
            //tags
            images
            */}
      </View>
{/* 
      <View style={styles.indulgenceSectionWrapper}>
        <FavouriteIcon isFavourite={true} />
        <CommentIconWithCount commentCount={10} />
      </View> */}
    </TouchableOpacity>
  );
};

export default FeedListItem;


