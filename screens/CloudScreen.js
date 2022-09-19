
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CloudScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cloud Screen</Text>
    </View>
  );
};

export default CloudScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e5ea',
  },
});
