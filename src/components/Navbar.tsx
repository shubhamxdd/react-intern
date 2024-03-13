import Button from "./Button";

const Navbar = () => {
  return (
    <div className="px-20 flex items-center justify-between pt-2 pb-4">
      <h1 className="text-3xl font-semibold">
        P<span className="text-green-500">cl</span>
      </h1>
      <div>
        <ul className="flex gap-8 items-center text-zinc-600 font-medium">
          <li className="px-5">Home</li>
          <li>Features</li>
          <li>Community</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>
            <Button label={`Register Now`} showArrow />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
