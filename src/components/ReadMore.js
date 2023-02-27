import React, {useState} from 'react';
import {Text} from 'react-native';
import theme from '../styles/theme';

const ReadMore = ({text, maxLength}) => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll(!showAll);
  const displayText = showAll ? text : `${text.slice(0, maxLength || 50)}...`;

  return (
    <>
      <Text onPress={toggleShowAll} style={textStyle}>
        {displayText}
        {text.length > maxLength && (
          <Text style={{color:theme.colors.info}}>{showAll ? ' Read less' : 'Read more'}</Text>
        )}
      </Text>
    </>
  );
};

export default ReadMore;

const textStyle = {fontFamily: 'sans-serif-condensed', fontSize: 12,color:'grey' ,paddingTop:5};
