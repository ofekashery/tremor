/**
 * NOTE: The ButtonInline component is deprecated and will be removed in the next major release.
 * Please refer to the variant="light" property of the Button component instead.
 */

import React from "react";

import {
  BaseColors,
  HorizontalPositions,
  Sizes,
  classNames,
  defaultColors,
  getColorTheme,
  getColorVariantsFromColorThemeValue,
  isValidSize,
  parseMarginTop,
} from "lib";
import {
  ButtonType,
  Color,
  HorizontalPosition,
  MarginTop,
  Size,
} from "../../../lib/inputTypes";
import { buttonProportions, iconSizes } from "./styles";
import { ButtonIconOrSpinner } from "components/input-elements/Button/Button";
import { Transition } from "react-transition-group";

export interface ButtonInlineProps {
  type?: ButtonType;
  text?: string;
  value?: any;
  icon?: React.ElementType;
  iconPosition?: HorizontalPosition;
  size?: Size;
  color?: Color;
  handleClick?: () => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: React.FormEventHandler<HTMLButtonElement>;
  onReset?: React.FormEventHandler<HTMLButtonElement>;
  marginTop?: MarginTop;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  children?: React.ReactNode;
}

const ButtonInline = ({
  type = "button",
  text,
  value,
  icon,
  iconPosition = HorizontalPositions.Start,
  handleClick, // Deprecated
  onClick,
  onSubmit,
  onReset,
  size = Sizes.SM,
  color = BaseColors.Blue,
  marginTop = "mt-0",
  disabled = false,
  loading = false,
  loadingText,
  children,
}: ButtonInlineProps) => {
  console.warn(
    "DeprecationWarning: The `ButtonInline` component is deprecated and will be removed in the next major release. Please use `<Button variant='light'>` instead."
  );

  if (handleClick) {
    console.warn(
      "DeprecationWarning: The `handleClick` property is deprecated and will be removed in the next major release. Please use `onClick` instead."
    );
  }

  const Icon = icon;

  const isDisabled = loading || disabled;
  const showButtonIconOrSpinner = Icon !== undefined || loading;
  const showLoadingText = loading && loadingText;

  const buttonSize = isValidSize(size) ? size : Sizes.SM;
  const iconSize = classNames(
    iconSizes[buttonSize].height,
    iconSizes[buttonSize].width
  );

  return (
    <Transition in={loading} timeout={50}>
      {(state) => (
        <div
          className={classNames(
            "tremor-base tr-flex tr-items-center",
            parseMarginTop(marginTop)
          )}
        >
          <button
            value={value}
            type={type}
            onClick={handleClick ?? onClick}
            onSubmit={onSubmit}
            onReset={onReset}
            className={classNames(
              "input-elem tr-flex-shrink-0 tr-inline-flex tr-items-center tr-group tr-font-medium",
              "focus:tr-outline-none focus:tr-ring-none",
              buttonProportions[buttonSize].fontSize,
              getColorVariantsFromColorThemeValue(getColorTheme(color).text)
                .textColor,
              getColorVariantsFromColorThemeValue(defaultColors.transparent)
                .bgColor,
              getColorVariantsFromColorThemeValue(defaultColors.transparent)
                .hoverBgColor,
              !isDisabled
                ? classNames(
                    getColorVariantsFromColorThemeValue(
                      getColorTheme(color).darkText
                    ).hoverTextColor
                  )
                : "tr-opacity-50"
            )}
            disabled={isDisabled}
          >
            {showButtonIconOrSpinner &&
            iconPosition !== HorizontalPositions.End ? (
              <ButtonIconOrSpinner
                loading={loading}
                iconSize={iconSize}
                iconPosition={iconPosition}
                Icon={Icon}
                transitionState={state}
              />
            ) : null}
            {
              <p className="text-elem tr-whitespace-nowrap">
                {showLoadingText ? loadingText : !children ? text : children}
              </p>
            }
            {showButtonIconOrSpinner &&
            iconPosition === HorizontalPositions.End ? (
              <ButtonIconOrSpinner
                loading={loading}
                iconSize={iconSize}
                iconPosition={iconPosition}
                Icon={Icon}
                transitionState={state}
              />
            ) : null}
          </button>
        </div>
      )}
    </Transition>
  );
};

export default ButtonInline;
