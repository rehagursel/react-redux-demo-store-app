import { useDispatch } from "react-redux";

import { uiActions } from "../../store/ui-slice";

const NoProductsFound = (props) => {
  const dispatch = useDispatch();

  const changeErrorMessageHandler = () => {
    dispatch(
      uiActions.showNotification({
        postStatus: "succeeded",
        status: "succeeded",
        message: "Sending product data failed",
      })
    );
  };

  return (
    <div className="mx-auto mt-40 w-2/3 text-center">
      <p>{props.message}</p>
      <button
        className="flex items-center justify-center pb-1.5 w-12 h-12 text-xl sm:text-3xl sm:w-14 sm:h-14 rounded-full bg-black text-white font-bold mx-auto mt-20"
        onClick={changeErrorMessageHandler}
      >
        x
      </button>
    </div>
  );
};

export default NoProductsFound;
