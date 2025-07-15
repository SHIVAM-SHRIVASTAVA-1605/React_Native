import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthProvider from './context/authContext'
import App from './App'

const Layout = () => {
  return (
    <AuthProvider>
      <App />;
    </AuthProvider>
  )
}

export default Layout
