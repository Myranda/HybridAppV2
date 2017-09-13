/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


import React,{ Component } from 'react';
import {View,Text,StyleSheet,Image,Button,TouchableHighlight,NativeModules } from 'react-native';


var timeLineItem = React.createClass({
    render: function() {
        var img=this.props.img,
            teacherName=this.props.teacherName,
            subject=this.props.subject,
            dates=this.props.dates,
            weekday=this.props.weekday,
            timePeriod=this.props.timePeriod,
            lessonType=this.props.lessonType,
            lessonName=this.props.lessonName;

        return (
            <View style={styles.item}>

                <View style={styles.textList}>
                    <View style={styles.line1}>
                       <Text style={styles.timePeriod}>{timePeriod}</Text>
                       <Text style={styles.subject}>{subject}</Text>
                    </View>
                    <Text style={styles.lessonType}>{lessonType}-{lessonName}</Text>
                    <View style={styles.line3}>
                        <Image style={styles.image} source={{uri:img}}/>
                        <Text style={styles.teacherName}>{teacherName}</Text>
                        <TouchableHighlight onPress={this._onPressButton} style={styles.btnStyle}>
                            <View>
                                <Text  style={styles.btnText}>预习</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
               </View>
                <View  style={styles.linePoint}>
                    <Text style={styles.dates}>{dates}</Text>
                    <Text style={styles.weekday}>{weekday}</Text>
                </View>
           </View>
        );
    },
    _onPressButton(){
       // this.props.nav.navigate('preview');
        NativeModules.PreviewModule.startActivityByString("com.example.administrator.hybridapp.PreviewActivity","Ricardo")
    }
});


var styles = StyleSheet.create({
    item:{
        /* flex:0,
         flexDirection:'row-reverse',*/
        position:'relative'

    },
    text:{
        color:'#CECECE',
        alignItems:'center',
        borderRadius:15
    },
    linePoint:{
        position:'absolute',
        top:0,
        left:5,
        borderWidth:1,
        borderColor:'#CECECE',
        borderRadius:50,
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    dates:{
        fontSize:16,
        color:'#666666'
    },
    weekday:{
        fontSize:12,
        color:'#8A8A8A'
    },
    textList:{
        flexDirection:'column',
        paddingLeft:45,
        marginLeft:30,
        borderLeftColor:'#ddd',
        borderLeftWidth:1,
    },
    timePeriod:{
        color:'#333333',
        fontSize:16,
        height:25
    },
    lessonType:{
        color:'#666666',
        fontSize:14
    },
    subject:{
        color:'#C195E6',
        fontSize:10,
        borderWidth:1,
        borderColor:'#C195E6',
        borderRadius:2,
        width:50,
        height:20,
        textAlign:'center',
        marginLeft:10,
        padding:3
    },
    line1:{
        flexDirection: 'row'
    },
    line3:{
        flexDirection: 'row',
        marginTop:5,
        paddingBottom:20
    },
    image:{
        width:30,
        height:30,
        borderRadius:50,
        marginRight:10,

    },
    teacherName:{
        fontSize:14,
        paddingTop:5,
        paddingBottom:5
    },
    btnText:{
        backgroundColor:'#FF8C0E',
        width:70,
        padding:4,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
        color:'#fff',
        textAlign:'center'
    },
    btnStyle:{
         position:'absolute',
         right:0
    }
});

module.exports = timeLineItem;