import React from 'react'
import {
  SafeAreaView,
} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Header from '../../components/Header'

const Tab = createMaterialBottomTabNavigator()

const Layout = ({
  routes,
} : {
  routes: any,
}) => (
  <SafeAreaView style={{ height: '100%' }}>
    <Header />
    <Tab.Navigator>
      {routes.filter((route: any) => route.showOnTab).map((route: any) => (
        <Tab.Screen
          key={route.key}
          component={route.component}
          name={route.name}
          options={{
            tabBarIcon: ({ color }) => <MaterialIcons color={color} size={26} name={route.icon} />
          }}
        />
      ))}
    </Tab.Navigator>
  </SafeAreaView>
)

export default Layout
