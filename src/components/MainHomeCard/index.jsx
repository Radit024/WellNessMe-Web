import React from "react";

import { Img, Text } from "components";

const MainHomeCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[29px] sm:px-5 rounded-[12px] shadow-bs w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <div className="flex flex-row gap-4 items-center justify-start w-[57%] md:w-full">
                <Img
                  className="h-14 md:h-auto object-cover w-14"
                  alt="image"
                  src={props?.userimage}
                />
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-900_02 text-lg w-auto"
                    size="txtInterBold18"
                  >
                    {props?.username}
                  </Text>
                  <Text
                    className="text-blue_gray-700 text-xs w-auto"
                    size="txtInterMedium12"
                  >
                    {props?.websiteurl}
                  </Text>
                </div>
              </div>
              <Text
                className="leading-[28.00px] text-blue_gray-700 text-lg w-full"
                size="txtInterRegular18Bluegray700"
              >
                {props?.description}
              </Text>
            </div>
          </div>
        </div>
        <Img
          className="absolute h-[31px] left-[2%] top-[0]"
          src="images/img_contrast_blue_gray_700.svg"
          alt="contrast"
        />
        <Img
          className="absolute bottom-[0] h-[31px] right-[1%]"
          src="images/img_iconmetroquote.svg"
          alt="iconmetroquote"
        />
      </div>
    </>
  );
};

MainHomeCard.defaultProps = {
  userimage: "images/img_image.png",
  username: "Josh brollins",
  websiteurl: "mywebsite.com",
  description:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
};

export default MainHomeCard;
