import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        fullname={'Ta Quang Duy'}
        linktext={'Comments'}
        onPressLinkText={() => { console.log('Press Comment'); }}
        image={{uri: 'http://unsplash.it/600/600'}}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',  //White
    marginTop: Constants.statusBarHeight,  //Cách top bằng với statusBarHeight
  },
});
