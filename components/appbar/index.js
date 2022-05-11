import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { statusBarHeight, navigator } from "@react-native-khan/helpers";
import Icon from "react-native-vector-icons/Feather";

export const AppBarButton = ({
  name = "chevron-left",
  onPress = () => navigator.goBack(),
  color = "white",
  style = {},
}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Icon name={name} size={20} color={color} />
  </TouchableOpacity>
);

export const AppBar = (props) => {
  return (
    <SafeAreaView
      style={[
        {
          backgroundColor: props.background
            ? props.background
            : props.style?.backgroundColor
            ? props.style?.backgroundColor
            : "white",
        },
        styles.statusbarFix,
      ]}
    >
      {props.children ? (
        <View style={props.style}>{props.children}</View>
      ) : (
        <View style={[styles.container, props.style]}>
          <View style={styles.menu}>{props.leftMenu && props.leftMenu}</View>
          {props.title && (
            <Text
              numberOfLines={1}
              style={[
                { color: props.titleColor ? props.titleColor : "black" },
                styles.title,
              ]}
            >
              {props.title}
            </Text>
          )}
          <View style={styles.menu}>
            <View style={styles.menuRight}>
              {props.rightMenu && props.rightMenu}
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  menu: {
    width: 50,
  },
  menuRight: {
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    alignItems: "center",
    height: 50,
    flexDirection: "row",
  },
  statusbarFix: {
    paddingTop: statusBarHeight,
  },
});
