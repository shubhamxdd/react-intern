interface Props {
  title: string;
  description: string;
  image: string;
}
const CommunityCard = ({ description, image, title }: Props) => {
  return (
    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow px-3 py-4 w-full text-center bg-white rounded-md shadow-md max-md:mt-10">
        <img
          loading="lazy"
          src={image}
          className="self-center aspect-[1.15] w-[60px]"
        />
        <h2 className="mt-3 text-xl font-bold leading-6 text-neutral-600">
          {title}
        </h2>
        <p className="mt-1.5 text-sm leading-4 text-neutral-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CommunityCard;
