const Clients = () => {
  const logos = [
    "/Logo.svg",
    "/Logo-1.svg",
    "/Logo-2.svg",
    "/Logo-3.svg",
    "/Logo-4.svg",
    "/Logo-5.svg",
    "/Logo-6.svg",
  ];
  return (
    <section className="flex flex-col px-20 max-md:px-5 text-4xl py-10">
      <h2 className="mx-5 font-semibold leading-8 text-center text-neutral-600 max-md:mr-2.5 max-md:max-w-full">
        Our Clients
      </h2>
      <p className="mx-5 text-sm leading-4 text-center text-neutral-500 max-md:mr-2.5 max-md:max-w-full my-3">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex gap-5 justify-between py-4 mx-5 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
        {logos.map((item, i) => (
          <img
            key={i}
            loading="lazy"
            src={item}
            alt={`Logo ${i + 1}`}
            className="shrink-0 aspect-square w-[60px]"
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
