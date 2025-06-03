import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Modal } from 'react-native';
import "../app/global.css";
const LoadingScreen = ({ visible = false, message = 'Loading...' }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
    >
      <View  className='flex-1 bg-black justify-center align-middle items-center'>
        <View  className='align-middle'>
          <ActivityIndicator size="large" color="#FFFFFF" />
          <Text className='mt-20 font-rubik text-xl text-white'>{message}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#000000', // Solid black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    alignItems: 'center',
  },
  message: {
    marginTop: 12,
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default LoadingScreen;
