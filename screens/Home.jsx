import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import SafeAreaView from "../components/SafeAreaView";
import AstroLayout from "../components/AstroLayout";
import WeatherDay from "../components/WeatherDay";
import Loading from "../components/Loading";


const API_KEY = "6c2fb7b2d9db4aa3bf0124550230606";

const Main = () => {
  const [searchValue, setSearchValue] = useState("delhi");
  const [weathers, setWeathers] = useState({});

  const fetchWeatherData = async (searchValue) => {
    try {
      const uri = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchValue}&days=3&aqi=no&alerts=no`;
      const response = await fetch(uri);
      const data = await response.json();

      const {
        location: { name, country, region },
        current: {
          condition: { icon, text },
          feelslike_c,
          temp_c,
          wind_kph,
          humidity,
          uv,
          cloud,
        },

        forecast: {
          forecastday: {
            0: {
              astro: { moonrise, moonset, sunrise, sunset },
              hour,
            },

            1: {
              date:tommDate,
              
              day : {uv: tommUv, avgtemp_c: tommAvgTemp, maxwind_kph: tommWind, avghumidity: tommHumid, daily_chance_of_rain: tommRain, condition: {icon: tommIcon }, },
              
            },
            2: {
              date: dayAfTommDate,
              
              day : {uv: dayAfTommUv, avgtemp_c: dayAfTommAvgTemp, maxwind_kph: dayAfTommWind, avghumidity: dayAfTommHumid, daily_chance_of_rain: dayAfTommRain, condition: { icon: dayAfTommIcon },}          
            },
          },
        },
      } = data;
      return {
        name,
        country,
        region,
        icon,
        text,
        feelslike_c,
        temp_c,
        wind_kph,
        humidity,
        uv,
        cloud,
        sunrise,
        moonrise,
        sunset,
        moonset,
        hour,
        tommDate,
        tommAvgTemp,
        tommHumid,
        tommIcon,
        tommRain,
        tommUv,
        dayAfTommDate,
        dayAfTommAvgTemp,
        dayAfTommHumid,
        tommWind,
        dayAfTommIcon,
        dayAfTommWind,
        dayAfTommRain,
        dayAfTommUv
      };
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      const info = await fetchWeatherData(searchValue);
      setWeathers((prevWeathers) => ({ ...prevWeathers, ...info }));
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);


  
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            value={searchValue}
            onChangeText={setSearchValue}
            placeholder={"Location"}
          />
          <Text style={styles.weatherRegion}>
            Location : {weathers.name === undefined ? "india" : weathers.name} -{" "}
            {weathers.region} - {weathers.country}
          </Text>
        </View>
        <View style={styles.viewImage}>
          <Image
            style={styles.weathersImage}
            source={{
              uri: `https:${weathers.icon}`,
            }}
          />
          <View style={styles.temp}>
            <Text style={styles.temptext}>Feels</Text>
            <Text style={styles.temptext}>{weathers.feelslike_c}°C</Text>
          </View>
          <View style={styles.temp}>
            <Text style={styles.temptext}>Temp</Text>
            <Text style={styles.temptext}>{weathers.temp_c}°C</Text>
          </View>
          <View style={styles.temp}>
            <Text style={styles.temptext}>Wind</Text>
            <Text style={styles.temptext}>{weathers.wind_kph}kph</Text>
          </View>
          <View style={styles.temp}>
            <Text style={styles.temptext}>Humid</Text>
            <Text style={styles.temptext}>{weathers.humidity}%</Text>
          </View>
          <View style={styles.temp}>
            <Text style={styles.temptext}>UV</Text>
            <Text style={styles.temptext}>{weathers.uv}</Text>
          </View>
          <View style={styles.temp}>
            <Text style={styles.temptext}>cloud</Text>
            <Text style={styles.temptext}>{weathers.cloud}%</Text>
          </View>
        </View>
        <Text style={styles.weatherRegion}>{weathers.text}</Text>
      </View>
        {weathers.hour === undefined ? (
        <Loading/>
      ) : (
        <AstroLayout weathers={weathers} />
      )}
      <WeatherDay weathers={weathers} />
    </View>
  );
};

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  main : {
    gap: 30
  },
  container: {
    backgroundColor: "#202021",
    height: 250,
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  weatherRegion: {
    margin: 10,
    backgroundColor: "#696969",
    height: 30,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    color: "white",
  },
  input: {
    fontSize: 16,
    color: "#333",
    height: 40,
    padding: 10,
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    color: "white",
    width: screenWidth - 40,
  },
  weathersImage: {
    height: 70,
    width: 70,
    backgroundColor: "#000000",
    borderRadius: 1,
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
});

const Home = () => {
  return <SafeAreaView Component={Main} />;
};

export default Home;
