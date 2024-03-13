import { IoBasketballOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter, FaYoutube } from "react-icons/fa";

import SocialLogo from "../SocialLogo";

const FooterSocial = () => {
  const socialLogos = [FaInstagram, IoBasketballOutline, FaTwitter, FaYoutube];
  return (
    <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col max-md:mt-10">
        <p className="text-xs leading-4 whitespace-nowrap text-slate-100">
          Copyright © 2020 Landify UI Kit.
        </p>
        <p className="mt-1.5 text-xs leading-4 whitespace-nowrap text-slate-100">
          All rights reserved
        </p>
        <div className="flex gap-3 pr-20 mt-7 max-md:pr-5">
          {socialLogos.map((item, i) => (
            <SocialLogo logo={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterSocial;
