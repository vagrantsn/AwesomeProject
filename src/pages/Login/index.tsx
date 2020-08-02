import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import pagarme from '../../clients/pagarme'

import { Context } from '../../UserContext'

import LoginContainer from '../../containers/Login'

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const { setSession } = useContext(Context)
  const navigation = useNavigation()

  const handleSubmit = async ({
    email,
    password
  } : {
    email: string,
    password: string,
  }) => {
    setLoading(true)

    try {
      const session = await pagarme.sessions.create({ email, password })

      setSession(session.session_id)
      setLoading(false)

      navigation.navigate('LoggedArea')
    } catch (e) {
      setLoading(false)
    }
  }

  return (
    <LoginContainer
      onSubmit={handleSubmit}
      loading={loading}
    />
  )
}

export default LoginPage
