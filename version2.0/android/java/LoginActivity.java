package com.a422sr.saferide;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class LoginActivity extends AppCompatActivity {
    EditText usrname;
    EditText passwd;
    TextView uerr;
    Button login;
    Button reg;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        usrname = (EditText) findViewById(R.id.username);
        passwd = (EditText) findViewById(R.id.password);
        login = (Button) findViewById(R.id.ulogin);
        reg = (Button) findViewById(R.id.reg);
        uerr = (TextView) findViewById(R.id.uerr);


        login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick (View view) {
                /*if (usrname.getText().toString().equals("n") && passwd.getText().toString().equals("p")) {*/
                    Intent loginIntent = new Intent(LoginActivity.this, RequestRideActivity.class);
                    LoginActivity.this.startActivity(loginIntent);
               /* }
                else{

                }*/
            }
        });

        reg.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                uerr.setText("This function is currently not available");
            }
        });


    }
}
