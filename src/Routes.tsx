import React from 'react'
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import LoginPage from './pages/Login'
import SettingsPage from './pages/Settings'
import TransactionsPage from './pages/Transactions'

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

const renderIcon = (name: string) => ({ color } : { color : string }) => (
  <MaterialIcons
    color={color}
    name={name}
    size={24}
  />
)

const TabRoutes = () => (
  <Tab.Navigator shifting>
    <Tab.Screen
      name="Transactions"
      component={TransactionsPage}
      options={{
        tabBarIcon: renderIcon('attach-money'),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsPage}
      options={{
        title: "Settings",
        tabBarIcon: renderIcon('settings'),
      }}
    />
  </Tab.Navigator>
)

const LoggedArea = () => (
  <Stack.Navigator
    initialRouteName="Transactions"
    screenOptions={{
      headerLeft: () => null,
    }}
  >
    <Stack.Screen
      name="Transactions"
      component={TabRoutes}
      options={({ route }) => ({
        headerTitle: getFocusedRouteNameFromRoute(route),
      })}
    />
  </Stack.Navigator>
)

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoggedArea"
        component={LoggedArea}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
