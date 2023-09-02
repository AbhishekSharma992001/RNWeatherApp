import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";

const WeatherDay = ({ weathers }) => {
  return (
    <View style={styles.containerTwo}>
      <Text style={styles.tommorrow}>Tommorrow</Text>
      <View style={styles.viewImage}>
        <Image
          style={styles.weathersImage}
          source={{
            uri: `https:${weathers.tommIcon}`,
          }}
        />
        <View style={styles.temp}>
          <Text style={styles.temptext}>Rain</Text>
          <Text style={styles.temptext}>{weathers.tommRain}%</Text>
        </View>
        <View style={styles.temp}>
          <Text style={styles.temptext}>Temp</Text>
          <Text style={styles.temptext}>{weathers.tommAvgTemp}°C</Text>
        </View>
        <View style={styles.temp}>
          <Text style={styles.temptext}>Wind</Text>
          <Text style={styles.temptext}>{weathers.tommWind}kph</Text>
        </View>
        <View style={styles.temp}>
          <Text style={styles.temptext}>Humid</Text>
          <Text style={styles.temptext}>{weathers.tommHumid}%</Text>
        </View>
        <View style={styles.temp}>
          <Text style={styles.temptext}>UV</Text>
          <Text style={styles.temptext}>{weathers.tommUv}</Text>
        </View>
        <View style={styles.temp}>
          <Text style={styles.temptext}>cloud</Text>
          <Text style={styles.temptext}>{weathers.cloud}%</Text>
        </View>
      </View>
      <Text style={styles.tommorrow}>Overmorrow</Text>
      <View style={styles.viewImage}>
          <Image
            style={styles.weathersImage}
            source={{
              uri: `https:${weathers.dayAfTommIcon}`,
            }}
          />
          <View style={styles.temp}>
            <Text style={styles.temptext}>Rain</Text>
            <Text style={styles.temptext}>{weathers.dayAfTommRain}%</Text>
          </View>
          <View style={styles.temp}>
            <Text style={styles.temptext}>Temp</Text>
            <Text style={styles.temptext}>{weathers.dayAfTommAvgTemp}°C</Text>
          </View>
          <View style={styles.temp}>
            <Text style={styles.temptext}>Wind</Text>
            <Text style={styles.temptext}>{weathers.dayAfTommWind}kph</Text>
          </View>
          <View style={styles.temp}>
            <Text style={styles.temptext}>Humid</Text>
            <Text style={styles.temptext}>{weathers.dayAfTommhumid}%</Text>
          </View>
          <View style={styles.temp}>
            <Text style={styles.temptext}>UV</Text>
            <Text style={styles.temptext}>{weathers.dayAfTommUv}</Text>
          </View>
          <View style={styles.temp}>
            <Text style={styles.temptext}>cloud</Text>
            <Text style={styles.temptext}>{weathers.cloud}%</Text>
          </View>
        </View>
    </View>
  );
};

const screenWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
  containerTwo: {
    backgroundColor: "#202021",
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    borderTopLeftRadius: -10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "space-around"
  },
  viewImage: {
    flexDirection: "row",
    width: screenWidth,
    height: 70,
    backgroundColor: "white",
    shadowColor: "black",
    borderBlockColor: "#E6E6FA",
    opacity: 0.8,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,
    elevation: 24,
  },
  temp: {
    borderColor: "#ffff",
    borderLeftWidth: 1,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 5,
  },
  temptext: {
    color: "#000000",
  },
  weathersImage: {
    height: 70,
    width: 70,
    backgroundColor: "#000000",
    borderRadius: 1,
  },
  tommorrow: {
    alignSelf: "center",
    marginTop: 5,
    padding: 2,
    color: "white",
    backgroundColor: "black",
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#000000",
  }
});

export default WeatherDay;
