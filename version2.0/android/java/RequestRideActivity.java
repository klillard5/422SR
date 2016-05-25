package com.a422sr.saferide;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class RequestRideActivity extends AppCompatActivity {

    EditText name;
    EditText phone;
    EditText uoid;
    EditText partySize;
    EditText time;
    EditText currentLocation;
    EditText dropLocation;
    EditText additionalInfo;
    Button submit;
    TextView logout;

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
        submit = (Button) findViewById(R.id.submit);
        logout = (TextView) findViewById(R.id.logout);

        submit.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                Intent rideIntent = new Intent(RequestRideActivity.this, SuccessActivity.class);
                RequestRideActivity.this.startActivity(rideIntent);
            }
        });

        logout.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                Intent logoutIntent = new Intent(RequestRideActivity.this, LoginActivity.class);
                RequestRideActivity.this.startActivity(logoutIntent);
            }
        });
    }
}
