import { FiSend } from "react-icons/fi";

const FooterEmail = () => {
  return (
    <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col max-md:mt-5">
        <p className="text-lg font-semibold leading-5  text-white">
          Stay up to date
        </p>
        <div className="flex gap-5 items-center justify-between p-2 mt-4 text-xs leading-4 text-gray-300 rounded-md bg-slate-700">
          <input
            type="text"
            placeholder="Your email address"
            className="pl-3 py-1 bg-slate-700 outline-none"
          />
          <div className="pr-4">
            <FiSend className="" size={20} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterEmail;
