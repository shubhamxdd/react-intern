import Button from "../Button";

const FooterTop = () => {
  return (
    <div className="flex justify-center items-center px-20 py-6 w-full text-center bg-slate-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[618px]">
        <h1 className="text-5xl font-semibold pb-10 text-gray-800 leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
          Lorem ipsum dolor sit amet consectetuer
        </h1>
        <div className="mt-6 max-md:px-5">
          <Button label="Get a Demo" showArrow />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
