import React from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';
import colors from '../assets/constants/colors'
const Logo = require('../assets/images/MCSLOGO.png');

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={{resizeMode: 'contain' , height: 70}} source={Logo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 20,
    backgroundColor: colors.SCREEN_BACKGROUND

  },
});

export default Header;
