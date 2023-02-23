import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CommentIconWithCount = ({commentCount}) => {
  return (
    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon name="comment" size={20} color="#666" />
      <Text style={{marginLeft: 5, color: '#666'}}>{commentCount}</Text>
    </TouchableOpacity>
  );
};

export default CommentIconWithCount;
