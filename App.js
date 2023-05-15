import React from 'react';
import {StatusBar} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealsDeatailScreen from './screens/MealsDetailScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';

function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  function DrawerNavigation() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Categories" component={CategoriesScreen} />
        <Drawer.Screen name="FavouriteScreen" component={FavouriteScreen} />
      </Drawer.Navigator>
    );
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={DrawerNavigation} />
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
          <Stack.Screen
            name="MealsDetailsScreen"
            component={MealsDeatailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
export default App;
