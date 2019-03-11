import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {NativeModules} from 'react-native';

export default class App extends Component {
  goToPaymentPage() {
    NativeModules.SepSDK.goToPaymentPage();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>SEP Payment SDK Example</Text>
        <Button
          onPress={() => this.goToPaymentPage()}
          title="Go To Payment Page"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: 20
  }
});
