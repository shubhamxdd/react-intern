import AchivementItem from "./AchivementItem";

const Achivements = () => {
  return (
    <div className="justify-between px-20 py-11 bg-slate-100 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10">
            <h2 className="text-4xl font-semibold leading-[42px] text-zinc-500">
              Helping a local
              <span className="text-green-500 block">
                business reinvent itself
              </span>
            </h2>
            <p className="text-sm leading-[45px] whitespace-nowrap text-zinc-600">
              We reached here with our hard work and dedication
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12">
          <div className="grid grid-cols-2 gap-5">
            <AchivementItem src="/a1.svg" label="Members" count="2,245,341" />
            <AchivementItem src="/a1.svg" label="Clubs" count="1,121,412" />
            <AchivementItem
              src="/a3.svg"
              label="Event Bookings"
              count="828,867"
            />
            <AchivementItem src="/a4.svg" label="Payments" count="1,926,436" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
