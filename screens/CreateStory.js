import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFont = {
  'DancingScript-Bold': require('../assets/fonts/DancingScript-Bold.ttf'),
};

export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      dropdownHeight: 80,
      previewImage: 'image1',
    };
  }
  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      let preview_images = {
        image_1: require('../assets/story_image_1.png'),
        image_2: require('../assets/story_image_2.png'),
        image_3: require('../assets/story_image_3.png'),
        image_4: require('../assets/story_image_4.png'),
        image_5: require('../assets/story_image_5.png'),
      };
    }
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <Image source={require('../assets/logo.png')} />
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
});
