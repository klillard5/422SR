package com.a422sr.saferide;

import android.app.Activity;
import android.os.Bundle;

import java.util.Map;

/**
 * Created by lindy on 5/21/16.
 */
public class RegisterRequest extends Activity {
    private static final String SERVER_ADDRESS = "http:://10.2.2.2:8080";
    private Map<String, String> params;


    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_request_ride);

        System.out.println("Sever: " + SERVER_ADDRESS);

    }
    /*public RegisterRequest(String usrname, String passwd, Response.Listener<String> listener){
        super(Method.POST, REGISTER_REQUEST_LOC, listener, null);
        params = new HashMap<>();
        params.put("name", usrname);
        params.put("password", passwd);
    }*/

}
