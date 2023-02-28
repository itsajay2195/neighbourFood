import { StyleSheet } from "react-native";
import theme from "./theme";


export const FeedItemLightstyles = StyleSheet.create({
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
      color: theme.colors.black,
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
      color: theme.colors.black,
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
    distanceTextStyle:{paddingLeft:3, color:theme.colors.grey,fontSize:theme.fontSizes.small, fontFamily: 'sans-serif', fontWeight:'bold'},
    mapMarkerWrapper:{flexDirection:'row', justifyContent:'center', marginRight:10},
    iconColorStyle:{color:theme.colors.black},
    clockIconWrapper:{flexDirection:'row', justifyContent:'center'},
    straIconWrapper:{paddingTop:5, flexDirection:'row', alignItems:'center'},
    starIconColorStyle:{color:"gold"}
  });
  

  export const FeedItemDarkstyles  = StyleSheet.create({
    container: {
      margin: 10,
      padding: 15,
      backgroundColor: theme.colors.dark,
      flex: 0.7,
      overflow: 'hidden',
      shadowColor: theme.colors.white,
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
      color: theme.colors.white,
      fontFamily: 'sans-serif',
      fontSize: theme.fontSizes.medium,
      fontWeight: 'bold',
    },
    userPostDescStlye: {color:theme.colors.white,fontFamily: 'sans-serif-condensed', fontSize: 12},
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
      color: theme.colors.white,
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
    distanceTextStyle:{paddingLeft:3, color:theme.colors.white,fontSize:theme.fontSizes.small, fontFamily: 'sans-serif', fontWeight:'bold'},
    mapMarkerWrapper:{flexDirection:'row', justifyContent:'center', marginRight:10},
    iconColorStyle:{color:theme.colors.white},
    clockIconWrapper:{flexDirection:'row', justifyContent:'center'},
    straIconWrapper:{paddingTop:5, flexDirection:'row', alignItems:'center'}
  });
  