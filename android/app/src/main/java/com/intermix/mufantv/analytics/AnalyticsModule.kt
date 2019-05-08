package com.intermix.mufantv.analytics

import android.os.Bundle
import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.firebase.analytics.FirebaseAnalytics

class AnalyticsModule: ReactContextBaseJavaModule {
    constructor(reactContext: ReactApplicationContext) : super(reactContext)

    override fun getName(): String {
        return "FirebaseAnalystics"
    }

    @ReactMethod
    fun selectContent(id: String, name: String, type: String) {
        val bundle = Bundle()
        bundle.putString(FirebaseAnalytics.Param.ITEM_ID, id)
        bundle.putString(FirebaseAnalytics.Param.ITEM_NAME, name)
        bundle.putString(FirebaseAnalytics.Param.CONTENT_TYPE, type)
        FirebaseAnalytics.getInstance(this.reactApplicationContext)
                .logEvent(FirebaseAnalytics.Event.SELECT_CONTENT, bundle)

        Toast.makeText(this.reactApplicationContext, "sent", Toast.LENGTH_SHORT).show();
    }
}