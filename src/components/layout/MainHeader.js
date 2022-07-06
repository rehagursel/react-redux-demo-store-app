import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="flex flex-row justify-between mx-11 my-8 rounded-md shadow-md px-4 py-2 bg-white text-sm font-medium text-gray-700">
      <Link
          to="/products"
        >
          UPayments Store
        </Link>
      <div className="">Register</div>
    </div>
  );
};

export default MainHeader;
