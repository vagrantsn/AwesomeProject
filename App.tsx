import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';
import { StatusBar } from 'expo-status-bar';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
