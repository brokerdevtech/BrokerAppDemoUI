import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../config/Colors';
import Stories from '../components/feeds/Stories';
import Recommend from '../components/feeds/Recommend';
import Feed from '../components/feeds/Feed';
import { ScrollView } from 'react-native';
export class FeedScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView  >
          <Stories />
          <Recommend/>
          <Feed/>
        </ScrollView>
      </View>
    );
  }
}

export default FeedScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginTop:10
  },
  storiesWrapper: {
    // backgroundColor: colors.gray1,
    borderBottomColor: colors.gray1,
    borderBottomWidth: 1,
  },
});
