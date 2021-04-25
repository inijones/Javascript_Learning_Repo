package com.example.hello_world

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var text = findViewById<TextView>(R.id.textView)
        var plus = findViewById<Button>(R.id.increment_button)

        text(){
            text = 0
        }

        plus.setOnClickListner{
            text++

        }

    }

}