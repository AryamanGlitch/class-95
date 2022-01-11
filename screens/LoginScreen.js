import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import firebase from '../config';
let customFonts = {
  'DancingScript-Bold': require('../assets/fonts/DancingScript-Bold.ttf'),
};

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      email: '',
      password: '',
    };
  }

  handleLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate('TabNavigator');
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.iconImage}></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text
              style={{
                color: 'white',
                fontSize: RFValue(35),
                fontFamily:"DancingScript-Bold",
              }}>
              Recipe Sensation
            </Text>
            <View style={styles.loginContainer}>
              <TextInput
                style={styles.usernameInput}
                placeholder="E-Mail ID"
                onChangeText={(text) => this.setState({ email: text })}
              />
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                onChangeText={(text) => this.setState({ password: text })}
              />

              <TouchableOpacity
                style={styles.loginButton}
                onPress={() =>
                  this.handleLogin(this.state.email, this.state.password)
                }>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1261a0',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(35),
    fontFamily: 'DancingScript-Bold',
  },
  loginContainer: {
    flex: 0.5,
    alignItems: 'middle',
    marginRight: 25,
  },
  usernameInput: {
    width: '75%',
    height: 55,
    padding: 10,
    borderColor: '#FFFFFF',
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 75,
    backgroundColor: '#1261a0',
  },
  passwordInput: {
    width: '75%',
    height: 55,
    padding: 10,
    borderColor: '#FFFFFF',
    borderWidth: 4,
    borderRadius: 10,
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 42,
    backgroundColor: '#1261a0',
  },
  loginButton: {
    marginRight: 65,
    marginLeft: 10,
    backgroundColor: 'yellow',
    marginTop: 45,
    borderRadius: 10,
    borderWidth: 3,
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
