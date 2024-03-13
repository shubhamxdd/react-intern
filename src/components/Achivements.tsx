const Achivements = () => {
  return (
    <div className="justify-between px-20 py-11 bg-slate-100 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10">
            <div className="text-4xl font-semibold leading-[42px] text-zinc-500">
              Helping a local
              <div className="text-green-500">business reinvent itself</div>
            </div>
            <div className="text-sm leading-[45px] whitespace-nowrap text-zinc-600">
              We reached here with our hard work and dedication
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow whitespace-nowrap max-md:mt-10">
            <div className="flex gap-5 justify-between">
              <div className="flex gap-3">
                <img
                  loading="lazy"
                  src="/a1.svg"
                  className="shrink-0 my-auto aspect-[0.97] w-[43px]"
                />
                <div className="flex flex-col flex-1">
                  <div className="text-xl font-bold leading-6 text-neutral-600">
                    2,245,341
                  </div>
                  <div className="text-xs leading-4 text-neutral-500">
                    Members
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <img
                  loading="lazy"
                  src="/a2.svg"
                  className="shrink-0 my-auto aspect-square w-[43px]"
                />
                <div className="flex flex-col flex-1">
                  <div className="text-xl font-bold leading-6 text-neutral-600">
                    46,328
                  </div>
                  <div className="text-xs leading-4 text-neutral-500">
                    Clubs
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-7">
              <div className="flex gap-3">
                <img
                  loading="lazy"
                  src="/a3.svg"
                  className="shrink-0 my-auto aspect-[0.97] w-[43px]"
                />
                <div className="flex flex-col flex-1">
                  <div className="text-xl font-bold leading-6 text-neutral-600">
                    828,867
                  </div>
                  <div className="text-xs leading-4 text-neutral-500">
                    Event Bookings
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <img
                  loading="lazy"
                  src="/a4.svg"
                  className="shrink-0 my-auto aspect-square w-[43px]"
                />
                <div className="flex flex-col flex-1">
                  <div className="text-xl font-bold leading-6 text-neutral-600">
                    1,926,436
                  </div>
                  <div className="text-xs leading-4 text-neutral-500">
                    Payments
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

export default Achivements;
