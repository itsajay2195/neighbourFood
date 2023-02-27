import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from '../../../styles/styles';
import theme from '../../../styles/theme';
import BackButton from '../../../components/BackButton';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation}/>
      <View style={ProfileSyles.profilePicWrapper}>
        <View style={ProfileSyles.profilePicContainer}>
          <Image
            source={{uri: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg'}}
            style={ProfileSyles.avatarImageStyle}></Image>

        </View>
        <Text style={{paddingVertical:5, fontFamily:'sans-serif-condensed', color:theme.colors.dark,fontSize:theme.fontSizes.large, fontWeight:'700'}}> Marcus Rashford</Text>
        <Text style={{ fontFamily:'sans-serif', color:theme.colors.dark,fontSize:theme.fontSizes.medium, fontWeight:'400'}}> +919710115165</Text>
      </View>

      <View style={ProfileSyles.profileInfoSection}>
      <View>
      <Icon name="user-shield" size={14} color={"black"} />
    </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const ProfileSyles = StyleSheet.create({
  profilePicWrapper:{flex: 0.4, justifyContent: 'center', alignItems: 'center', borderWidth:1},
  profilePicContainer: {height: 200, width: 200, borderWidth: 2.25, borderColor: theme.colors.blueSecondary, borderStyle: 'dashed', borderRadius:100, padding:5},
  avatarImageStyle: {height: '100%', width: '100%', borderRadius: 100},
  profileInfoSection:{flex:0.6, backgroundColor:'red'}
})
