import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Auth from '../components/SignUp';
import SignIn from '../components/SignIn';
import Account from '../components/Account';
import { Session } from '@supabase/supabase-js';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [session, setSession] = useState(Session);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}

    >

      <View style={styles.google}>

        <Image
          source={require('../assets/fondoT.png')}
          style={{ ...styles.fondoT, zIndex: 0 }}
        />

        <View style={[styles.googleInnerContainer, { maxHeight: 500 }]}>

          <Text style={{ ...styles.UpText, color: 'white', marginBottom: '5%' }}>Welcome to Finlooker Let's get started</Text>


          {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
          <Text style={{ ...styles.DownText, color: 'white' }}>Or, you can use these if you want to</Text>
          <SignIn />
          <Text style={{ ...styles.Final, color: 'white' }}>_______________</Text>



        </View>

      </View>
    </KeyboardAvoidingView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  google: {
    flex: 1,
    justifyContent: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(33,33,33,255)',
  },
  googleInnerContainer: {
    flex: 2,
    alignSelf: 'center',
    margin: 10,
  },
  UpText: {
    alignSelf: 'center',
    margin: 10,
  },
  DownText: {
    alignSelf: 'center',
    margin: 10,
  },
  Final: {
    margin: 10,
    alignSelf: 'center',
  },
  fondoT: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginBottom: 15,
  },
  logo: {
    flex: 0.3,
    width: '0%',
    height: '0%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 1,

  },
});