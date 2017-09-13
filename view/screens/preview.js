/**
 * Created by Administrator on 2017/9/6.
 */
import React, { Component } from 'react';
import {Text,View,Image,StatusBar,StyleSheet,Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
export default class extends Component {
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            width: 300,
            height: 200,
            pptList:[]

        };
    }
    componentDidMount() {
        let pptImgs= [
            "http://edu100.bs2ul.yy.com/3496626b19745df624440aff5f9557c303c488f1.jpg",
            "http://edu100.bs2ul.yy.com/b33b9047dffbbd90a63bb49f624b1243aac09987.jpg",
            "http://edu100.bs2ul.yy.com/97c3c4d95e2e9b2c803b5ba9ccb8aba1327326e9.jpg",
            "http://edu100.bs2ul.yy.com/4e69ce3a50b7e0b0e2645428b38285f4fd6228e5.jpg",
            "http://edu100.bs2ul.yy.com/e6d26886f95fd8b74c480ae9216a2189f4ccbb26.jpg",
            "http://edu100.bs2ul.yy.com/72663f9188d391da5800de643f804f711369a1a7.jpg",
            "http://edu100.bs2ul.yy.com/281fc48af37dfad4d23904d14bc8524c8c1d0e12.jpg",
            "http://edu100.bs2ul.yy.com/5a5707cdea48bd5d86806914e78cae3ecd9e172d.jpg",
            "http://edu100.bs2ul.yy.com/a66718ffa84d7fe4a1af001f4965c4745468221f.jpg",
            "http://edu100.bs2ul.yy.com/01d308b14066f016f3e447d7fe1beb02bedffb04.jpg",
            "http://edu100.bs2ul.yy.com/05ffba2c86fe0b6b07cab68bd3a32741da7562de.jpg",
            "http://edu100.bs2ul.yy.com/578728b624da6f2d3302b94ef943501f3f504e73.jpg",
            "http://edu100.bs2ul.yy.com/1f50b6428947a450afe8aa836e3cb8e2fb55cf9a.jpg",
            "http://edu100.bs2ul.yy.com/227b1a78de9426ed8eb63aa0bc15d3829ac058cd.jpg",
            "http://edu100.bs2ul.yy.com/e773e5101eab027567f438eeda2d8d11da6f48a0.jpg"
        ];
        this.setState({
            pptList:pptImgs
        });
        let  screenHeight=Dimensions.get('window').height;
        Image.getSize(pptImgs[0], (width, height) => {
            width = width * screenHeight / height; //按照屏幕高度进行等比缩放
            this.setState({
                width:width,
                height:screenHeight
            });
        });

    }
    render() {
            return (
                <Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>

                     <View style={styles.slide}>
                        <Image style={[styles.imageStyle, {width: this.state.width, height: this.state.height}]}
                               source={{uri:this.state.pptList[0]}}/>
                    </View>
                    <View style={styles.slide}>
                        <Image style={[styles.imageStyle, {width: this.state.width, height: this.state.height}]}
                               source={{uri:this.state.pptList[1]}}/>
                    </View>
                    <View style={styles.slide}>
                        <Image style={[styles.imageStyle, {width: this.state.width, height: this.state.height}]}
                               source={{uri:this.state.pptList[2]}}/>
                    </View>
                    <View style={styles.slide}>
                        <Image style={[styles.imageStyle, {width: this.state.width, height: this.state.height}]}
                               source={{uri:this.state.pptList[3]}}/>
                    </View>
                </Swiper>
            );

    }
}
var styles = StyleSheet.create({
    wrapper: {
        flex:1
    },
    slide:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        resizeMode: Image.resizeMode.contain
    }
})