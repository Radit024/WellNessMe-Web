import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, Img, Line, Text } from "components";

const SignInPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-urbanist items-center justify-start mx-auto p-[103px] md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1495px] mb-44 mx-auto w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[181px] justify-start mb-[185px] w-[41%] md:w-full">
            <div className="flex flex-row items-start justify-start md:ml-[0] ml-[43px] w-[41%] md:w-full">
              <Img
                className="h-12 md:h-auto object-cover w-[49px]"
                src="images/img_whatsappimage20240112.png"
                alt="whatsappimageTwenty"
              />
              <div className="flex flex-col items-center justify-start mt-[3px]">
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
                  Sign In to
                  <br />
                  get a good night’s sleep.{" "}
                </>
              </Text>
              <Text
                className="sm:text-[23.2px] md:text-[25.2px] text-[27.2px] text-white-A700"
                size="txtSatoshiMedium272"
              >
                <span className="text-white-A700 font-urbanist text-left font-normal">
                  <>
                    if you don’t have an account
                    <br />
                    you can{" "}
                  </>
                </span>
                <span className="text-indigo-A400 font-urbanist text-left font-normal">
                  Register here!
                </span>
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[9px] items-center justify-start md:mt-0 mt-[193px] w-[27%] md:w-full">
            <Text
              className="sm:text-[35.9px] md:text-[41.9px] text-[45.9px] text-white-A700"
              size="txtUrbanistRomanRegular459"
            >
              Welcome Back
            </Text>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:h-[59px] h-[75px] py-[7px] relative w-full">
                <div className="bg-blue_gray-50 h-[59px] m-auto rounded-[9px] w-full"></div>
                <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto w-[90%]">
                  <Text
                    className="text-[17.76px] text-blue_gray-700_01 tracking-[1.60px]"
                    size="txtUrbanistRomanRegular1776"
                  >
                    Enter Email
                  </Text>
                  <Img
                    className="h-[23px] w-[23px]"
                    src="images/img_close.svg"
                    alt="close"
                  />
                </div>
              </div>
              <div className="md:h-[61px] h-[75px] mt-0.5 py-[7px] relative w-full">
                <div className="bg-blue_gray-50 h-[59px] m-auto rounded-[9px] w-full"></div>
                <div className="absolute flex flex-row h-max inset-[0] items-start justify-between m-auto w-[90%]">
                  <Text
                    className="sm:text-[21.65px] md:text-[23.65px] text-[25.65px] text-blue_gray-500"
                    size="txtUrbanistRomanRegular2565"
                  >
                    ••••••••
                  </Text>
                  <Img
                    className="h-[23px] mt-0.5 w-[23px]"
                    src="images/img_xicon.svg"
                    alt="xicon"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[13px] w-full">
                <div className="flex flex-col gap-[50px] items-end justify-start w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-[13.81px] text-gray-400 tracking-[1.38px]"
                      size="txtUrbanistRomanRegular1381"
                    >
                      Recover Password ?
                    </Text>
                  </div>
                  <div className="flex flex-col font-satoshi items-center justify-start w-full">
                    <Button className="cursor-pointer font-bold min-w-[394px] sm:min-w-full rounded-[9px] shadow-bs1 text-[18.75px] text-center tracking-[1.69px]">
                      Sign In
                    </Button>
                    <div className="flex flex-row font-urbanist items-center justify-between mt-[52px] w-full">
                      <Line className="bg-gray-300 h-px my-[7px] w-[30%]" />
                      <a
                        href="javascript:"
                        className="text-[13.81px] text-gray-500 tracking-[1.24px]"
                      >
                        <Text size="txtUrbanistRomanRegular1381Gray500">
                          Or continue with
                        </Text>
                      </a>
                      <Line className="bg-gray-300 h-px my-[7px] w-[30%]" />
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[50px] w-full">
                      <div className="bg-gray-100_01 border border-gray-300_01 border-solid flex flex-col items-center justify-start p-3.5 rounded-[9px] w-[30%]">
                        <Img
                          className="common-pointer h-[29px]"
                          src="images/img_google.svg"
                          alt="google"
                          onClick={() => googleSignIn()}
                        />
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-3.5 rounded-[9px] shadow-bs2 w-[30%]">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
