import { FaArrowRight } from "react-icons/fa";

interface Props {
  title: string;
  image: string;
}

const Ucard = ({ image, title }: Props) => {
  return (
    <section className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full py-5">
      <div className="flex flex-col pb-14 text-sm font-semibold max-md:mt-4">
        <div className="flex relative flex-col px-5 pt-20 w-full aspect-[1.29]">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="object-cover absolute inset-0 w-full h-full"
          />
          <div className="shadow-lg justify-between h-[70%] flex z-10 flex-col p-3 mt-14 mb-0 relative top-[50%] w-full rounded-md bg-slate-100 max-md:mt-10 max-md:mb-2.5">
            <h2 className="leading-2 text-lg text-center text-neutral-500">
              {title}
            </h2>
            <div className="flex gap-1.5 items-center mx-10 justify-center px-14 py-1.5 mt-3 text-green-500 whitespace-nowrap leading-[140%] max-md:px-5">
              <div className="grow flex items-center">
                Read more <FaArrowRight size={20} className="mx-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ucard;
