import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({title, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 14,
    minWidth: 280,
    alignSelf: 'stretch',
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
});
export default Button;
