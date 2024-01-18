import React from "react";

import { Button, Img, Line, List, Text } from "components";
import MainHomeCard from "components/MainHomeCard";

const MainhomePage = () => {
  return (
    <>
      <div className="bg-orange-50 flex flex-col font-urbanist items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-900 flex flex-col h-[747px] md:h-auto items-start justify-between p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[99px] justify-start w-full">
            <header className="flex flex-row md:gap-10 items-center justify-between md:px-5 px-[120px] py-[30px] w-full">
              <div className="flex flex-col items-end justify-start">
                <Text
                  className="my-1 sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                  size="txtUrbanistRomanBold23"
                >
                  WellNessMe
                </Text>
              </div>
              <ul className="flex md:flex-col flex-row gap-8 md:hidden items-center justify-start w-auto common-row-list">
                <li>
                  <a href="javascript:" className="text-lg text-white-A700">
                    <Text size="txtInterRegular18">How it works</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:" className="text-lg text-white-A700">
                    <Text size="txtInterRegular18">Pricing</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row font-urbanist items-center justify-center">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtUrbanistRomanRegular18"
                      >
                        Sleep health topics
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_icon.svg"
                        alt="icon"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <Button
                      className="cursor-pointer font-semibold font-urbanist leading-[normal] text-center text-lg"
                      color="white_A700"
                      variant="outline"
                    >
                      Sign in
                    </Button>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <Button className="cursor-pointer font-semibold font-urbanist leading-[normal] text-center text-lg">
                      Get started
                    </Button>
                  </a>
                </li>
              </ul>
            </header>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1133px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="max-w-[428px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                    size="txtUrbanistRomanBold40"
                  >
                    Online treatment for insomnia.
                  </Text>
                  <Text
                    className="leading-[28.00px] max-w-[428px] md:max-w-full text-2xl md:text-[22px] text-deep_purple-200 sm:text-xl"
                    size="txtUrbanistRomanRegular24"
                  >
                    Can’t sleep? Wake up easily? WellNessMe provides the
                    behavioral strategies and sleep medicine you need to get a
                    good night’s sleep.{" "}
                  </Text>
                  <Button className="cursor-pointer font-inter font-semibold leading-[normal] min-w-[130px] text-center text-lg">
                    Get started
                  </Button>
                </div>
              </div>
              <Img
                className="h-[263px] md:mt-0 mt-2 w-[261px]"
                src="images/img_img.svg"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 flex flex-col gap-[21px] h-[747px] md:h-auto items-start justify-start p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-6 items-start justify-start max-w-[1200px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-center text-indigo-200 w-full"
              size="txtUrbanistRomanMedium40"
            >
              How it works
            </Text>
            <Text
              className="leading-[28.00px] max-w-[1200px] md:max-w-full text-center text-lg text-white-A700"
              size="txtUrbanistRomanRegular18"
            >
              Prescription sleeping pills may help you fall asleep easier or
              stay asleep longer — or both. The risks and benefits of various
              prescription sleeping pills can differ. To find the right
              prescription medication to help you sleep, you should:
            </Text>
          </div>
          <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-end justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-8 h-full items-center justify-start py-8 w-full">
              <div className="bg-blue_gray-900 flex flex-col h-[135px] items-center justify-start p-[13px] rounded-[67px] w-[135px]">
                <div className="flex flex-col h-[106px] items-center justify-start p-[3px] w-[106px]">
                  <div className="flex flex-col h-[100px] items-start justify-start w-[100px]">
                    <div className="flex flex-row gap-[17px] items-start justify-between w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-10 items-center justify-start p-3 w-10"
                        style={{
                          backgroundImage: "url('images/img_group7.svg')",
                        }}
                      >
                        <Img
                          className="h-3"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5 items-center justify-start w-[43%]">
                        <Img
                          className="h-[30px] w-[30px]"
                          src="images/img_group7.svg"
                          alt="contrast"
                        />
                        <Img
                          className="h-2.5"
                          src="images/img_settings.svg"
                          alt="settings"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start ml-1.5 md:ml-[0] mt-1.5 w-3/4 md:w-full">
                      <Img
                        className="h-[30px] mb-0.5 w-[30px]"
                        src="images/img_group7.svg"
                        alt="contrast_One"
                      />
                      <Img
                        className="h-1 ml-[13px] mt-[27px] w-1"
                        src="images/img_vector_white_a700.svg"
                        alt="vector"
                      />
                      <Img
                        className="h-1 ml-2 mt-3.5 w-1"
                        src="images/img_vector_white_a700.svg"
                        alt="vector_One"
                      />
                      <Img
                        className="h-1 ml-2 w-1"
                        src="images/img_vector_white_a700.svg"
                        alt="vector_Two"
                      />
                    </div>
                    <Img
                      className="h-2.5 mt-1"
                      src="images/img_settings.svg"
                      alt="settings_One"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-start w-full">
                <Text
                  className="ml-3.5 md:ml-[0] text-[22px] text-indigo-200 sm:text-lg md:text-xl tracking-[0.44px]"
                  size="txtUrbanistRomanMedium22"
                >
                  Talk to our experts
                </Text>
                <Text
                  className="leading-[28.00px] text-lg text-white-A700 w-full"
                  size="txtUrbanistRomanRegular18"
                >
                  Book an appointment that’s convenient for you with one of our
                  many friendly and knowledgeable doctors online.
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-8 h-full items-center justify-start pb-8 pt-[120px] w-full">
              <div className="relative w-[136px]">
                <div className="bg-blue_gray-900_01 h-[135px] m-auto rounded-[67px] w-[135px]"></div>
                <Img
                  className="absolute h-[120px] inset-x-[0] mx-auto top-[0] w-[136px]"
                  src="images/img_charactermeditating.svg"
                  alt="charactermedita"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                <Text
                  className="text-[22px] text-indigo-200_01 sm:text-lg md:text-xl tracking-[0.44px]"
                  size="txtInterMedium22"
                >
                  2. Get the meditation
                </Text>
                <Text
                  className="leading-[28.00px] text-lg text-white-A700 w-full"
                  size="txtUrbanistRomanRegular18"
                >
                  Shipped direct to you we deliver non-addictive sleep aids to
                  your door with free shipping.
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-inter gap-8 h-full items-center justify-start py-8 w-full">
              <div className="relative w-[49%]">
                <div className="bg-blue_gray-900 h-[135px] ml-auto my-auto rounded-[67px] w-[135px]"></div>
                <Text
                  className="absolute left-[0] md:text-5xl text-[80px] text-white-A700 top-[10%] tracking-[0.44px] w-auto"
                  size="txtInterMedium80"
                >
                  <span className="text-white-A700 font-inter text-left font-light">
                    Z
                  </span>
                  <span className="md:text-5xl text-white-A700 font-inter text-left text-[70px] font-light">
                    z
                  </span>
                  <span className="md:text-[38px] sm:text-4xl text-white-A700 font-inter text-left text-[40px] font-light">
                    z
                  </span>
                </Text>
              </div>
              <div className="flex flex-col font-urbanist gap-2 items-start justify-start w-full">
                <Text
                  className="text-[22px] text-indigo-200 sm:text-lg md:text-xl tracking-[0.44px]"
                  size="txtUrbanistRomanMedium22"
                >
                  3. Sleep like never before
                </Text>
                <Text
                  className="leading-[28.00px] text-lg text-white-A700 w-full"
                  size="txtUrbanistRomanRegular18"
                >
                  Guarantee to get the most restful sleep.
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col font-urbanist gap-8 h-full items-center justify-start pb-8 pt-[120px] w-full">
              <div className="bg-blue_gray-900 flex flex-col h-[135px] items-center justify-start p-[17px] rounded-[67px] w-[135px]">
                <div className="md:h-14 h-[99px] pb-[3px] pl-[3px] relative w-[99px]">
                  <div className="absolute bottom-[3%] h-[55px] inset-x-[0] mx-auto w-[93%]">
                    <Img
                      className="absolute bottom-[16%] h-[31px] left-[20%]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Img
                      className="absolute h-[55px] inset-y-[0] left-[0] my-auto"
                      src="images/img_vector.svg"
                      alt="vector_Three"
                    />
                    <Img
                      className="absolute bottom-[0] h-[37px] right-[0]"
                      src="images/img_checkmark_white_a700.svg"
                      alt="checkmark_One"
                    />
                  </div>
                  <Img
                    className="absolute h-[45px] right-[0] top-[0]"
                    src="images/img_contrast.svg"
                    alt="contrast_Two"
                  />
                  <Img
                    className="absolute h-14 left-[34%] top-[3%]"
                    src="images/img_inbox.svg"
                    alt="inbox"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                <Text
                  className="text-[22px] text-indigo-200 sm:text-lg md:text-xl tracking-[0.44px]"
                  size="txtUrbanistRomanMedium22"
                >
                  4. Chat with our team
                </Text>
                <Text
                  className="leading-[28.00px] text-lg text-white-A700 w-full"
                  size="txtUrbanistRomanRegular18"
                >
                  Get helpful answers and ease your concerns right at your
                  fingertips with our care team.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 flex flex-col font-inter md:gap-10 gap-16 items-start justify-start p-[120px] md:px-10 sm:px-5 w-full">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-full"
            size="txtInterMedium40"
          >
            Testimonials
          </Text>
          <div className="max-w-[1200px] mx-auto relative w-full">
            <List
              className="sm:flex-col flex-row gap-4 grid md:grid-cols-1 grid-cols-2 justify-start my-auto w-auto"
              orientation="horizontal"
            >
              <MainHomeCard className="md:h-[223px] h-[254px] relative w-full" />
              <MainHomeCard
                className="md:h-[223px] h-[254px] relative w-full"
                userimage="images/img_image_56x56.png"
                username="Dave inau"
              />
            </List>
            <Img
              className="absolute h-16 inset-y-[0] my-auto right-[0] w-16"
              src="images/img_icon_blue_gray_900_02.svg"
              alt="icon_One"
            />
          </div>
        </div>
        <div className="bg-gray-900 flex flex-col font-inter items-start justify-start p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-center max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col gap-6 items-center justify-center w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
                size="txtInterMedium40"
              >
                Get a good night sleep Today.
              </Text>
              <Text
                className="text-[22px] text-center sm:text-lg text-white-A700 md:text-xl w-full"
                size="txtInterRegular22"
              >
                Get out experts help today, we make it easy so you can rest.
              </Text>
              <Button
                className="cursor-pointer font-semibold h-[52px] leading-[normal] text-center text-lg w-[132px]"
                color="deep_purple_700"
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
        <footer className="bg-gray-900 flex font-inter items-center justify-center md:px-5 w-full">
          <div className="h-[272px] sm:h-[334px] md:h-[726px] mb-[57px] mt-16 mx-auto relative w-[1110px] md:w-full">
            <div className="absolute bg-gray-900 flex flex-col gap-10 h-max inset-[0] items-center justify-start m-auto w-auto">
              <div className="flex md:flex-col flex-row gap-[59px] items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                    <div className="flex flex-col items-center justify-start w-[30%] md:w-full">
                      <div className="flex flex-col items-end justify-start pl-[5px] py-[5px] w-full">
                        <Text
                          className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                          size="txtInterBold23"
                        >
                          WellNessMe
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="italic text-base text-white-A700 w-auto"
                      size="txtInterExtraLightItalic16"
                    >
                      ?
                    </Text>
                  </div>
                  <div className="flex flex-row gap-8 items-start justify-start w-auto">
                    <div className="flex flex-col h-8 items-center justify-start w-8">
                      <div className="flex flex-col h-8 items-center justify-start w-8">
                        <Img
                          className="h-8 w-8"
                          src="images/img_user_white_a700.svg"
                          alt="user_One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col h-8 items-center justify-start w-8">
                      <div className="flex flex-col h-8 items-center justify-start w-8">
                        <Img
                          className="h-8 w-8"
                          src="images/img_facebook.svg"
                          alt="facebook"
                        />
                      </div>
                    </div>
                    <Img
                      className="h-8 w-8"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Company page
                  </Text>
                  <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_a2"
                      >
                        <Text size="txtInterRegular16">How it works</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_a2"
                      >
                        <Text size="txtInterRegular16">Pricing</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_a2"
                      >
                        <Text size="txtInterRegular16">About us</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtInterSemiBold20"
                  >
                    Sleep Health Topics
                  </Text>
                  <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_a2"
                      >
                        <Text size="txtInterRegular16">Tangerang</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_a2"
                      >
                        <Text size="txtInterRegular16">Jakarta</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_a2"
                      >
                        <Text size="txtInterRegular16">Surabaya</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-white-A700_a2"
                      >
                        <Text size="txtInterRegular16">Bekasi</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Line className="bg-white-A700_90 h-px w-full" />
            </div>
            <Text
              className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-white-A700_a2 w-max"
              size="txtInterRegular16"
            >
              Copyright © SengKuNi 2024
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MainhomePage;
