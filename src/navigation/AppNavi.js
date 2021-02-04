import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../state/actions/meals';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Platform } from 'react-native';
import { Item } from 'react-navigation-header-buttons';
import HomeScreen from '../screens/HomeScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { MyHeaderButton } from '../components/MyHeaderButton';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FiltersStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Filter'
      component={FiltersScreen}
      options={({ route, navigation }) => ({
        title: 'Filter',
        headerRight: () => (
          <MyHeaderButton>
            <Item
              title='Save'
              iconName='ios-save'
              onPress={() => route.params.save()}
            />
          </MyHeaderButton>
        ),
      })}
    />
  </Stack.Navigator>
);

const FavoritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Favorites'
      component={FavoritesScreen}
      options={{ title: 'Favorites' }}
    />
  </Stack.Navigator>
);

const StackNavi = () => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator>
      <Stack.Screen name='Categories' component={HomeScreen} />
      <Stack.Screen
        name='CategoryMealsScreen'
        component={CategoryMealsScreen}
        options={({ route, navigation }) => ({
          title: route.params.categoryTitle,
        })}
      />

      <Stack.Screen
        name='Meal Detail'
        component={MealDetailScreen}
        options={({ route, navigation }) => ({
          title: route.params.title,
          headerRight: () => (
            <MyHeaderButton>
              <Item
                title='Favorite'
                iconName={route.params.isFav ? 'ios-star' : 'ios-star-outline'}
                onPress={() => dispatch(toggleFavorite(route.params.mealId))}
              />
            </MyHeaderButton>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavi = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name='Home'
        component={StackNavi}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name='ios-restaurant'
              size={25}
              color={Colors.primaryColor}
            />
          ),

          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
            ) : (
              'Meals'
            ),
        }}
      />
      <Tab.Screen
        name='Filters'
        component={FiltersStack}
        options={{
          tabBarIcon: () => (
            <Ionicons name='filter' size={25} color={Colors.primaryColor} />
          ),

          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={{ fontFamily: 'open-sans-bold' }}>Filter</Text>
            ) : (
              'Filter'
            ),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavoritesStack}
        options={{
          tabBarIcon: () => (
            <Ionicons name='ios-star' size={25} color={Colors.primaryColor} />
          ),

          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text>
            ) : (
              'Favorites'
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavi;
