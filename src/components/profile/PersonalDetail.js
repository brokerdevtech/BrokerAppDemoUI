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

const PersonalDetail = () => {
    const Details=[{
        title:"Name (as on PAN Card)",
        data:"Anup Srivastav"
    },
    {
        title:"Contact Number",
        data:"9873177927"
    },
    {
        title:"Email ID",
        data:"srivaastavanup@gmail.com"
    },
    {
        title:"Industry",
        data:"Real Estate"
    },
    {
        title:"Broker Partner",
        data:"Broker partner"
    },
    {
        title:"Experience",
        data:"4 years"
    },
    {
        title:"Rera Expiry Date",
        data:"17 April 2024"
    }
]
    return (
    <View style={styles.container}>
        <ProfileHeader title={"Personal Detail"}/>
      {Details.map((data) => (
      <View style={styles.followingCount}>
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.Sub_Header}>{data.data}</Text>
        </View>
        {data.title==="Broker Partner"&&
            <TouchableOpacity style={styles.arrow}>
            <Image
                source={require('../../assets/images/Down-Arrow.png')}/>
            </TouchableOpacity>
        }
        {(data.title==="Email ID"||data.title==="Contact Number")&&
            <TouchableOpacity style={styles.edit}>
            <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
        }
      </View>
      ))}
      
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

export default PersonalDetail;
