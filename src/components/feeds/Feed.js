import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../../config/Colors';
const Feed = () => {

  const feedData = [
    {
      profileThumb: require('../../assets/images/face.jpeg'),
      name: 'John',
      feedImage: require('../../assets/images/Broker.jpeg'),
    },
    {
      profileThumb: require('../../assets/images/Broker.jpeg'),
      name: 'Alice',
      feedImage: require('../../assets/images/face.jpeg'),
    },
    {
      profileThumb: require('../../assets/images/developer.jpeg'),
      name: 'Developer',
      feedImage: require('../../assets/images/developer.jpeg'),
    },
    // Add more feed items as needed
  ];
  
  return (
    <View style={styles.container}>
      {feedData.map((feed) => (
        <>
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeftWrapper}>
          <Image
            style={styles.profileThumb}
            source={feed.profileThumb}
          />
          <Text style={styles.headerTitle}>{feed.name}</Text>
        </View>
        <Image
          style={styles.dots}
          source={require('../../assets/images/3dots.png')}
        />
      </View>
      <View>
        <Image
          style={styles.feedImage}
          source={feed.feedImage}
        />
      </View>
      <View style={styles.feedImageFooter}>
        <View style={styles.feddimageFooterLeftWrapper}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/heartfeed.jpg')}
          />
          <Image
            style={styles.icon}
            source={require('../../assets/images/comment.png')}
          />
          <Image
            style={styles.icon}
            source={require('../../assets/images/messagefeed.png')}
          />
        </View>
        <Image
          style={styles.icon}
          source={require('../../assets/images/bookmarkfeed.png')}
        />
      </View>
      <View style={styles.underLineWRapper}>
        <View style={styles.underLine} />
      </View>
      </>
      ))}
    </View>
  );
};

export default Feed;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex:1,
    width:"100%",
    marginTop:10
  },
  profileThumb: {
    width: 36,
    height: 36,
    borderRadius: 100,
  },
  headerWrapper: {
    // display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:8,
    width:375
  },
  icon: {
    width: 25,
    height: 25,
    opacity: 0.5,
    margin:5,
    // alignSelf:"center"
  },
  dots:{
    width: 13,
    height: 3,
    // opacity: 0.5,
    marginRight:20,
    alignSelf:"center"
  },
  headerLeftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:7,
    width:122
  },
  headerTitle: {
    fontSize: 12,
    fontWeight: '400',
  },
  feedImage: {
    width: '100%',
    height:300
  },
  feedImageFooter: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feddimageFooterLeftWrapper: {
    flexDirection: 'row',
  },
  underLine: {
    height: 1,
    backgroundColor: colors.gray1,
  },
  underLineWRapper: {
    marginLeft: 10,
    marginRight: 10,
  }
});
