import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes
} from "@react-native-google-signin/google-signin";
import { View, Text, TouchableOpacity,Platform, Image } from 'react-native';

import { useEffect } from "react";

import { supabase } from "../utils/supabase";

function SignIn () {

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log(JSON.stringify(userInfo, null, 2));
          if (userInfo.idToken) {
            const {data, error} = await supabase.auth.signInWithIdToken({'provider': 'google', 'token': userInfo.idToken})
            console.log(error, data);
        }
          else {
            throw new Error('no ID token present')
          }
        } catch (error) {
            
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log("error occured1: " + error + " " + error.error);
        } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log("error occured2: " + error + " " + error.error);
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log("error occured3: " + error + " " + error.error);
        } else {
        // some other error happened
        console.log("error occured4: " + error.code + " " + error.error);
        }
    }}   

    useEffect(() => {
        const configureGoogle = () => {
            console.log("Configuring google");
            if (Platform.OS === 'ios') {
                GoogleSignin.configure({
                    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
                    iosClientId: '360096605295-fjepitijrklji6tlrbh7cffb5hv4q907.apps.googleusercontent.com',
                });
                console.log('Running on iOS');
              } else if (Platform.OS === 'android') {
                GoogleSignin.configure({
                    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
                    webClientId: '360096605295-2p7v6npmvekf32439f60sre76u1ct4g8.apps.googleusercontent.com'
                });
                console.log('Running on Android');
              }

        }

        configureGoogle();

    }, []);

    

    return (
        <TouchableOpacity
      onPress={signIn}
      style={{
        backgroundColor: "#fff", 
        borderRadius: 15, 
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        
      }}
    >
         <Image
        source={require('../assets/google.png')} 
        style={{ width: 30, height: 30, marginRight: '10%' }} 
      />
      <Text style={{ color: "#000", textAlign: "right", fontSize:18 }}>
        sign in with Google
        
      </Text>
    </TouchableOpacity>
  );
}

export default SignIn;