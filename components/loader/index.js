import React from 'react';
import {StyleSheet, View, ActivityIndicator, Modal} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

export const Loader = ({isLoading}) => {
  const isFocused = useIsFocused();
  return (
    isFocused && (
      <Modal
        transparent
        visible={isLoading}
        animationType="fade"
        statusBarTranslucent>
        <View style={inStyle.container}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </Modal>
    )
  );
};

const inStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
});
