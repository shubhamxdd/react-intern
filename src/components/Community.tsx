import CommunityCard from "./CommunityCard";

const Community = () => {
  const cards = [
    {
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/c1.svg",
    },
    {
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/c2.svg",
    },
    {
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/c3.svg",
    },
  ];
  return (
    <section className="px-20 py-10">
      <div className="flex flex-col">
        <h1 className="self-center text-4xl font-semibold leading-8 text-center text-neutral-600">
          Manage your entire community
          <span className="my-4 block">in a single system</span>
        </h1>
        <h3 className="mt-1.5 w-full text-sm leading-4 text-center text-neutral-500 max-md:max-w-full">
          Who is Nextcent suitable for?
        </h3>
        <div className="justify-between px-20 mt-3 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {cards.map((item, i) => (
              <CommunityCard
                key={i}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
