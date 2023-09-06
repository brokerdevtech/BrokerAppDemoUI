import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { colors } from '../../config/Colors';

const ProfileScreen = ({title,subTitle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.followingCount}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.Sub_Header}>{subTitle}</Text>
        </View>
        <View style={styles.arrow}>
          <Image source={require('../../assets/images/Left_Arrow.png')} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '2%',
  },
  Sub_Header: {
    fontSize: 11,
    fontWeight: '400',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
  },
  followingCount: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    justifyContent: 'space-between',
  },
  arrow: {
    alignSelf: 'center',
  },
});

export default ProfileScreen;
