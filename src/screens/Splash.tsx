import {Image, StyleSheet, Dimensions, View} from 'react-native';
import React from 'react';

const logo = require('../assets/agenda.png');
const Splash = (props: any) => {
  setTimeout(() => {
    props.navigation.navigate('MyStack');
  }, 2000);
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer} />
      <Image source={logo} style={styles.image} />
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  topcontainer: {
    height: Dimensions.get('screen').height / 5,
  },
  image: {
    height: 350,
    width: 350,
  },
});
