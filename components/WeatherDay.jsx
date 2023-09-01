import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const WeatherDay = ({weathers}) => {
  return (
    <View style={styles.containerTwo}>
      <View style={styles.tomm}>
        <Text style={styles.textDate}>Tommorrow</Text>
        <Text style={styles.textDate}>Temp : {weathers.tommAvgTemp}°C</Text>
        <Text style={styles.textDate}>Humid : {weathers.tommHumid}%</Text>
        <Image style={styles.tommIcon} source={{
          uri : `http:${weathers.tommIcon}`
        }}/>
        <Text style={styles.textDate}>{weathers.tommTxt}</Text>
      </View>
      <View style={styles.tomm}>
        <Text style={styles.textDate}>Overmorrow</Text>
        <Text style={styles.textDate}>Temp : {weathers.dayAfTommAvgTemp}°C</Text>
        <Text style={styles.textDate}>Humid : {weathers.dayAfTommHumid}%</Text>
        <Image style={styles.tommIcon} source={{
          uri : `http:${weathers.dayAfTommIcon}`
        }}/>
        <Text style={styles.textDate}>{weathers.tommTxt}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerTwo: {
    backgroundColor: "#17202A",
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 5,
    borderTopLeftRadius: -10,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tomm: {
    backgroundColor: "black",
    flexDirection: "column",
    gap: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: "49%"
  },
  textDate: {
    margin: 5,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  tommIcon : {
    height: 70,
    width: 70,
    backgroundColor: "#000000",
    borderRadius: 1,
  }
})

export default WeatherDay