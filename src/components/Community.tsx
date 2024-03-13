import CommunityCard from "./CommunityCard";

const Community = () => {
  return (
    <div className="px-20 py-10">
      <div className="flex flex-col">
        <div className="self-center text-4xl font-semibold leading-8 text-center text-neutral-600">
          Manage your entire community
          <div className="my-4">in a single system</div>
        </div>
        <div className="mt-1.5 w-full text-sm leading-4 text-center text-neutral-500 max-md:max-w-full">
          Who is Nextcent suitable for?
        </div>
        <div className="justify-between px-20 mt-3 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <CommunityCard
              title="Membership Organisations"
              description="Our membership management software provides full automation of
                  membership renewals and payments"
              image="/c1.svg"
            />
            <CommunityCard
              title="National Associations"
              description="Our membership management software provides full automation of
            membership renewals and payments"
              image="/c2.svg"
            />
            <CommunityCard
              title="Clubs And Groups"
              description="Our membership management software provides full automation of
            membership renewals and payments"
              image="/c3.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
