import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavouriteIcon = ({isFavourite, likesCount}) => {
  return (
    <TouchableOpacity style={{ marginRight:10,flexDirection: 'row', alignItems: 'center' }}>
      {isFavourite ? (
        <Icon name="heart" size={20} color="#ff0000" />
      ) : (
        <Icon name="heart-o" size={20} color="#ff0000" />
      )}
       <Text style={{ marginLeft: 5, color: '#666' }}>{likesCount ? likesCount : 20}</Text>
    </TouchableOpacity>
  );
};

export default FavouriteIcon;
