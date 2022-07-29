import React from "react";
import { View, Text, SafeAreaView, ImageBackground } from "react-native";

import { CardProduct } from "../../component/moleculs";
import MyIcon from "../../../assets/icons";
import { TYPHOGRAPHY } from "../../configs";

const Home = () => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={MyIcon.backGround}
        style={{ width: "100%", height: "100%" }}>
        <CardProduct />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
