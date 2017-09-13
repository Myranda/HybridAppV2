/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


import React,{ Component } from 'react';
import {View,Text,StyleSheet,Image } from 'react-native';
import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
    wrapper: {
        flex:0
    },
    slide:{
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'

    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    paginationStyle:{
        bottom:10,
    },
    image: {
        flex: 1,
        resizeMode: Image.resizeMode.contain
    },
    font1:{
        color:'#fff',
        fontSize:60,
        position:'absolute',
        flex:1,
        textAlign:'center',
        top:0,
        left: 0,
        right: 0,
        bottom: 0,
        marginTop:40
    },
    font2:{
        color:'#fff',
        fontSize:18,
        position:'absolute',
        flex:1,
        textAlign:'center',
        top:0,
        left: 0,
        right: 0,
        bottom: 0,
        marginTop:140
    },
    font3:{
        color:'#fff',
        fontSize:16,
        flex:1,
        position:'absolute',
        textAlign:'center',
        left: 10,
        bottom: 10,
    },
    dotStyle:{
        backgroundColor:'rgba(255,255,255,.7)',
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    activeDotStyle:{
        backgroundColor: '#FD8D0E',
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    }
})
var weekDay={
    '1':'星期一',
    '2':'星期二',
    '3':'星期三',
    '4':'星期四',
    '5':'星期五',
    '6':'星期六',
    '7':'星期日',

};
var today=new Date();
var indexSwiper = React.createClass({
    render: function() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false} height= {300} paginationStyle={styles.paginationStyle}
                dot={<View style={styles.dotStyle}/>} activeDot={<View style={styles.activeDotStyle} />}>
                <View style={[styles.slide,styles.slide1]}>
                    <Image style={styles.image} source={require('../../images/slide1.png')} />
                    <Text style={styles.font1}>{today.getDate()+this.nth(today.getDate())}</Text>
                    <Text style={styles.font2}>玉不琢，不成器。人不学，不知义</Text>
                    <Text style={styles.font3}>{today.getFullYear()}.{today.getDate()}&nbsp;&nbsp;{weekDay[today.getDay()]}</Text>
                </View>
                <View style={[styles.slide,styles.slide2]}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={[styles.slide,styles.slide3]}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        );
    },

    nth(d) {
      if(d>3 && d<21) return 'th';
       switch (d % 10) {
         case 1:  return "st";
         case 2:  return "nd";
         case 3:  return "rd";
         default: return "th";
       }
   }
});



module.exports = indexSwiper;