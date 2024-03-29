import Button from "./Button";

const Hero = () => {
  return (
    <section className="self-stretch px-20 py-16 bg-slate-100 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto leading-4 max-md:mt-10 max-md:max-w-full">
            <h1 className="text-6xl font-semibold text-zinc-600 leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
              Lessons and insights{" "}
              <div className="text-green-600 mt-3">from 8 years</div>
            </h1>
            <h2 className="my-6 text-base text-neutral-500 max-md:max-w-full">
              Where to grow your business as a photographer: site or social
              media?
            </h2>
            <div className="justify-center max-md:px-5">
              <Button label="Register" />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="/hero.svg"
            alt="hero image"
            className="grow w-full aspect-[0.96] max-md:mt-10"
          />
        </div>
      </div>
      <div className="flex justify-center my-4 gap-3">
        {[1, 2, 3].map((item, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              item === 1 ? "bg-green-500" : "bg-zinc-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
