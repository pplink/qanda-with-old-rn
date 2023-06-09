import React from 'react';
import {useRef, useCallback} from 'react';

import {StyleSheet, View, Button, SafeAreaView, Text} from 'react-native';
import {PagecallView} from 'react-native-pagecall';
import type {PagecallViewRef} from 'react-native-pagecall';

const uri = 'https://demo.pagecall.net/join/six-canvas/230417a?chime=0';

export default function App() {
  const viewRef = useRef<PagecallViewRef>(null);

  const handleButtonClick = useCallback(() => {
    if (!viewRef.current) {
      return;
    }
    viewRef.current.sendMessage('Hello from React Native!');
  }, [viewRef]);

  const handleMessage = useCallback((message: string) => {
    console.log('Received message from PagecallView:', message);
  }, []);

  return (
    <View style={styles.container}>
      <PagecallView
        uri={uri}
        style={styles.pagecallView}
        ref={viewRef}
        onMessage={handleMessage}
      />
      <View style={styles.buttonContainer}>
        <Button title="Send Message" onPress={handleButtonClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagecallView: {
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 16,
  },
});
