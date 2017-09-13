import React, { Component } from 'react';
import { AppRegistry, View ,Text,Button,Image,StyleSheet,Alert,NativeModules,ToastAndroid} from 'react-native';
import { StackNavigator } from 'react-navigation';
import codePush from "react-native-code-push";
import swiperScreen from './view/swisrc';
import formScreen from './view/formscr';
import networkScreen from './view/networkscr';
import indexDemo from './view/indexDemo';
import previewScreen from './view/screens/preview';
let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

class  HomeScreen extends Component {
    static navigationOptions = {
        title: '这是react native 页面',
    };
    /**
     * 下载更新包
     * @param v
     */
    load(){
        codePush.checkForUpdate().then((update)=>{
            if(!update){
                Alert.alert("提示","已是最新版本--",[
                    {text:"Ok", onPress:()=>{
                        console.log("点了OK");
                    }}
                ]);
            }
            else{
                codePush.sync({
                    updateDialog: {
                        optionalIgnoreButtonLabel: '稍后',
                        optionalInstallButtonLabel: '后台更新',
                        optionalUpdateMessage: '有新版本了，是否更新？',
                        title: '更新提示'
                    },
                    installMode: codePush.InstallMode.IMMEDIATE
                });
            }
        });
    }

    /**
     * 调用原生代码
     */
    showNativeToast() {
        NativeModules.commModule.show('原生toast调用'+NativeModules.commModule.v1,10000);
    }
    /**
     * Callback 通信方式
     */
    callbackComm(msg) {
        NativeModules.commModule.rnCallNativeFromCallback(msg,(result) => {
            ToastAndroid.show("CallBack收到消息:" + result, ToastAndroid.SHORT);
        })
    }
    /**
     * Promise 通信方式
     */
    promiseComm(msg) {
        NativeModules.commModule.rnCallNativeFromPromise(msg).then(
            (result) =>{
                ToastAndroid.show("Promise收到消息:" + result, ToastAndroid.SHORT)
            }
        ).catch((error) =>{console.log(error)});
    }

    render() {
        const { navigate } = this.props.navigation;
        var onThis = this;
        return (
            <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
                <Button
                    onPress={() => navigate('swiperScreen')}
                    title="轮播" color="#841584"
                />
                <Button
                    onPress={() => navigate('form')}
                    title="文本处理"
                />
                <Button
                    onPress={() => navigate('network')}
                    title="网络请求（fetch）"
                />
                <Button onPress={this.showNativeToast.bind(this)}
                        title="调用原生Toast组件"
                />
                <Button  onPress={this.callbackComm.bind(this,'callback发送啦')} title="Callback通信方式"/>
                <Button  onPress={this.promiseComm.bind(this,'callback发送啦')} title="Promise 通信方式"/>

                <Button onPress={() => onThis.load()}
                        title="热更新(upadata201708301023)"
                />
            </View>
        );
    }
}
HomeScreen = codePush(codePushOptions)(HomeScreen);

const HelloWorldApp = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    swiperScreen: {
        screen: swiperScreen
    },
    form:{
        screen: formScreen
    },
    network:{
        screen: networkScreen
    }
});

var styles = StyleSheet.create({

})


// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
AppRegistry.registerComponent('indexDemo', () => indexDemo);
AppRegistry.registerComponent('previewScreen', () => previewScreen);
