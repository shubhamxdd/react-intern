import Button from "./Button";

const Navbar = () => {
  const menuItems = [
    { label: "Home", className: "px-5" },
    { label: "Features" },
    { label: "Community" },
    { label: "Blog" },
    { label: "Pricing" },
    { label: "Register Now", showArrow: true },
  ];
  return (
    <div className="px-20 flex items-center justify-between pt-2 pb-4">
      <h1 className="text-3xl font-semibold">
        P<span className="text-green-500">cl</span>
      </h1>
      <div>
        <ul className="flex gap-8 items-center text-zinc-600 font-medium">
          {menuItems.map((item, i) => (
            <li key={i} className={item.className}>
              {item.label === "Register Now" ? (
                <Button label={item.label} showArrow />
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
