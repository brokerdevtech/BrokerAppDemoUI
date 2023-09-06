import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../config/Colors';
import Stories from '../components/feeds/Stories';
import Recommend from '../components/feeds/Recommend';
import Feed from '../components/feeds/Feed';

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Stories />
        <Recommend />
        <Feed />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  storiesWrapper: {
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
});

export default FeedScreen;
