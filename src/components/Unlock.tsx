import Button from "./Button";

const Unlock = () => {
  return (
    <div className="justify-between px-20 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="/unlock.svg"
            className="grow w-full aspect-[1.02] max-md:mt-9"
          />
        </div>
        <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch pr-11 my-auto max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-semibold leading-[40px] text-neutral-600">
              The unseen of spending three years at Pixelgrade
            </div>
            <div className="mt-4 text-sm leading-[20px] text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </div>
            <div className="justify-center self-start my-6 text-center text-white whitespace-nowrap rounded-sm">
              <Button label="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unlock;
