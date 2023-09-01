import { View, StyleSheet, Platform, StatusBar } from 'react-native'
import React from 'react'

const SafeAreaView = ({Component}) => {
  return (
    <View>
      {Platform.OS === "android"? <StatusBar backgroundColor={"black"}/> : null}
      <Component/>
    </View>
  )
}


export default SafeAreaView

