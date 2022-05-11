import React from "react";
import { View } from "react-native";

export const Spacer = ({ height = 0, width = 0 }) => (
  <View style={{ height, width }} />
);
