import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native'
import {
  Button,
  TextInput,
} from 'react-native-paper'
import { Formik } from 'formik'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    height: '100%',
  },
  bottomSpacing: {
    marginBottom: 12,
  }
})

const LoginContainer = ({
  onSubmit,
  loading,
} : {
  onSubmit: any,
  loading: boolean,
}) => {

  return (
    <Formik
      initialValues={{
        email: 'vagnervst17@email.com',
        password: 'vagner47',
      }}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleSubmit,
        values,
      }) => (
        <View style={styles.container}>
          <TextInput
            mode="outlined"
            label="Email"
            textContentType="emailAddress"
            style={styles.bottomSpacing}
            onChangeText={handleChange('email')}
            value={values.email}
          />
          <TextInput
            mode="outlined"
            label="Password"
            textContentType="password"
            style={styles.bottomSpacing}
            value={values.password}
          />
          <Button
            loading={loading}
            mode="contained"
            style={styles.bottomSpacing}
            onPress={handleSubmit}
          >
            Submit
          </Button>
        </View>
      )}
    </Formik>
  )
}

export default LoginContainer
