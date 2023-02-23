import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import theme from '../../../../styles/theme';
import FavouriteIcon from '../../../../components/Favourites';
import CommentIconWithCount from '../../../../components/Comments';
import Tags from './Tags';

const FeedListItem = () => {
  return (
    <View
      style={{
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
        borderRadius:20
      }}>
      <View style={{flex: 0.1, flexDirection: 'row', paddingVertical:5}}>
        <View
          style={{height: 40, width: 40, borderRadius: 50, overflow: 'hidden'}}>
          <Image
            style={{height: '100%', width: '100%'}}
            source={{
              uri: 'https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=',
            }}
          />
        </View>

        <View style={{flex: 1, flexDirection: 'column', paddingHorizontal: 5}}>
          <Text style={{color:"black", fontFamily: 'sans-serif', fontSize:theme.fontSizes.medium, fontWeight:'bold'}}>Prabu </Text>
          <Text style={{fontFamily: 'sans-serif-condensed', fontSize:12}}>5 min ago - Chitlapakkam</Text>
        </View>
        {/* //avatarStyl
            //username */}
      </View>

      <View style={{flex: 0.8, display: 'flex', flexDirection: 'column', paddingVertical:10}}>
        <View style={{paddingVertical: 2}}>
            <Text style={{color:"black",fontFamily: 'sans-serif', fontSize:theme.fontSizes.medium, fontWeight:'bold'}}>Pancake</Text>
        </View>

        <View style={{paddingVertical: 2}}>
          <Text numberOfLines={2}>
            Eggless pancake, 5 in numbers topped with some berries and maple syrup.
          </Text>
        </View>

        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <Tags label="#food" onPress={() => console.log('Tag 1 pressed')} />
          <Tags label="#english" onPress={() => console.log('Tag 1 pressed')} />
        </View>

        <View
          style={{
            height: 220,
            width: '100%',
            overflow: 'hidden',
            borderRadius: 20,
          }}>
          <Image
            style={{height: "100%", width: '100%'}}
            source={{
              uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            }}
          />
        </View>
        {/* //title
            //descrption 
            //https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
            //tags
            images
            */}
      </View>

      <View
        style={{
          flex: 0.1,
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <FavouriteIcon isFavourite={true} />
        <CommentIconWithCount commentCount={10} />
      </View>
    </View>
  );
};

export default FeedListItem;
