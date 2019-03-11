package com.sepsdk;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class SepSDKModule extends ReactContextBaseJavaModule {
  
  public SepSDKModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "SepSDK";
  }

  @ReactMethod
  public void goToPaymentPage() {
    Toast.makeText(getReactApplicationContext(), "Test Message", 1000).show();
  }
}