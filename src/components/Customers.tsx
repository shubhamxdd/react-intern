import { FaArrowRight } from "react-icons/fa";
const Customers = () => {
  const customersArray = [
    "/Logo.svg",
    "/Logo-1.svg",
    "/Logo-2.svg",
    "/Logo-3.svg",
    "/Logo-4.svg",
    "/Logo-5.svg",
  ];
  return (
    <section className="px-20 py-6 bg-slate-100 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[20%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="/image 9.png"
            className="w-full shadow-sm max-md:mt-10"
          />
        </div>
        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            <p className="text-base font-medium leading-[20px] text-neutral-600 max-md:max-w-full">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h4 className="my-4 text-lg font-semibold leading-5 text-green-600 max-md:max-w-full">
              Tim Smith
            </h4>
            <h4 className="text-sm leading-4 text-gray-500 max-md:max-w-full">
              British Dragon Boat Racing Association
            </h4>
            <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap">
              <div className="flex flex-auto gap-5 justify-between">
                {customersArray.map((item, i) => (
                  <img
                    key={i}
                    src={item}
                    loading="lazy"
                    className="shrink-0 aspect-square w-[50px]"
                  />
                ))}
              </div>
              <div className="flex gap-1.5 py-6 text-sm font-semibold leading-5 text-green-500">
                <p className="grow">Meet all customers</p>
                <FaArrowRight size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
