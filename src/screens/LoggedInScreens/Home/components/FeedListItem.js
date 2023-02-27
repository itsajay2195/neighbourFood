import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import theme from '../../../../styles/theme';
import FavouriteIcon from '../../../../components/Favourites';
import CommentIconWithCount from '../../../../components/Comments';
import {LOGGED_IN_SCREEN_NAME} from '../../../../constants/ScreenConstants';
import Tags from './Tags';
import Icon from 'react-native-vector-icons/FontAwesome';

const FeedListItem = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(LOGGED_IN_SCREEN_NAME.itemDetails);
      }}
      style={styles.container}>
      <View style={styles.userInfoWarapper}>
        <View style={styles.userAvaterWrapper}>
          <Image
            style={styles.userAvatarStyle}
            source={{
              uri: 'https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=',
            }}
          />
        </View>

        <View style={styles.userNameSectionWrapper}>
          <Text style={styles.userNameStyle}>Prabu </Text>
          <Text style={styles.userPostDescStlye}>5 min ago - Chitlapakkam</Text>
        </View>
      </View>

      <View style={styles.bodyWrapper}>
        <View style={styles.contentWrapper}>
          <View style={styles.leftContentWrapper}>
            <Text style={styles.itemNameTextStyle}>Pancake</Text>
            
            {/* <Text style={{color:'grey'}} numberOfLines={2}>
              Eggless pancake, 5 in numbers topped with some berries and maple
              syrup.
            </Text> */}

            <View style={styles.distanceinforWrapper}>
              <View style={{flexDirection:'row', justifyContent:'center', marginRight:10}}>
              <Icon name="map-marker" size={15} color={theme.colors.dark} />
              <Text style={styles.distanceTextStyle}> 8 kms</Text>
              </View>

              <View style={{flexDirection:'row', justifyContent:'center'}}>
              <Icon name="clock-o" size={15} color={theme.colors.dark} />
              <Text style={styles.distanceTextStyle}> 10-15 mins</Text>
              </View>
           
              {/* <Text style={{fontWeight:'700', fontSize:14, color:theme.colors.dark}}> 200 INR</Text> */}
            </View>

            <View style={{paddingTop:5, flexDirection:'row', alignItems:'center'}}>
              <Icon name="star" size={15} color={"gold"} />
              <Text style={{ paddingLeft:5, color:theme.colors.grey,fontSize:theme.fontSizes.small, fontFamily: 'sans-serif', fontWeight:'bold'}}> 4.5</Text>
            </View>
          </View>
          <View style={styles.contentImageWrapper}>
            <Image
              style={styles.contentImageStyle}
              source={{
                uri: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/11/whole-grain-pancake-stack.jpg',
              }}
            />
            <View style={styles.priceWrapper}>
              <Text style={styles.priceText}>10 INR</Text>
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

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: theme.colors.white,
    flex: 0.7,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 20,
  },
  userInfoWarapper: {flex: 0.1, flexDirection: 'row', paddingVertical: 5},
  userAvaterWrapper: {
    height: 40,
    width: 40,
    borderRadius: 50,
    overflow: 'hidden',
  },
  userAvatarStyle: {height: '100%', width: '100%'},
  userNameSectionWrapper: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 5,
  },
  userNameStyle: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
  },
  userPostDescStlye: {color:theme.colors.grey,fontFamily: 'sans-serif-condensed', fontSize: 12},
  bodyWrapper: {
    flex: 0.8,
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  contentWrapper: {paddingVertical: 2, flexDirection: 'row', flex: 1},
  leftContentWrapper: {flex: 0.7},
  headerWrapper: {paddingVertical: 2},
  itemNameTextStyle: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
  },
  contentImageWrapper: {
    flex: 0.3,
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  contentImageStyle: {height: '100%', width: '100%'},
  tagsWrapper: {flexDirection: 'row', paddingVertical: 10},
  indulgenceSectionWrapper: {
    flex: 0.1,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // use rgba color to set the background to transparent black
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  priceText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.medium,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 1)', // add a black text shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },  
  distanceinforWrapper:{ flexDirection:'row', paddingTop:10, alignItems:'center',},
  distanceTextStyle:{paddingLeft:3, color:theme.colors.grey,fontSize:theme.fontSizes.small, fontFamily: 'sans-serif', fontWeight:'bold'}
});
