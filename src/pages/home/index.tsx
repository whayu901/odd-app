import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { CardProduct } from "../../component/moleculs";
import { TYPHOGRAPHY } from "../../configs";

const Home = () => {
  return (
    <SafeAreaView style={{ marginHorizontal: 10 }}>
      <CardProduct />
    </SafeAreaView>
  );
};

export default Home;
