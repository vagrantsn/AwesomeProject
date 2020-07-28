import React from 'react'
import {
  SafeAreaView,
  View,
} from 'react-native'

import routes from '../routes'

import Header from '../components/Header'
import BottomNavigation from '../components/BottomNavigation'

const Layout = ({
  children,
}: { children: React.ElementType }) => {
  return (
    <SafeAreaView style={{ height: '100%' }}>
      <Header />
      <View>
        {children}
      </View>
      <BottomNavigation routes={routes} />
    </SafeAreaView>
  )
}

export default Layout
