
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SocieteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Societe Screen</Text>
    </View>
  );
};

export default SocieteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e5ea',
  },
});
