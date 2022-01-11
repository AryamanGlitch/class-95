import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Switch
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import firebase from "firebase";

let customFonts = {
  "DancingScript-Bold": require("../assets/fonts/DancingScript-Bold.ttf")
};

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View
          style={
            styles.container
          }
        >
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text
                style={
                  this.state.light_theme
                    ? styles.appTitleTextLight
                    : styles.appTitleText
                }
              >
                Recipe Sensation
              </Text>
            </View>
          </View>
          <View style={styles.screenContainer}>
            <View style={styles.profileImageContainer}>
              <Image
                source={require("../assets/profile1.jpg")}
                style={styles.profileImage}
              ></Image>
              
            </View>
            <View style={styles.themeContainer}>
              <Text
                style={
                  this.state.light_theme
                    ? styles.themeTextLight
                    : styles.themeText
                }
              >
                Aryaman Bhatnagar
              </Text>

              
            </View>
            <View style={{ flex: 0.3 }} />
          </View>
          <View style={{ flex: 0.08 }} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1261a0',
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
 appTitleText: {
    color: 'white',
    fontSize: RFValue(35),
    fontFamily: 'DancingScript-Bold',
  },
  
  screenContainer: {
    flex: 0.85
  },
  profileImageContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  profileImage: {
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: RFValue(70)
  },

  nameText: {
    color: "white",
    fontSize: RFValue(40),
    fontFamily: "DancingScript-Bold",
    marginTop: RFValue(10)
  },
  nameTextLight: {
    color: "black",
    fontSize: RFValue(40),
    fontFamily: "DancingScript-Bold",
    marginTop: RFValue(10)
  },
  themeContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: RFValue(20)
  },
  themeText: {
    color: "white",
    fontSize: RFValue(30),
    fontFamily: "DancingScript-Bold",
    marginRight: RFValue(15)
  },
  themeTextLight: {
    color: "black",
    fontSize: RFValue(30),
    fontFamily: "DancingScript-Bold",
    marginRight: RFValue(15)
  }
});
