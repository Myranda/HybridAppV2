package com.example.administrator.hybridapp;

import com.facebook.react.ReactActivity;

public class indexActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "indexDemo";
    }
   @Override
    protected void onResume() {
         /**
         * 设置为横屏
         */
       /* if(getRequestedOrientation()!= ActivityInfo.SCREEN_ORIENTATION_PORTRAIT){
            setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        }*/
        super.onResume();
    }
}
