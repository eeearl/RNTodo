package com.intermix.mufantv

import com.facebook.react.ReactActivity
import android.content.Intent
import android.content.res.Configuration

class MainActivity : ReactActivity() {
    override fun getMainComponentName(): String? = "MuFanTV"

    override fun onConfigurationChanged(newConfig: Configuration) {
        super.onConfigurationChanged(newConfig)
        val intent = Intent("onConfigurationChanged")
        intent.putExtra("newConfig", newConfig)
        this.sendBroadcast(intent)
    }
}