import { IconType } from "react-icons";

interface Props {
  logo: IconType;
}

const SocialLogo = ({ logo: Icon }: Props) => {
  return (
    <div className="bg-gray-600 p-1 rounded-full">
      <Icon size={20} color="white" />
    </div>
  );
};

export default SocialLogo;
