import React from 'react'

import Login from './pages/Login'
import List from './pages/List'

const routes = [
  { key: 'login', name: 'Login', component: Login },
  {
    key: 'list',
    name: 'List',
    component: List,
    icon: 'format-list-bulleted',
    showOnTab: true,
  },
]

export default routes
