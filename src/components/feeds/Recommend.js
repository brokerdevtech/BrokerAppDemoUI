import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const Recommend = () => {

  const brokers = [
    { image: require('../../assets/images/Broker.jpeg'), name: 'Andrew' },
    { image: require('../../assets/images/Broker.jpeg'), name: 'Amanda' },
    { image: require('../../assets/images/Broker.jpeg'), name: 'Anderson' },
    { image: require('../../assets/images/Broker.jpeg'), name: 'Samantha' },
    { image: require('../../assets/images/Broker.jpeg'), name: 'Jakarta' },
  ];

  const developers = [
    { image: require('../../assets/images/developer.jpeg'), name: 'Andrew' },
    { image: require('../../assets/images/developer.jpeg'), name: 'Amanda' },
    { image: require('../../assets/images/developer.jpeg'), name: 'Anderson' },
    { image: require('../../assets/images/developer.jpeg'), name: 'Samantha' },
    { image: require('../../assets/images/developer.jpeg'), name: 'Jakarta' },
  ];

  return (
    <>
    <View style={styles.container}>
      <View style={styles.storiesHeaderWrapper}>
        <Text style={styles.storiesHeaderText}>Recommended Brokers</Text>
      </View>
      <ScrollView horizontal={true}>
      {brokers.map((broker, index) => (
      <TouchableOpacity
        key={index}
        style={styles.otherStoryImageWrapper}
        onPress={() => console.log(`Story Open ${index+1}`)}
      >
        <View style={styles.storyRound}>
          <Image style={styles.otherStories} source={broker.image} />
        </View>
        <Text style={styles.profileName}>{broker.name}</Text>
      </TouchableOpacity>
    ))}
      </ScrollView>
    </View>
    <View style={styles.container}>
    <View style={styles.storiesHeaderWrapper}>
      <Text style={styles.storiesHeaderText}>Featured Developers</Text>
    </View>
    <ScrollView horizontal={true}>
    {developers.map((developer, index) => (
    <TouchableOpacity
      key={index}
      style={styles.otherStoryImageWrapper}
      onPress={() => console.log(`Story Open ${index+1}`)}
    >
      <View style={styles.storyRound}>
        <Image style={styles.otherStories} source={developer.image} />
      </View>
      <Text style={styles.profileName}>{developer.name}</Text>
    </TouchableOpacity>
  ))}
    </ScrollView>
  </View>
  </>
  );
};

export default Recommend;

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flex:1,
    width:"100%",
    marginTop:10
  },
  storiesHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  storiesHeaderText: {
    fontSize: 16,
    fontWeight: '400',
  },
  myStoryImage: {
    width: 75,
    height: 75,
    // borderRadius: 50,
  },
  myStoryImageWrapper: {
    padding: 10,
  },
  otherStories: {
    position: 'absolute',
    width: 70,
    height: 70,
    // borderRadius:"1px",
    margin: 2,
  },
  storyRound: {
    // borderColor: '#1D7BBF',
    height: 80,
    width: 80,
    // borderWidth: 2,
    // borderRadius: 50,
  },
  otherStoryImageWrapper: {
    margin: 5,
  },
  profileName: {
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
});
