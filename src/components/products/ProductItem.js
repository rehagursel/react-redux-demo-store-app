import { Link } from "react-router-dom";

const ProductItem = (props) => {
  return (
    <li className="text-center mx-auto">
      <Link to={`/products/${props.id}`}>
        <div className="box-border flex items-center rounded-lg bg-white h-48 sm:h-36 w-48 sm:w-32 lg:w-48 lg:h-48 p-4">
          <img
            className="object-contain h-40 sm:h-24 w-44 sm:w-24 lg:w-44 lg:h-40"
            src={props.avatar}
            alt=""
          />
        </div>
        <p className="w-48 sm:w-32 lg:w-48 my-2">{props.title}</p>
        <p className="w-48 sm:w-32 lg:w-48 my-2">$ {props.price}</p>
      </Link>
    </li>
  );
};

export default ProductItem;
