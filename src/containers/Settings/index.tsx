import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  button: {
    fontSize: 18,
  },
  padding: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 16,
  }
})

const SettingsButton = ({
  onPress,
  text,
}) => (
  <TouchableHighlight
    activeOpacity={0.6}
    underlayColor="#ddd"
    onPress={onPress}
  >
    <View
      style={styles.padding}
    >
      <Text style={styles.button}>
        {text}
      </Text>
    </View>
  </TouchableHighlight>
)

const SettingsContainer = ({
  onLogout,
}) => (
  <View>
    <SettingsButton
      onPress={onLogout}
      text="Logout"
    />
  </View>
)

export default SettingsContainer
