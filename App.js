import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CloudScreen from './screens/CloudScreen';
import DashBoardScreen from './screens/DashBoardScreen';
import SocieteScreen from './screens/SocieteScreen';
import TicketsScreen from './screens/TicketsScreen';
import IconWithLabel from './component/IconWithLabel'
import { createStackNavigator } from "@react-navigation/stack";
// import Header from "./component/Header"



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      {/* <Header /> */}

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor:'#0000'
          },
          headerTitle: {

          },
          tabBarStyle: {
            position: 'absolute',
            bottom: 1,
            left: 10,
            right: 10,
            height: 50,
            borderRadius: 15,
            elevation: 5,
          },
        }}>
          {/* <Stack.Screen name="tabe"> */}

        <Tab.Screen
          name=" "
          component={DashBoardScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <IconWithLabel
                focused={focused}
                labelText="DashBoard"
                iconName="apps-outline"
                activeColor="#00adb5"
                />
                );
              },
            }}
            />
        <Tab.Screen
          name="  "
          component={TicketsScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <IconWithLabel
                focused={focused}
                labelText="Tickets"
                iconName="trending-up-outline"
                activeColor="#00adb5"
                />
                );
              },
            }}
            />
        <Tab.Screen
          name="   "
          component={SocieteScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <IconWithLabel
                focused={focused}
                labelText="Societe"
                iconName="star-outline"
                activeColor="#00adb5"
                />
                );
              },
            }}
            />
        <Tab.Screen
          name="    "
          component={CloudScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <IconWithLabel
                focused={focused}
                labelText="Cloud"
                iconName="person-outline"
                activeColor="#00adb5"
                />
                );
              },
            }}
            />
            {/* </Stack.Screen> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});