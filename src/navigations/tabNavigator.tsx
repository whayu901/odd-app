import React from "react";
import { Image, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Home from "../pages/home";
import Shop from "../pages/shop";
import Favourite from "../pages/favourite";
import { COLORS } from "../configs";
import MyIcon from "../../assets/icons";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: COLORS.white.main }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? MyIcon.homeActive : MyIcon.homeInactive}
              style={{ width: 26, height: 26 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                position: "absolute",
                bottom: 0,
              }}>
              <Image
                source={focused ? MyIcon.shopActive : MyIcon.shopInActive}
                style={{ width: 32, height: 32 }}
                resizeMode="contain"
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourite}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? MyIcon.heart : MyIcon.unHeart}
              style={{ width: 26, height: 26 }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
