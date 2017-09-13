package com.example.administrator.hybridapp.communication;

import android.support.annotation.Nullable;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

/**
 * 通信Module类
 * Created by Song on 2017/2/17.
 */
public class CommModule extends ReactContextBaseJavaModule{

    private ReactApplicationContext mContext;
    public static final String MODULE_NAME = "commModule";
    public static final String EVENT_NAME = "nativeCallRn";

    private static final String VARIABLE_1 = "v1";
    private static final String VARIABLE_2 = "v2";
    /**
     * 构造方法必须实现
     * @param reactContext
     */
    public CommModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.mContext = reactContext;
    }

    /**
     * 在rn代码里面是需要这个名字来调用该类的方法
     * @return
     */
    @Override
    public String getName() {
        return MODULE_NAME;
    }

    /**
     * RN调用Native的方法
     */
  /* @ReactMethod
    public void rnCallNative(String phone) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();

    }*/
    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();

    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(VARIABLE_1, "a11");
        constants.put(VARIABLE_2, "a22");
        return constants;
    }



    /**
     * Native调用RN
     * @param msg
     */
    public void nativeCallRn(String msg) {
        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(EVENT_NAME,msg);
    }




    /**
     * Callback 方式
     * rn调用Native,并获取返回值
     * @param msg
     * @param callback
     */
    @ReactMethod
    public void rnCallNativeFromCallback(String msg, Callback callback) {

        // 1.处理业务逻辑...
        String result = "rnCallNativeFromCallback接收后返回：" + msg;
        // 2.回调RN,即将处理结果返回给RN
        callback.invoke(result);
    }

    /**
     * Promise
     * @param msg
     * @param promise
     */
    @ReactMethod
    public void rnCallNativeFromPromise(String msg, Promise promise) {

        Log.e("---","adasdasda");
        // 1.处理业务逻辑...
        String result = "rnCallNativeFromPromise接收后返回" + msg;
        // 2.回调RN,即将处理结果返回给RN
        promise.resolve(result);
    }


    public  void fun()
    {
        //在该方法中开启线程，并且延迟3秒，然后向JavaScript端发送事件。
        new Thread(new Runnable() {
            @Override
            public void run() {

                try {
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }

                //发送事件,事件名为EventName
                WritableMap et= Arguments.createMap();
                sendEvent(mContext,"EventName",et);


            }
        }).start();

    }
    //定义发送事件的函数
    public  void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params)
    {
        System.out.println("reactContext="+reactContext);

        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName,params);//原生调Rn
    }
}
