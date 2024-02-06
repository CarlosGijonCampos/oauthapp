import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './pages/login';
import CreateAccount from './pages/createAc';
import * as Animatable from 'react-native-animatable';



const Stack = createNativeStackNavigator();


const AnimatedText = Animatable.createAnimatableComponent(Text);

const openTermsLink = () => {
  Linking.openURL('https://finlooker.com/privacypolicies');
};

const openPrivacyLink = () => {
  Linking.openURL('https://finlooker.com/privacypolicies');
};

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={HomeScreen} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const texts = [
  "An investment in knowledge pays the best interest - Benjamin Franklin",
  "Education is a powerful weapon for change. - Nelson Mandela",
  "My learning is hindered by education. - Albert Einstein",
  "The more you learn, the more you earn. - Warren Buffett ",
];

function HomeScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTextChange = () => {
    const newIndex = (currentIndex + 1) % texts.length;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleTextChange();
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);
  const renderIndicators = () => {
    return texts.map((_, index) => (
      <Text
        key={index}
        style={{
          color: index === currentIndex ? 'white' : 'grey',
          margin: 5,
          fontSize: index === currentIndex ? 18 : 16,

        }}
      >
        ●
      </Text>
    ));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/nombre.png')}
        style={{ ...styles.logo, zIndex: 0, width: '90%', height: '10%', alignSelf: 'center' }}
      />
      <View style={styles.mainContainer}>
        <Animatable.Text
          animation="fadeIn"
          duration={1000}
          style={{ ...styles.texto, color: 'white', fontSize: 24 }}
          onPress={handleTextChange}
        >
          {texts[currentIndex]}
        </Animatable.Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          {renderIndicators()}
        </View>
        <Text style={{ color: 'grey', marginVertical: 10, textAlign: 'center', fontSize: 16 }}>
          {"By continuing I agree to the \n"}
          <TouchableOpacity onPress={openTermsLink}>
            <Text style={{ textDecorationLine: 'underline', color: 'white', fontSize: 13 }}>terms & conditions</Text>
          </TouchableOpacity>
          {", "}
          <TouchableOpacity onPress={openPrivacyLink}>
            <Text style={{ textDecorationLine: 'underline', color: 'white', fontSize: 13 }}>privacy policy</Text>
          </TouchableOpacity>
          {"."}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
          <Text style={{ color: 'black', fontSize: 17 }}>Login</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')} style={styles.button1}>
          <Text style={{ color: 'black', fontSize: 17 }}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(33,33,33,255)',
  },
  mainContainer: {
    flex: 2,
    alignSelf: 'center',
    marginTop: 5,
  },
  logo: {
    marginTop: '30%',
    marginBottom: '15%',
  },
  button: {
    marginTop: '10%',
    backgroundColor: '#87C830',
    padding: 15,
    marginVertical: 5,
    borderRadius: 15,
    alignItems: 'center',
    minWidth: '100%',
    maxWidth: '100%',
  },
  button1: {
    backgroundColor: '#DB8200',
    padding: 15,
    marginVertical: 5,
    borderRadius: 15,
    alignItems: 'center',
    minWidth: '100%',
    maxWidth: '100%',
  },
  texto: {
    padding: 10,
    margin: 10,
    fontSize: 24,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 30,
    flex: 0.3,
  },
});



