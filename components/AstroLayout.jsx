import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useState } from 'react';

const AstroLayout = ({weathers}) => {
    const [hourIndex, setHourIndex] = useState(0);
    
    const handlePlusPress = () => {
    if (weathers.hour.length > 0) {
      setHourIndex((prevIndex)=>(prevIndex + 1) % weathers.hour.length)

  }}

  const handleMinusPress = () => {
    if (weathers.hour.length >= 0){
    setHourIndex((prevIndex) =>
        prevIndex === 0 ? weathers.hour.length - 1 : prevIndex - 1
      );}}

  // console.log(weathers.hour[0].condition.text)
  return (
    <View style={styles.containerTwo}>
        <View>
          <Text style={styles.todayText}>Today</Text>
          <View style={styles.astro}>
            <View style={styles.sunrise}>
              <Text>Sunrise : </Text>
              <Text style={styles.sunrisetext}>{weathers.sunrise}</Text>
            </View>
            <View style={styles.sunset}>
              <Text>sunset : </Text>
              <Text style={styles.sunsettext}>{weathers.sunset}</Text>
            </View>
            <View style={styles.moonrise}>
              <Text>moonrise : </Text>
              <Text style={styles.moonrisetext}>{weathers.moonrise}</Text>
            </View>
            <View style={styles.moonset}>
              <Text>moonset : </Text>
              <Text style={styles.moonsettext}>{weathers.moonset}</Text>
            </View>
          </View>
        </View>
        <View style={styles.astroLayout}>
          <Text style={styles.forecast}>Forecast - Day</Text>
          <View style={styles.forecastDay}>
            
            <View>
              <Text style={styles.cdttxt}>
                {weathers.hour[hourIndex].condition.text}
              </Text>
              <Text style={styles.foreTime}>
                {weathers.hour[hourIndex].time}
              </Text>
              <Image
                style={styles.weatherscdticon}
                source={{
                  uri: `http:${weathers.hour[0].condition.icon}`,
                }}
              />
            </View>
            <View style={styles.btncontainer}>
              <TouchableOpacity style={styles.btn} onPress={handleMinusPress}>
                <Text style={{color: "white"}}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} onPress={handlePlusPress}>
                <Text style={{color: "white"}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
   containerTwo: {
    borderColor: "#ccc",
    borderTopLeftRadius: -10,
    height: 200,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todayText: {
    alignSelf: "baseline",
    marginTop: 5,
    padding: 2,
    color: "white",
    backgroundColor: "black",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 5,
        shadowColor: "#fff",
    shadowOffset: {
      height: 12,
      width: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 16,
    elevation: 24,
    backgroundColor: "#000000",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 5,
  },
  sunrise: {
    alignSelf: "baseline",
    marginTop: 5,
    padding: 2,
    color: "#000",
    backgroundColor: "#FFFAFA",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    padding: 3,
    alignItems: "center",
  },
  sunrisetext: {
    backgroundColor: "#FFBA85",
    padding: 3,
    borderRadius: 5,
  },
  astro: {
    gap: 4,
  },
  sunset: {
    alignSelf: "baseline",
    marginTop: 5,
    padding: 2,
    color: "#000",
    backgroundColor: "#F0FFF0",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    padding: 3,
    alignItems: "center",
  },
  sunsettext: {
    backgroundColor: "#FF6431",
    padding: 3,
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
  moonrise: {
    alignSelf: "baseline",
    marginTop: 5,
    padding: 2,
    color: "#000",
    shadowColor: "#fff",
    shadowOffset: {
      height: 12,
      width: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 16,
    elevation: 24,
    backgroundColor: "#F0FFFF",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    padding: 3,
    alignItems: "center",
  },
  moonrisetext: {
    backgroundColor: "#E7E6E5",
    padding: 3,
    borderRadius: 5,
  },
  moonset: {
    alignSelf: "baseline",
    marginTop: 5,
    padding: 2,
    color: "#000",
    backgroundColor: "#F8F8FF",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row",
    padding: 3,
    alignItems: "center",
  },
  moonsettext: {
    backgroundColor: "#383838",
    padding: 3,
    color: "white",
    borderRadius: 5,
  },
  forecast: {
    marginTop: 5,
    padding: 2,
    color: "white",
    shadowColor: "#fff",
    shadowOffset: {
      height: 12,
      width: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 16,
    elevation: 24,
    backgroundColor: "#000000",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 5,
  },
  forecastDay: {
    marginTop: 5,
    padding: 2,
    color: "#000",
    backgroundColor: "#F8F8FF",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 5,
  },
  weatherscdticon: {
    margin: 5,
    height: 50,
    width: 50,
    backgroundColor: "#000000",
    borderRadius: 1,
    borderRadius: 2,
  },
  btn: {
    paddingHorizontal: 40,
    backgroundColor: "black",
    color: "white",
    margin: 2,
    borderRadius: 5,
  },
  astroLayout: {
    justifyContent: "space-evenly",
    width: 200,
  },
  btncontainer: {
    flexDirection: "row"
  }
})

export default AstroLayout