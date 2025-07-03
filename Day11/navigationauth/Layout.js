import { StyleSheet, Text, View } from 'react-native'
import { UserContextProvider } from './context/userContext'
import React from 'react'
import App from './App'

const Layout = () => {
  return (
    <UserContextProvider>
        <App />;
    </UserContextProvider>

  )
}

export default Layout

const styles = StyleSheet.create({})