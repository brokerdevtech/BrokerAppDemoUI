import React from 'react';
import { View, Text, TouchableOpacity, Image,StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const CustomHeader = ({  showCitySelection }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection:"row",height:36,justifyContent:"center",alignItems:"center"}}>
      <Text style={styles.appTitleMain}>{"Broker"}</Text>
      <Text style={styles.appTitle}>{"App"}</Text>
      {/* <Image
            source={require('../assets/images/BrokerApp.png')}
            // style={styles.icon}
          /> */}
      </View>
      <TouchableOpacity style={{flexDirection:"row",height:36,justifyContent:"center",alignItems:"center"}} onPress={() => console.log('CitySelection')}>
        {showCitySelection && (
          <>
          <Image
            source={require('../../assets/images/location.png')}
            style={styles.icon}
          />
          <Text style={styles.cityText}>Select City</Text>
          <Image
            source={require('../../assets/images/Down_Arrow.png')}
            style={styles.city_arrow_icon}
          />
          </>
          
        )}
      </TouchableOpacity>
      
      <View style={styles.iconContainer}>
        <TouchableOpacity style={{width:25.25,height:24,marginLeft: 10}} onPress={() => console.log("Notification Screen")}>
          <Image
            source={require('../../assets/images/notification_icon.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{width:25.25,height:24,marginLeft: 10}} onPress={() => console.log('Messages Screen')}>
          <Image
            source={require('../../assets/images/Group.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
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
  cityText: {
    color: '#000',
    fontSize: 11,
    marginRight: 10,
  },
  appTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 400,
  },
  appTitleMain: {
    color: '#000',
    fontSize: 20,
    fontWeight: 700,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 18.83,
    height: 19.5,
    color: '#000',
  },
  city_arrow_icon: {
    width: 5,
    height: 3,
    color: '#000',
  },
  logo:{

  }
};

export default CustomHeader;
