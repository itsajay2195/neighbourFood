import React, {useState} from 'react';
import {Text} from 'react-native';
import theme from '../styles/theme';
import { useSelector } from 'react-redux';

const ReadMore = ({text, maxLength}) => {
  const isDarkThemed = useSelector(state=>state.appState.isDarkThemed)
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll(!showAll);
  const displayText = showAll ? text : `${text.slice(0, maxLength || 50)}...`;


  return (
    <>
      <Text onPress={toggleShowAll} style={{...textStyle,color:isDarkThemed ?theme.colors.white  :  theme.colors.grey}}>
        {displayText}
        {text.length > maxLength && (
          <Text style={{color:theme.colors.info}}>{showAll ? ' Read less' : 'Read more'}</Text>
        )}
      </Text>
    </>
  );
};

export default ReadMore;

const textStyle = {fontFamily: 'sans-serif-condensed', fontSize: 12,paddingTop:5};
