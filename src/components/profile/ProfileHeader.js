import React from 'react';
import { View, Text, TouchableOpacity, Image,StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

const ProfileHeader = ({title}) => {
//   const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection:"row",height:36,justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity>
        <Image
            style={{ width: 20, height: 20 }}
            source={require('../../assets/images/profilePage/leftArrow.png')}
          />
        </TouchableOpacity>
      <Text style={styles.appTitleMain}>{title}</Text>
      </View>
    </View>
  );
};

const styles = {
  headerContainer: {
    marginTop: StatusBar.currentHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 7,
    width:"100%",
    height:36
    // backgroundColor: '#007acc', // Customize the background color
  },
  appTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 400,
  },
  appTitleMain: {
    color: '#000',
    fontSize: 16,
    fontWeight: "400",
  },
};

export default ProfileHeader;
