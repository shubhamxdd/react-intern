import FooterTop from "./FooterTop";
import FooterSocial from "./FooterSocial";
import SocialLinks from "./SocialLinks";
import FooterEmail from "./FooterEmail";

const Footer = () => {
  return (
    <div className="flex flex-col pt-16">
      <FooterTop />
      <div className="flex justify-center items-center px-16 py-11 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[772px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <FooterSocial />
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <SocialLinks />
                  <FooterEmail />
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
