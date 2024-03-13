import { IoBasketballOutline } from "react-icons/io5";
import Button from "./Button";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import SocialLogo from "./SocialLogo";

import { FiSend } from "react-icons/fi";

const Footer = () => {
  const socialLogos = [FaInstagram, IoBasketballOutline, FaTwitter, FaYoutube];
  return (
    <div className="flex flex-col pt-16">
      <div className="flex justify-center items-center px-20 py-6 w-full text-center bg-slate-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[618px]">
          <div className="text-5xl font-semibold pb-10 text-gray-800 leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
            Lorem ipsum dolor sit amet consectetuer
          </div>
          <div className="flex gap-1.5 justify-center self-center px-6 py-2.5 mt-6 max-md:px-5">
            <Button label="Get a Demo" showArrow />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-11 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[772px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10">
                <div className="text-xs leading-4 whitespace-nowrap text-slate-100">
                  Copyright © 2020 Landify UI Kit.
                </div>
                <div className="mt-1.5 text-xs leading-4 whitespace-nowrap text-slate-100">
                  All rights reserved
                </div>
                <div className="flex gap-3 pr-20 mt-7 max-md:pr-5">
                  {socialLogos.map((item, i) => (
                    <SocialLogo logo={item} key={i} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm font-light leading-4 whitespace-nowrap text-slate-100 max-md:mt-5">
                      <div className="text-lg font-semibold leading-5 text-white">
                        Company
                      </div>
                      <div className="mt-4">About us</div>
                      <div className="mt-2.5">Blog</div>
                      <div className="mt-2">Contact us</div>
                      <div className="mt-2">Pricing</div>
                      <div className="mt-2.5">Testimonials</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-sm font-light leading-4 whitespace-nowrap text-slate-100 max-md:mt-5">
                      <div className="text-lg font-semibold leading-5 text-white">
                        Support
                      </div>
                      <div className="mt-4">Help center</div>
                      <div className="mt-2.5">Terms of service</div>
                      <div className="mt-2">Legal</div>
                      <div className="mt-2">Privacy policy</div>
                      <div className="mt-2.5">Status</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col max-md:mt-5">
                      <div className="text-lg font-semibold leading-5  text-white">
                        Stay up to date
                      </div>
                      <div className="flex gap-5 items-center justify-between p-2 mt-4 text-xs leading-4 text-gray-300 rounded-md bg-slate-700">
                        <input
                          type="text"
                          placeholder="Your email address"
                          className="pl-3 py-1 bg-slate-700 outline-none"
                        />
                        <div className="pr-4">
                          <FiSend className="" size={20} color="white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
