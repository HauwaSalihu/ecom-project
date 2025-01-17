import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const Navigate = useNavigate();

  return (
    //  {contextHolder}
    <button
      onClick={() => Navigate(-1)}
      className="font-semibold text-lg mb-6 text-gray-500 flex gap-4"
    >
      <ArrowLeft />
    </button>
  );
};

export default BackButton;
