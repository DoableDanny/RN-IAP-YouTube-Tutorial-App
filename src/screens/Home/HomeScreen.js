import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from '../../lib/components/Button';
import useInAppPurchase from '../../lib/custom_hooks/useInAppPurchase';

const HomeScreen = () => {
  const {isFullAppPurchased, connectionErrorMsg, purchaseFullApp} =
    useInAppPurchase();

  return (
    <View style={styles.container}>
      {isFullAppPurchased ? (
        <Text style={{...styles.msg, color: 'green'}}>
          Full app access available!!!
        </Text>
      ) : null}
      <Button title="Purchase" handlePress={purchaseFullApp} />
      {connectionErrorMsg ? (
        <Text style={{...styles.msg, color: 'red'}}>{connectionErrorMsg}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 16,
  },
  msg: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 16,
  },
});
export default HomeScreen;
