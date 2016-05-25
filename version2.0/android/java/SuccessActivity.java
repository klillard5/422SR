package com.a422sr.saferide;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

public class SuccessActivity extends AppCompatActivity {
    TextView home;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_success);

        home = (TextView) findViewById(R.id.home);

        home.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                Intent homeIntent = new Intent(SuccessActivity.this, LoginActivity.class);
                SuccessActivity.this.startActivity(homeIntent);
            }
        });
    }
}
