'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View,StatusBar,ScrollView } from 'react-native';
var IndexSwiper = require('./indexSwiper');
var TimeLineItem = require('./timeLineItem');

//默认应用的容器组件
export default class extends  Component {
    static navigationOptions = {
        header:null
    };
    //渲染
    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar translucent={true} backgroundColor={'transparent'}/>
                <View   style={styles.swiper}>
                    <IndexSwiper></IndexSwiper>
                </View>
                <View style={styles.timeline}>
                    <TimeLineItem img="https://avatars2.githubusercontent.com/u/13732553?v=4&s=460" dates="9.6" weekday="周三" timePeriod="12:24-12:54" lessonType="同步课" lessonName="圆周定理" teacherName="tea05" subject="数学"></TimeLineItem>
                    <TimeLineItem img="https://avatars2.githubusercontent.com/u/13732553?v=4&s=460" dates="9.6" weekday="周三" timePeriod="12:24-12:54" lessonType="同步课" lessonName="圆周定理" teacherName="tea05" subject="数学"></TimeLineItem>
                    <TimeLineItem img="https://avatars2.githubusercontent.com/u/13732553?v=4&s=460" dates="9.6" weekday="周三" timePeriod="12:24-12:54" lessonType="同步课" lessonName="圆周定理" teacherName="tea05" subject="数学"></TimeLineItem>
                    <TimeLineItem img="https://avatars2.githubusercontent.com/u/13732553?v=4&s=460" dates="9.6" weekday="周三" timePeriod="12:24-12:54" lessonType="同步课" lessonName="圆周定理" teacherName="tea05" subject="数学"></TimeLineItem>

                </View>
            </ScrollView>

        );
    }

}

//样式定义
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    timeline:{
        backgroundColor:'#fff',
        padding:10,
        paddingTop:15
    }
});
