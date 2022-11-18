import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import {StyleSheet,StatusBar} from 'react-native';

class App extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://google.com' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#888888",
    padding: 8
  }
});

export default App;