import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'

import pagarme from '../../clients/pagarme'

import { Context } from '../../UserContext'

import SettingsContainer from '../../containers/Settings'

const SettingsPage = () => {
  const navigation = useNavigation()
  const { session, setSession } = useContext(Context)

  const handleLogout = async () => {
    try {
      pagarme.sessions.destroy({ sessionId: session })
      setSession('')

      navigation.navigate('Login')
    } catch (e) {
      console.log(JSON.stringify(e))
    }
  }

  return (
    <SettingsContainer
      onLogout={handleLogout}
    />
  )
}

export default SettingsPage
