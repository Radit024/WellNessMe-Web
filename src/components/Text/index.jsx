import React from "react";

const sizeClasses = {
  txtUrbanistRomanBold23: "font-bold font-urbanist",
  txtUrbanistRomanRegular1381: "font-normal font-urbanist",
  txtUrbanistRomanRegular24: "font-normal font-urbanist",
  txtUrbanistRomanRegular1381Gray500: "font-normal font-urbanist",
  txtUrbanistRomanRegular6375: "font-normal font-urbanist",
  txtUrbanistRomanRegular4594: "font-normal font-urbanist",
  txtUrbanistRomanRegular1383: "font-normal font-urbanist",
  txtInterExtraLightItalic16: "font-inter font-thin italic",
  txtInterMedium22: "font-inter font-medium",
  txtInterRegular18Bluegray700: "font-inter font-normal",
  txtUrbanistRomanBold40: "font-bold font-urbanist",
  txtInterBold23: "font-bold font-inter",
  txtUrbanistRomanRegular1383Gray500: "font-normal font-urbanist",
  txtInterRegular22: "font-inter font-normal",
  txtUrbanistRomanRegular459: "font-normal font-urbanist",
  txtUrbanistRomanRegular3674: "font-normal font-urbanist",
  txtInterBold18: "font-bold font-inter",
  txtUrbanistRomanRegular18: "font-normal font-urbanist",
  txtSatoshiBold1876: "font-bold font-satoshi",
  txtInterMedium12: "font-inter font-medium",
  txtUrbanistRomanRegular2565: "font-normal font-urbanist",
  txtUrbanistRomanRegular1778: "font-normal font-urbanist",
  txtUrbanistRomanRegular1776: "font-normal font-urbanist",
  txtUrbanistRomanRegular2568: "font-normal font-urbanist",
  txtUrbanistRomanMedium40: "font-medium font-urbanist",
  txtSatoshiMedium272: "font-medium font-satoshi",
  txtInterMedium80: "font-inter font-medium",
  txtInterMedium40: "font-inter font-medium",
  txtInterSemiBold20: "font-inter font-semibold",
  txtUrbanistRomanMedium22: "font-medium font-urbanist",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
