package com.example.administrator.hybridapp.preview;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PreviewModule extends ReactContextBaseJavaModule {
    public PreviewModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "PreviewModule";  //注意此处不能返回null，否则无法建立桥接
    }


    @ReactMethod
    public void startActivityByString(String activityName,String title){
        try {
            Activity currentActivity = getCurrentActivity();
            if (null != currentActivity) {

                Class aimActivity = Class.forName(activityName);
                Intent intent = new Intent(currentActivity,aimActivity);
                intent.putExtra("title", title);
                currentActivity.startActivity(intent);

            }
        } catch (Exception e) {
            throw new JSApplicationIllegalArgumentException(
                    "Could not open the activity : " + e.getMessage());
        }
    }
}
