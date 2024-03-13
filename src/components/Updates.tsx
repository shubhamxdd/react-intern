import Ucard from "./Ucard";

const Updates = () => {
  const cardArr = [
    {
      image: "/u1.png",
      title: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      image: "/u2.png",
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
    },
    {
      image: "/u3.png",
      title: "Revamping the Membership Model with Triathlon Australia",
    },
  ];
  return (
    <div className="px-20 py-10">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl my-4 font-semibold leading-8 text-center text-neutral-600 max-md:max-w-full">
          Caring is the new marketing
        </h2>
        <p className="mt-1.5 text-sm leading-[20px] text-center text-neutral-600 w-[438px] max-md:max-w-full">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>
        <div className="justify-between self-stretch px-20 mt-3 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {cardArr.map((item, i) => (
              <Ucard key={i} image={item.image} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
