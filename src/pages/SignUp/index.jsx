import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Img, Line, Text } from "components";

const SignUpPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-urbanist items-center justify-start mx-auto p-[102px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1488px] mb-[166px] mt-[13px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-36 justify-start w-[41%] md:w-full">
            <div className="flex flex-row items-start justify-start ml-6 md:ml-[0] w-[41%] md:w-full">
              <Img
                className="h-12 md:h-auto object-cover w-[49px]"
                src="images/img_whatsappimage20240112.png"
                alt="whatsappimageTwenty"
              />
              <div className="flex flex-col items-center justify-start mt-0.5">
                <Text
                  className="bg-clip-text bg-gradient  sm:text-[32.74px] md:text-[34.74px] text-[36.74px] text-transparent"
                  size="txtUrbanistRomanRegular3674"
                >
                  WellNessMe
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[39px] items-start justify-start w-full">
              <Text
                className="leading-[75.00px] md:text-5xl text-[63.75px] text-white-A700"
                size="txtUrbanistRomanRegular6375"
              >
                <>
                  Sign up to
                  <br />
                  get a good night’s sleep.{" "}
                </>
              </Text>
              <Text
                className="sm:text-[23.2px] md:text-[25.2px] text-[27.2px] text-white-A700"
                size="txtSatoshiMedium272"
              >
                <span className="md:text-[25.23px] sm:text-[23.23px] text-white-A700 font-urbanist text-left text-[27.23px] font-normal">
                  <>
                    if you already have an account
                    <br />
                    you can
                  </>
                </span>
                <span className="md:text-[25.23px] sm:text-[23.23px] text-black-900 font-urbanist text-left text-[27.23px] font-normal">
                  {" "}
                </span>
                <span className="md:text-[25.23px] sm:text-[23.23px] text-indigo-A400 font-urbanist text-left text-[27.23px] font-normal">
                  Login here!
                </span>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[11px] items-center justify-start md:mt-0 mt-[130px] w-[27%] md:w-full">
            <Text
              className="sm:text-[35.94px] md:text-[41.94px] text-[45.94px] text-white-A700"
              size="txtUrbanistRomanRegular4594"
            >
              Welcome User
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:h-[59px] h-[76px] py-[7px] relative w-full">
                <div className="bg-blue_gray-50 h-[59px] m-auto rounded-[9px] w-full"></div>
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto w-[90%]">
                  <Text
                    className="text-[17.78px] text-blue_gray-700_01 tracking-[1.60px]"
                    size="txtUrbanistRomanRegular1778"
                  >
                    Enter Email
                  </Text>
                  <Img
                    className="h-[23px] w-[23px]"
                    src="images/img_xicon_blue_gray_500.svg"
                    alt="xicon"
                  />
                </div>
              </div>
              <div className="md:h-[304px] h-[455px] mt-0.5 relative w-full">
                <div className="absolute bottom-[0] h-[379px] inset-x-[0] mx-auto w-full">
                  <div className="flex md:h-[59px] h-[76px] justify-end mb-[-0.47px] ml-0.5 py-[5px] w-[30%] z-[1]">
                    <div className="bg-blue_gray-50 h-[59px] mt-auto mx-auto rounded-[9px] w-full"></div>
                    <Text
                      className="absolute bottom-[32%] left-[20%] text-[17.78px] text-blue_gray-700_01 tracking-[1.60px]"
                      size="txtUrbanistRomanRegular1778"
                    >
                      Age
                    </Text>
                  </div>
                  <div className="flex md:h-[59px] h-[76px] justify-end mb-[-0.47px] ml-auto mr-1 py-[5px] w-[67%] z-[1]">
                    <div className="bg-blue_gray-50 h-[59px] mt-auto mx-auto rounded-[9px] w-full"></div>
                    <div className="absolute bottom-[29%] flex flex-row inset-x-[0] items-start justify-between mx-auto w-[82%]">
                      <Text
                        className="text-[17.78px] text-blue_gray-700_01 tracking-[1.60px]"
                        size="txtUrbanistRomanRegular1778"
                      >
                        Gender
                      </Text>
                      <Img
                        className="h-[23px] w-[23px]"
                        src="images/img_xicon_blue_gray_500.svg"
                        alt="xicon_One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-auto mx-auto w-full">
                    <div className="flex flex-col gap-12 justify-start w-full">
                      <div className="flex flex-col items-center justify-start ml-64 md:ml-[0]">
                        <Text
                          className="text-[13.83px] text-gray-400 tracking-[1.38px]"
                          size="txtUrbanistRomanRegular1383"
                        >
                          Having Problem ?
                        </Text>
                      </div>
                      <div className="flex flex-col font-satoshi items-center justify-start w-full">
                        <a
                          href="javascript:"
                          className="bg-indigo-A400 h-[59px] justify-center pb-3.5 pt-[18px] sm:px-5 px-[35px] rounded-[9px] text-[18.76px] text-shadow-ts text-white-A700 tracking-[1.69px] w-[395px]"
                        >
                          <Text size="txtSatoshiBold1876">Register</Text>
                        </a>
                        <div className="flex flex-row font-urbanist items-center justify-between mt-[52px] w-full">
                          <Line className="bg-gray-300 h-px my-[7px] w-[30%]" />
                          <a
                            href="javascript:"
                            className="text-[13.83px] text-gray-500 tracking-[1.24px]"
                          >
                            <Text size="txtUrbanistRomanRegular1383Gray500">
                              Or continue with
                            </Text>
                          </a>
                          <Line className="bg-gray-300 h-px my-[7px] w-[30%]" />
                        </div>
                        <div className="flex flex-row gap-[25px] items-center justify-between mt-[50px] w-full">
                          <div className="bg-gray-100_01 border border-gray-300_01 border-solid flex flex-col items-center justify-start p-3.5 rounded-[9px] w-[30%]">
                            <Img
                              className="common-pointer h-[29px]"
                              src="images/img_google.svg"
                              alt="google"
                              onClick={() => googleSignIn()}
                            />
                          </div>
                          <div className="bg-white-A700 flex flex-col items-center justify-start p-3.5 rounded-[9px] shadow-bs3 w-[30%]">
                            <Img
                              className="h-[29px]"
                              src="images/img_shape.svg"
                              alt="shape"
                            />
                          </div>
                          <div className="bg-gray-100_01 border border-gray-300_01 border-solid flex flex-col items-center justify-start p-3.5 rounded-[9px] w-[30%]">
                            <Img
                              className="h-[29px]"
                              src="images/img_facebook_blue_600.svg"
                              alt="facebook"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute md:h-[59px] h-[76px] inset-x-[0] mx-auto py-[7px] top-[0] w-full">
                  <div className="bg-blue_gray-50 h-[59px] m-auto rounded-[9px] w-full"></div>
                  <div className="absolute flex flex-row h-max inset-[0] items-start justify-between m-auto w-[89%]">
                    <Text
                      className="sm:text-[21.68px] md:text-[23.68px] text-[25.68px] text-blue_gray-500"
                      size="txtUrbanistRomanRegular2568"
                    >
                      ••••••••
                    </Text>
                    <Img
                      className="h-[23px] mt-0.5 w-[23px]"
                      src="images/img_xicon.svg"
                      alt="xicon_Two"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
