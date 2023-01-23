import { Sizing, sizing } from "lib/sizing";
import { fontSize } from "lib/font";
import { spacing } from "lib/spacing";

export type BadgeProportionTypes = {
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  fontSize: string;
};

export const badgeProportions: { [char: string]: BadgeProportionTypes } = {
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
