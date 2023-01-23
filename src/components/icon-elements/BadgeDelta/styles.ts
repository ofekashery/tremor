import {
  BaseColors,
  DeltaTypes,
  Sizing,
  fontSize,
  getColorTheme,
  getColorVariantsFromColorThemeValue,
  sizing,
  spacing,
} from "lib";

import {
  ArrowDownIcon,
  ArrowDownRightIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpRightIcon,
} from "assets";

export type BadgeProportionTypes = {
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  fontSize: string;
};

export const badgeProportionsIconOnly: {
  [char: string]: BadgeProportionTypes;
} = {
  xs: {
    paddingLeft: spacing.sm.paddingStart,
    paddingRight: spacing.sm.paddingEnd,
    paddingTop: spacing.threeXs.paddingTop,
    paddingBottom: spacing.threeXs.paddingBottom,
    fontSize: fontSize.xs,
  },
  sm: {
    paddingLeft: spacing.md.paddingStart,
    paddingRight: spacing.md.paddingEnd,
    paddingTop: spacing.twoXs.paddingTop,
    paddingBottom: spacing.twoXs.paddingBottom,
    fontSize: fontSize.sm,
  },
  md: {
    paddingLeft: spacing.lg.paddingStart,
    paddingRight: spacing.lg.paddingEnd,
    paddingTop: spacing.xs.paddingTop,
    paddingBottom: spacing.xs.paddingBottom,
    fontSize: fontSize.md,
  },
  lg: {
    paddingLeft: spacing.xl.paddingStart,
    paddingRight: spacing.xl.paddingEnd,
    paddingTop: spacing.xs.paddingTop,
    paddingBottom: spacing.xs.paddingBottom,
    fontSize: fontSize.lg,
  },
  xl: {
    paddingLeft: spacing.xl.paddingStart,
    paddingRight: spacing.xl.paddingEnd,
    paddingTop: spacing.xs.paddingTop,
    paddingBottom: spacing.xs.paddingBottom,
    fontSize: fontSize.xl,
  },
};

export const badgeProportionsWithText: {
  [char: string]: BadgeProportionTypes;
} = {
  xs: {
    paddingLeft: spacing.sm.paddingStart,
    paddingRight: spacing.sm.paddingEnd,
    paddingTop: spacing.threeXs.paddingTop,
    paddingBottom: spacing.threeXs.paddingBottom,
    fontSize: fontSize.xs,
  },
  sm: {
    paddingLeft: spacing.md.paddingStart,
    paddingRight: spacing.md.paddingEnd,
    paddingTop: spacing.threeXs.paddingTop,
    paddingBottom: spacing.threeXs.paddingBottom,
    fontSize: fontSize.sm,
  },
  md: {
    paddingLeft: spacing.lg.paddingStart,
    paddingRight: spacing.lg.paddingEnd,
    paddingTop: spacing.threeXs.paddingTop,
    paddingBottom: spacing.threeXs.paddingBottom,
    fontSize: fontSize.md,
  },
  lg: {
    paddingLeft: spacing.xl.paddingStart,
    paddingRight: spacing.xl.paddingEnd,
    paddingTop: spacing.threeXs.paddingTop,
    paddingBottom: spacing.threeXs.paddingBottom,
    fontSize: fontSize.lg,
  },
  xl: {
    paddingLeft: spacing.twoXl.paddingStart,
    paddingRight: spacing.twoXl.paddingEnd,
    paddingTop: spacing.twoXs.paddingTop,
    paddingBottom: spacing.twoXs.paddingBottom,
    fontSize: fontSize.xl,
  },
};

export const iconSizes: { [size: string]: Sizing } = {
  xs: {
    height: sizing.md.height,
    width: sizing.md.width,
  },
  sm: {
    height: sizing.md.height,
    width: sizing.md.width,
  },
  md: {
    height: sizing.md.height,
    width: sizing.md.width,
  },
  lg: {
    height: sizing.lg.height,
    width: sizing.lg.width,
  },
  xl: {
    height: sizing.xl.height,
    width: sizing.xl.width,
  },
};

export type ColorTypes = {
  bgColor: string;
  textColor: string;
};

export const colors: { [key: string]: ColorTypes } = {
  [DeltaTypes.Increase]: {
    bgColor: getColorVariantsFromColorThemeValue(
      getColorTheme(BaseColors.Emerald).lightBackground
    ).bgColor,
    textColor: getColorVariantsFromColorThemeValue(
      getColorTheme(BaseColors.Emerald).darkText
    ).textColor,
  },
  [DeltaTypes.ModerateIncrease]: {
    bgColor: getColorVariantsFromColorThemeValue(
      getColorTheme(BaseColors.Emerald).lightBackground
    ).bgColor,
    textColor: getColorVariantsFromColorThemeValue(
      getColorTheme(BaseColors.Emerald).darkText
    ).textColor,
  },
  [DeltaTypes.Decrease]: {
    bgColor: getColorVariantsFromColorThemeValue(
      getColorTheme(BaseColors.Rose).lightBackground
    ).bgColor,
    textColor: getColorVariantsFromColorThemeValue(
      getColorTheme(BaseColors.Rose).darkText
    ).textColor,
  },
  [DeltaTypes.ModerateDecrease]: {
    bgColor: getColorVariantsFromColorThemeValue(
      getColorTheme(BaseColors.Rose).lightBackground
    ).bgColor,
    textColor: getColorVariantsFromColorThemeValue(
      getColorTheme(BaseColors.Rose).darkText
    ).textColor,
  },
  [DeltaTypes.Unchanged]: {
    bgColor: getColorVariantsFromColorThemeValue(
      getColorTheme(BaseColors.Orange).lightBackground
    ).bgColor,
    textColor: getColorVariantsFromColorThemeValue(
      getColorTheme(BaseColors.Orange).darkText
    ).textColor,
  },
};

export const deltaIcons: { [key: string]: React.ElementType } = {
  [DeltaTypes.Increase]: ArrowUpIcon,
  [DeltaTypes.ModerateIncrease]: ArrowUpRightIcon,
  [DeltaTypes.Decrease]: ArrowDownIcon,
  [DeltaTypes.ModerateDecrease]: ArrowDownRightIcon,
  [DeltaTypes.Unchanged]: ArrowRightIcon,
};
