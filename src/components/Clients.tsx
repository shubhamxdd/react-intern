const Clients = () => {
  return (
    <div className="flex flex-col px-20 max-md:px-5 text-4xl py-10">
      <div className="mx-5 font-semibold leading-8 text-center text-neutral-600 max-md:mr-2.5 max-md:max-w-full">
        Our Clients
      </div>
      <div className="mx-5 text-sm leading-4 text-center text-neutral-500 max-md:mr-2.5 max-md:max-w-full my-3">
        We have been working with some Fortune 500+ clients
      </div>
      <div className="flex gap-5 justify-between py-4 mx-5 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        <img
          loading="lazy"
          // src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfd2df05fd29969f9344201e1ac54a35e3a2171dab0c11f67a86d3854e774c52?"
          src="/Logo.svg"
          className="shrink-0 aspect-square w-[60px]"
        />
        <img
          loading="lazy"
          src="/Logo-1.svg"
          className="shrink-0 aspect-square w-[60px]"
        />
        <img
          loading="lazy"
          src="/Logo-2.svg"
          className="shrink-0 aspect-square w-[60px]"
        />
        <img
          loading="lazy"
          src="/Logo-3.svg"
          className="shrink-0 aspect-square w-[60px]"
        />
        <img
          loading="lazy"
          src="/Logo-4.svg"
          className="shrink-0 aspect-[0.97] w-[60px]"
        />
        <img
          loading="lazy"
          src="/Logo-5.svg"
          className="shrink-0 aspect-[0.97] w-[60px]"
        />
        <img
          loading="lazy"
          src="/Logo-6.svg"
          className="shrink-0 aspect-[0.97] w-[60px]"
        />
      </div>
    </div>
  );
};

export default Clients;
