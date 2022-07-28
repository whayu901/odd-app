import React from "react";
import { View, Text, Image } from "react-native";
import { Card, Button } from "react-native-paper";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconFeather from "react-native-vector-icons/Feather";

import { COLORS, TYPHOGRAPHY } from "../../../configs";
import MyIcon from "../../../../assets/icons";

const CardProduct = () => {
  return (
    <Card
      elevation={3}
      style={{
        borderRadius: 6,
        backgroundColor: COLORS.grey.main,
        width: "70%",
      }}>
      <Card.Cover
        source={{ uri: "https://picsum.photos/700" }}
        style={{ borderBottomEndRadius: 12, borderBottomStartRadius: 12 }}
      />

      <View
        style={{
          backgroundColor: COLORS.grey.light,
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 12,
          flexWrap: "nowrap",
          alignSelf: "flex-start",
          position: "absolute",
          top: 10,
          left: 10,
        }}>
        <Text style={{ ...TYPHOGRAPHY.SmallParagraph }}>Hello world</Text>
      </View>
      <View style={{ position: "absolute", top: 10, right: 10 }}>
        <Image
          source={MyIcon.unWhishlist}
          resizeMode="contain"
          style={{ width: 40, height: 40 }}
        />
      </View>

      <Card.Content>
        <View style={{ marginTop: 10 }}>
          <View>
            <Text style={{ ...TYPHOGRAPHY.H3Bold, color: COLORS.black.main }}>
              Hello world kjhdsfjkhsdkfh
            </Text>
            <Text style={{ ...TYPHOGRAPHY.SmallParagraph, marginTop: 5 }}>
              Natural, Glutten free
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10,
              }}>
              <IconAnt name="star" color={COLORS.yellow.main} size={15} />
              <Text style={{ ...TYPHOGRAPHY.SmallParagraph, marginLeft: 5 }}>
                3.9
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={MyIcon.price}
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ ...TYPHOGRAPHY.SmallParagraph, marginLeft: 5 }}>
                15.9
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <IconFeather name="info" size={15} />
            <Text style={{ ...TYPHOGRAPHY.SmallParagraph, marginLeft: 5 }}>
              Cream - Blush
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}>
            <Button mode="outlined" uppercase={false}>
              <Text style={{ color: COLORS.black.main2 }}>View Brand</Text>
            </Button>
            <Button
              mode="contained"
              uppercase={false}
              color={COLORS.purple.main}>
              <Text style={{ color: COLORS.white.main }}>Order Now</Text>
            </Button>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default CardProduct;
