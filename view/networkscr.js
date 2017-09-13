import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//默认应用的容器组件
export default class extends  Component {

    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            responseText: null
        };
    }

    //渲染
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item} onPress={this.doFetch.bind(this)}>获取数据</Text>
                <Text>{this.state.responseText}</Text>
            </View>
        );
    }

    //使用Fetch请求数据
    doFetch(){
        fetch('https://tutor.100.com/api/v2/deploy/bizconfigs.json')
            .then(function(data){
                return data.text();
            })
            .then((responseText) => {
                alert("请求成功！");
                this.setState({responseText})
                console.log(responseText);
            })
            .catch((error) => {
                alert("请求失败！");
                console.log(error);
            });
    }
}

//样式定义
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop:25
    },
    item:{
        margin:15,
        height:30,
        borderWidth:1,
        padding:6,
        borderColor:'#ddd',
        textAlign:'center'
    },
});
