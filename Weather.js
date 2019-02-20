import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from "prop-types";

const weatherCases ={
    Rain : {
        colors:['#006C6FB','#005BEA'],
        title: "Rainging like a MF",
        subtitle : "For more into look outside",
        icon: "weather-rainy"
    },
    Clear: {
        colors:['#FEF253','#FF7300'],
        title: "Sunny as Fuck",
        subtitle : "Go get your ass burnt",
        icon: "weather-sunny"
    },
    Thunderstorm: {
        colors:['#00ECBC','#007ADF'],
        title: "Thunderstorm in the house",
        subtitle : "Actually, outside of the house",
        icon: "weather-lightning"
    },
    Clouds: {
        colors:['#D7D2CC','#304352'],
        title: "Clouds",
        subtitle : "I knows, fucking boring",
        icon: "weather-cloudy"
    },
    Snow: {
        colors:['#7DE2FC','#B9B6E5'],
        title: "cold as balls",
        subtitle : "Do you want to build a snowman?",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors:['#89F7FE','#66A6FF'],
        title: "Drizzle",
        subtitle : "Is like rain, but gay",
        icon: "weather-hail"
    },
    Haze: {
        colors:['#89F7FE','#66A6FF'],
        title: "Haze",
        subtitle : "Is like rain, but gay",
        icon: "weather-hail"
    }
}

function Weather({ weatherName, temp }){
    return(
    <LinearGradient 
        colors={ weatherCases[weatherName].colors } 
        style={styles.container}>
        <View style={styles.upper}>
            <MaterialCommunityIcons name={weatherCases[weatherName].icon} size={144} color="white" />
            <Text style={styles.temp}>  { temp }º </Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.title}> { weatherCases[weatherName].title } </Text>
            <Text style={styles.subtitle}> { weatherCases[weatherName].subtitle } </Text>
        </View>
    </LinearGradient>
    );
}


Weather.propTypes ={
    temp: PropTypes.number.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    upper:{
        flex:1,
        alignItems:'center',
        justifyContent : "center",
        backgroundColor:'transparent'
    },
    temp: {
        fontSize: 48,
        backgroundColor:'transparent',
        color:'white',
        marginTop: 10
    },
    lower:{
        flex:1,
        alignItems:'flex-start',
        justifyContent: "flex-end",
        paddingLeft:25
    },
    title:{
        fontSize:38,
        backgroundColor:'transparent',
        color:'white',
        marginBottom:10
    },
    subtitle:{
        fontSize:24,
        backgroundColor:'transparent',
        color:'white',
        marginBottom: 24
    }
})