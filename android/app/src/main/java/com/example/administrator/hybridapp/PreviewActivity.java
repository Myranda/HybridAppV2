package com.example.administrator.hybridapp;

import android.content.pm.ActivityInfo;

import com.facebook.react.ReactActivity;

public class PreviewActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "previewScreen";
    }
   @Override
    protected void onResume() {
        /**
         * 设置为横屏
         */
     /*   if(getRequestedOrientation()!= ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE){
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
        }*/
        super.onResume();
    }
}

