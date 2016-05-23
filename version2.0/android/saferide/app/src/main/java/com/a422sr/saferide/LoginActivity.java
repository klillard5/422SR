package com.a422sr.saferide;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class LoginActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        final EditText usrname = (EditText) findViewById(R.id.username);
        final EditText passwd = (EditText) findViewById(R.id.password);
        final Button login = (Button) findViewById(R.id.ulogin);
        final Button reg = (Button) findViewById(R.id.reg);

        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick (View view) {
                Intent loginIntent = new Intent(LoginActivity.this, RequestRideActivity.class);
                LoginActivity.this.startActivity(loginIntent);
            }
        });


    }
}
