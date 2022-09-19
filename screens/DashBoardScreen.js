
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DashBoardScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DashBoard Screen</Text>
    </View>
  );
};

export default DashBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1e5ea',
  },
});
