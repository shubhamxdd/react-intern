const LinkList = ({ title, links }: { title: string; links: string[] }) => (
  <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow text-sm font-light leading-4 whitespace-nowrap text-slate-100 max-md:mt-5">
      <p className="text-lg font-semibold leading-5 text-white">{title}</p>
      <ul className="flex flex-col">
        {links.map((link, index) => (
          <li className={index === 0 ? "mt-4" : "mt-2.5"} key={link}>
            {link}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SocialLinks = () => {
  const linkLists = [
    {
      title: "Company",
      links: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
    },
    {
      title: "Support",
      links: [
        "Help center",
        "Terms of service",
        "Legal",
        "Privacy policy",
        "Status",
      ],
    },
  ];
  return (
    <>
      {linkLists.map((list, index) => (
        <LinkList title={list.title} links={list.links} key={index} />
      ))}
    </>
  );
};

export default SocialLinks;
