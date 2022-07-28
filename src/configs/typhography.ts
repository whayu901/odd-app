import React from "react";
import { StyleSheet } from "react-native";

import { normalize } from "../utils";

import FONTS from "./fonts";
import COLORS from "./colors";

const TyphoGraphy = StyleSheet.create({
  H1: {
    fontFamily: FONTS.IBMPlexBold,
    fontSize: normalize(26),
    color: COLORS.black.main,
  },
  H2: {
    fontFamily: FONTS.IBMPlexMedium,
    fontSize: normalize(24),
    color: COLORS.black.main,
  },
  H2Bold: {
    fontFamily: FONTS.IBMPlexBold,
    fontSize: normalize(24),
    fontWeight: "bold",
    color: COLORS.black.main,
  },
  H3: {
    fontFamily: FONTS.IBMPlexMedium,
    fontSize: normalize(20),
    color: COLORS.black.main,
  },
  H3Bold: {
    fontFamily: FONTS.IBMPlexBold,
    fontSize: normalize(20),
    fontWeight: "bold",
    color: COLORS.black.main,
  },
  H4: {
    fontFamily: FONTS.IBMPlexMedium,
    fontSize: normalize(18),
  },
  H4Bold: {
    fontFamily: FONTS.IBMPlexBold,
    fontSize: normalize(18),
    color: COLORS.black.main,
    fontWeight: "bold",
  },
  Paragraph: {
    fontFamily: FONTS.IBMPlexMedium,
    fontSize: normalize(16),
    color: COLORS.black.main,
  },
  ParagraphBold: {
    fontFamily: FONTS.IBMPlexBold,
    fontSize: normalize(16),
    fontWeight: "bold",
    color: COLORS.black.main,
  },
  SmallParagraph: {
    fontFamily: FONTS.IBMPlexMedium,
    fontSize: normalize(14),
    color: COLORS.black.main,
  },
  SmallParagraphBold: {
    fontFamily: FONTS.IBMPlexBold,
    fontSize: normalize(14),
    fontWeight: "bold",
    color: COLORS.black.main,
  },
});

export default TyphoGraphy;
