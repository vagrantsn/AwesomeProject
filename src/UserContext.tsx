import React, { useState } from 'react'

const Context = React.createContext({
  session: '',
  setSession: (sessionId: string) => null,
})

const UserContext = ({ children } : { children: any }) => {
  const [session, setSession] = useState('123')

  return (
    <Context.Provider
      value={{
        session,
        setSession,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export {
  Context
}

export default UserContext
