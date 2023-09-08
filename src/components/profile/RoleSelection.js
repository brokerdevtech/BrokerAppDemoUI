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
import ProfileHeader from "./ProfileHeader"

const RoleSelection = () => {
    console.log("roleeeee",role)
    return (
    <View style={styles.container}>
        <ProfileHeader title={"Role Selection"}/>
      <View style={styles.followingCount}>
          <Text style={styles.Sub_Header}>{"Broker"}</Text>
            <TouchableOpacity style={styles.arrow}>
            <Image
                source={require('../../assets/images/Down-Arrow.png')}/>
            </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '2%',
  },
  Sub_Header: {
    fontSize: 12,
    fontWeight: '500',
  },
  title: {
    fontSize: 12,
    fontWeight: '400',
  },
  followingCount: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    justifyContent: 'space-between',
  },
  arrow: {
    alignSelf: 'center',
    width:15,
    height:12,
    marginHorizontal:10
  },
  edit: {
    alignSelf: 'center',
    marginHorizontal:10
  },
  editText: {
    fontSize:12,
    fontWeight:"500",
    color:"#006BED"
  },
});

export default RoleSelection;
