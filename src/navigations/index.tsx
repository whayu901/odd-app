import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./tabNavigator";

const Route = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Route;
