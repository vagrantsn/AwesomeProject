import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper'

import Layout from './pages/Layout'
import Routes from './Routes'

const theme = {
  ...DefaultTheme,
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Routes />
      {/* <Layout /> */}
    </PaperProvider>
  )
}
