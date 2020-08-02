import React from 'react'
import {
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper'

import UserContext from './UserContext'
import Routes from './Routes'
import ErrorBoundary from './pages/ErrorBoundary'

const theme = {
  ...DefaultTheme,
}

export default function App() {
  return (
    <ErrorBoundary>
      <PaperProvider theme={theme}>
        <UserContext>
          <Routes />
        </UserContext>
      </PaperProvider>
    </ErrorBoundary>
  )
}
