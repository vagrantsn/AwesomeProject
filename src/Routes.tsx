import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import LoginPage from './pages/Login'
import SettingsPage from './pages/Settings'
import TransactionsPage from './pages/Transactions'

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

const TabRoutes = () => (
  <Tab.Navigator>
    <Tab.Screen name="Transactions" component={TransactionsPage} />
  </Tab.Navigator>
)

const LoggedArea = () => (
  <Stack.Navigator>
    <Stack.Screen name="Logout" component={SettingsPage} />
    <TabRoutes />
  </Stack.Navigator>
)

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="LoggedArea" component={LoggedArea} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes
