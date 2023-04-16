
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from "@expo/vector-icons";
import { Provider } from 'react-redux';



import FavoritesScreen from './study/screens/FavoritesScreen';
import ChooseTextScreen from './study/screens/ChooseTextScreen';
import ContentScreen from './study/screens/ContentScreen';
import ChooseLevelScreen from './study/screens/ChooseLevelScreen';
import store from './study/redux/store';

const Stack = createNativeStackNavigator ();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1e2de1" },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: "#f1bf00"}, 
        drawerContentStyle: {backgroundColor: "#aa151b"},
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "3f2f25",
        drawerActiveTintColor: "white"
      }}
    >
      <Drawer.Screen
        name="Levels Screen"
        component={ChooseLevelScreen}
        options={{
          title: 'Lütfen Seviyenizi Seçiniz', 
          headerStyle: {
            backgroundColor: "#1e2de1" ,
          },
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size}/> )
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} 
       options={{
        title: 'All Favorites',
        drawerIcon: ({ color, size }) => (
          <Ionicons name="star" color={color} size={size}/> 
          )}}
      />
    </Drawer.Navigator>
  );
}



function App() {

  return (
    <>
    <StatusBar style="light" />
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoryScreen" component={DrawerNavigator}
        options={{headerShown:false}}/>
        
        <Stack.Screen name= "ItemScreen" component={ChooseTextScreen}
        options= {{
          title: "Lütfen Metin Seçiniz",
          headerStyle :{backgroundColor: "#1e2de1"},
          headerTitleStyle: {color :"white"},
          headerTintColor: "white",
         
        }}
        />
        <Stack.Screen name="ContentPage" component={ContentScreen} 
        options= {{
          title: "",
          headerStyle :{backgroundColor:"#1e2de1"},
          headerTitleStyle: {color :"white"},
          headerTintColor: "white"
        }}/>
      
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop:80
  },
});

