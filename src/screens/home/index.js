import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Spinner } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/vSaveLogo.png");

class Home extends Component {
  
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          
          <Spinner color="white" />

          <View style={{ marginBottom: 80 }}>
            
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
