package com.a422sr.saferide;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.EditText;

public class RequestRideActivity extends AppCompatActivity {

    EditText name;
    EditText phone;
    EditText uoid;
    EditText partySize;
    EditText time;
    EditText currentLocation;
    EditText dropLocation;
    EditText additionalInfo;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_request_ride);

        name = (EditText) findViewById(R.id.name);
        phone = (EditText) findViewById(R.id.phone);
        uoid = (EditText) findViewById(R.id.uoid);
        partySize = (EditText) findViewById(R.id.partySize);
        time = (EditText) findViewById(R.id.time);
        currentLocation = (EditText) findViewById(R.id.currentLocation);
        dropLocation = (EditText) findViewById(R.id.dropLocation);
        additionalInfo = (EditText) findViewById(R.id.additionalInfo);
    }
}
