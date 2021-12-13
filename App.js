import {
  StatusBar
} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  WebView
} from 'react-native-webview';

export default function App() {
  const urlPrefix = 'http://docs.google.com/gview?embedded=true&url=';
  const quickSilver = 'https://quicksilver.loyaltysource.com/api/shipment/label/ACH20347021233555/0';
  const batman = 'https://batman.loyaltysource.com/Pdf_controller/getLabel/ACH20347021233555/0'
  const sample = 'http://www.africau.edu/images/default/sample.pdf'
  return (

    <
    WebView style = {
      styles.container
    }
    source = {
      {
        uri: `${urlPrefix}${sample}`
      }
    }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});