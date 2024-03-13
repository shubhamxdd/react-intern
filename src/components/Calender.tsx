import Button from "./Button";

const Calender = () => {
  return (
    <div className="justify-between px-20 max-md:px-5 py-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="/pana.svg"
            className="grow w-full aspect-[1.02] max-md:mt-9"
          />
        </div>
        <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch pr-11 my-auto max-md:mt-10 max-md:max-w-full">
            <h2 className="text-4xl font-semibold leading-8 text-neutral-600">
              How to design your site footer like we did
            </h2>
            <p className="mt-3 text-sm leading-[20px] text-neutral-500">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <div className="self-start mt-6 max-md:px-5">
              <Button label="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
