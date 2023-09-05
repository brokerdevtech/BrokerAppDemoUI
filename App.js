import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FeedScreen from './src/screens/FeedScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomHeader from './src/components/feeds/CustomHeader';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          header: () => (
            <CustomHeader
              // title="BrokerApp"
              showCitySelection={true} // Set to false if you don't need city selection
            />
          ),
        }}
      >
        <Stack.Screen name="Home" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight, // Use StatusBar.currentHeight
  },
});
