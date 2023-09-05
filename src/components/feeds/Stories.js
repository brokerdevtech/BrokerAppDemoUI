import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import {colors} from '../../config/Colors';

const Stories = () => {

  const stories = [
    { image: require('../../assets/images/face.jpeg'), name: 'John' },
    { image: require('../../assets/images/face.jpeg'), name: 'Alice' },
    { image: require('../../assets/images/face.jpeg'), name: 'Nicolas' },
    { image: require('../../assets/images/face.jpeg'), name: 'barbie_girlzzz' },
    { image: require('../../assets/images/face.jpeg'), name: 'Arneo' },
  ];
  const renderStories = () => {
    return stories.map((story, index) => (
      <TouchableOpacity
        key={index}
        style={styles.otherStoryImageWrapper}
        onPress={() => console.log(`Story Open ${index+1}`)}
      >
        <View style={styles.storyRound}>
          <Image style={styles.otherStories} source={story.image} />
        </View>
        <Text style={styles.profileName}>{story.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.storiesHeaderWrapper}>
        <Text style={styles.storiesHeaderText}>Brokers Stories</Text>
      </View>
      <ScrollView horizontal={true}>
        {/* Render your own story */}
        <TouchableOpacity
          style={styles.myStoryImageWrapper}
          onPress={() => console.log('Your Story Open')}
        >
          <Image
            style={styles.myStoryImage}
            source={require('../../assets/images/face.jpeg')}
          />
          <Text style={styles.profileName}>Catherin</Text>
        </TouchableOpacity>
        {/* Render stories from the props */}
        {renderStories()}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flex:1,
    width:"100%",
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
  storiesHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  storiesHeaderText: {
    fontSize: 16,
    fontWeight: '500',
  },
  myStoryImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  myStoryImageWrapper: {
    padding: 10,
  },
  otherStories: {
    position: 'absolute',
    width: 72,
    height: 72,
    borderRadius: 50,
    margin: 2,
  },
  storyRound: {
    borderColor: '#1D7BBF',
    height: 80,
    width: 80,
    borderWidth: 2,
    borderRadius: 50,
  },
  otherStoryImageWrapper: {
    margin: 5,
  },
  profileName: {
    fontSize: 11,
    textAlign: 'center',
    fontWeight: '400',
  },
});
