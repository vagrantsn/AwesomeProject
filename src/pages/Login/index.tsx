import React, { useState } from 'react'
import pagarme from 'pagarme'

import LoginContainer from '../../containers/Login'

const LoginPage = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async ({
    email,
    password
  } : {
    email: string,
    password: string,
  }) => {
    setLoading(true)

    const session = await pagarme.client.connect({ email, password })

    console.log(session)

    setLoading(false)
  }

  return (
    <LoginContainer
      onSubmit={handleSubmit}
      loading={loading}
    />
  )
}

export default LoginPage
