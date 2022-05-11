import React from 'react';
import {View, StyleSheet} from 'react-native';
import { StatusBar, Loader } from '../index';
import {useSelector} from 'react-redux';

export const Layout = props => {
  const {loading} = useSelector(({dependency}) => dependency);

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle={props.dark ? 'dark-content' : 'light-content'}
      />
      {props.AppBar}
      <Loader isLoading={loading} />
      <View style={[styles.container, props.style]}>{props.children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
