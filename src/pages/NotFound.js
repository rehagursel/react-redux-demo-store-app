import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mx-auto text-center pt-20">
      <p>Page not found!</p>
      <Link
          to="/products"
          className="flex items-center justify-center w-32 h-20 text-xl sm:text-2xl sm:w-56  bg-black text-white font-bold mx-auto mt-20"
        >
          Home Page
        </Link>
    </div>
  );
};

export default NotFound;
