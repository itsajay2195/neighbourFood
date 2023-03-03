import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import BackButton from '../../../components/BackButton';
import styles from '../../../styles/styles';
import theme from '../../../styles/theme';
import {foods1} from '../../../constants/data';

const UserDayMenu = ({navigation}) => {
  const animationRef = useRef(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={UserDayMenuStyles.renderItemWrapper}>
        <Image
          style={UserDayMenuStyles.renderITemImageStyle}
          source={{uri: item.imageUrl}}
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const ListHeaderComponent=()=>(
    <View >
      <Text style={UserDayMenuStyles.flatListHeaderText}>
      Today's savory sensations
      </Text>
    </View>
  )

  return (
    <View style={UserDayMenuStyles.container}>
      <BackButton navigation={navigation} />
      <View
        style={UserDayMenuStyles.userINfoWrapper}>
        <View style={{height: 100, width: 100}}>
          {/* <LottieView
            style={{height: 80}}
            source={require('../../../assets/animations/cooking.json')}
            autoPlay
            autoSize
            speed={0.8}
            loop={true}
            ref={animationRef}
          /> */}
          <Image
            style={UserDayMenuStyles.userAvaterStyle}
            source={{
              uri: 'https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=',
            }}
          />

          <Text
            style={UserDayMenuStyles.userNameTextStyle}>
            Prabhu
          </Text>
        </View>
      </View>
      <View style={{flex: 1, paddingVertical:20}}>
        <FlatList
          data={foods1}
          ListHeaderComponent={ListHeaderComponent}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default UserDayMenu;

const UserDayMenuStyles = StyleSheet.create({
  container: {...styles.container, backgroundColor: 'white'},
  renderItemWrapper:{
    padding: 30,
    height: 100,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderITemImageStyle:{height: 80, borderRadius: 20, width: '100%'},
  flatListHeaderText:{textAlign:'center', fontSize:theme.fontSizes.large, paddingVertical:10, fontWeight:'700'},
  userINfoWrapper:{
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },userAvaterStyle:{height: '100%', width: '100%', borderRadius: 50},
  userNameTextStyle:{
    textAlign: 'center',
    padding: 10,
    fontSize: theme.fontSizes.medium,
    fontWeight: '700',
    fontFamily: 'sans-serif-condensed',
  }
});
