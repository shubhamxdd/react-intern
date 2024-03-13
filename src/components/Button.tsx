import { FaArrowRight } from "react-icons/fa";

interface ButtonProps {
  label: string;
  className?: string;
  showArrow?: boolean;
}

const Button = ({ label, className, showArrow }: ButtonProps) => {
  return (
    <button
      className={`${className} bg-green-600 text-white px-5 py-3 rounded  `}
    >
      <div className="flex justify-between items-center">
        {label}
        {showArrow && <FaArrowRight className="pt-1" size={20} />}
      </div>
    </button>
  );
};

export default Button;
