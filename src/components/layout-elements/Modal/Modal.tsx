import React, { useEffect, useRef, useState } from "react";

import { useOnClickOutside, useOnWindowResize } from "hooks";

import { HorizontalPosition, Width } from "../../../lib/inputTypes";
import {
  HorizontalPositions,
  border,
  borderRadius,
  boxShadow,
  classNames,
  defaultColors,
  getColorVariantsFromColorThemeValue,
  getPixelsFromTwClassName,
  parseWidth,
  spacing,
} from "lib";

export interface ModalProps {
  showModal: boolean;
  setShowModal:
    | React.Dispatch<React.SetStateAction<boolean>>
    | ((nextState: boolean) => void);
  triggerRef: React.RefObject<HTMLElement>;
  width?: Width;
  maxHeight?: string;
  anchorPosition?: HorizontalPosition;
  children: React.ReactNode;
}

const Modal = ({
  showModal,
  setShowModal,
  triggerRef,
  width,
  maxHeight = "tr-max-h-72",
  anchorPosition = HorizontalPositions.Start,
  children,
}: ModalProps) => {
  const [modalExceedsWindow, setModalExceedsWindow] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const checkModalExceedsWindow = (
    modalWidth: number,
    windowWidth: number
  ): boolean => {
    if (!triggerRef.current) {
      return false;
    }
    const isRTL = getComputedStyle(triggerRef.current).direction === "rtl";
    if (
      (!isRTL && anchorPosition === HorizontalPositions.Start) ||
      (isRTL && anchorPosition === HorizontalPositions.End)
    ) {
      const modalBoundingRight =
        triggerRef.current.getBoundingClientRect().left + modalWidth;
      return windowWidth - modalBoundingRight < 0;
    } else if (
      (!isRTL && anchorPosition === HorizontalPositions.End) ||
      (isRTL && anchorPosition === HorizontalPositions.Start)
    ) {
      const modalBoundingLeft =
        triggerRef.current.getBoundingClientRect().right - modalWidth;
      return modalBoundingLeft < 0;
    }
    return false;
  };

  const getAbsoluteSpacing = () => {
    console.log("getAbsoluteSpacing", anchorPosition);
    if (anchorPosition === HorizontalPositions.Start) {
      if (!modalExceedsWindow) {
        return spacing.none.start;
      } else {
        return spacing.none.end;
      }
    }
    if (anchorPosition === HorizontalPositions.End) {
      if (!modalExceedsWindow) {
        return spacing.none.end;
      } else {
        return spacing.none.start;
      }
    }
    return spacing.none.start;
  };

  useOnClickOutside(modalRef, (e) => {
    // Exclude click on trigger button (e.g. Dropdown Button) from outside click handler
    const isTriggerElem = triggerRef
      ? triggerRef.current?.contains(e.target)
      : false;
    if (!isTriggerElem) {
      setShowModal(false);
    }
  });

  // Execute only when modal is of absolute size
  if (width !== undefined) {
    const widthInPixel = getPixelsFromTwClassName(width);
    useEffect(() => {
      setModalExceedsWindow(
        checkModalExceedsWindow(widthInPixel, window.innerWidth)
      );
    }, [triggerRef]);

    useOnWindowResize(() =>
      setModalExceedsWindow(
        checkModalExceedsWindow(widthInPixel, window.innerWidth)
      )
    );
  }

  return showModal ? (
    <div
      ref={modalRef}
      className={classNames(
        "tr-absolute tr-z-10 tr-divide-y tr-overflow-y-auto",
        width ? parseWidth(width) : "tr-w-full",
        getAbsoluteSpacing(),
        maxHeight,
        getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
        getColorVariantsFromColorThemeValue(defaultColors.lightBorder)
          .borderColor,
        getColorVariantsFromColorThemeValue(defaultColors.lightBorder)
          .divideColor,
        spacing.twoXs.marginTop,
        spacing.twoXs.marginBottom,
        borderRadius.md.all,
        border.sm.all,
        boxShadow.lg
      )}
    >
      {children}
    </div>
  ) : null;
};

export default Modal;
