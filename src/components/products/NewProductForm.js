import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

const NewProductForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const categoryList = useSelector((state) => state.list.categories);

  const nameInputRef = useRef("");
  const descriptionInputRef = useRef("");
  const urlInputRef = useRef("");
  const categoriesInputRef = useRef("");
  const priceInputRef = useRef(0);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredURL = urlInputRef.current.value;
    const enteredCategory = categoriesInputRef.current.value;
    const enteredPrice = +priceInputRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredDescription.trim().length === 0 ||
      enteredPrice < 1 ||
      enteredPrice > 99999
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddProduct({
      name: enteredName,
      price: enteredPrice,
      category: enteredCategory,
      description: enteredDescription,
      avatar: enteredURL,
    });

    setIsActive(false);
  }

  const classNameOfSelect = isActive
    ? "form-select appearance-true block w-full px-3 py-2 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding bg-no-repeat rounded shadow-md transition ease-in-out my-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    : "form-select appearance-true block w-full px-3 py-2 text-base font-normal text-gray-400 bg-gray-100 bg-clip-padding bg-no-repeat rounded shadow-md transition ease-in-out my-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";
  const inputClassName =
    "block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding bg-no-repeat rounded shadow-md ease-in-out my-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";
  return (
    <React.Fragment>
      <h1 className="text-center text-xl font-medium mb-5">Create Product</h1>
      <form className="w-1/2 mx-auto  " onSubmit={submitFormHandler}>
        <input
          className={inputClassName}
          ref={nameInputRef}
          type="text"
          placeholder="Product name"
          required
        />

        <textarea
          className={inputClassName}
          ref={descriptionInputRef}
          placeholder="Description"
          required
        />

        <input
          className={inputClassName}
          ref={urlInputRef}
          type="url"
          placeholder="Image URL"
          required
        />

        <select
          ref={categoriesInputRef}
          required
          onClick={() => setIsActive(true)}
          className={classNameOfSelect}
          aria-label="Default select example"
        >
          <option value="">Categories</option>
          {categoryList.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          className={inputClassName}
          ref={priceInputRef}
          placeholder="Price"
          type="number"
          min="1"
          max="99999"
          step=".01"
          required
        />
        <button
          className="block
            w-full
            py-1
            text-base
            font-normal
            text-gray-700
            bg-gray-100 bg-clip-padding bg-no-repeat
            hover:bg-white
            rounded
            shadow-md
            my-5"
          type="submit"
        >
          SUBMIT
        </button>
        {!amountIsValid && (
          <p className="text-center">Please enter name and description</p>
        )}
      </form>
    </React.Fragment>
  );
};

export default NewProductForm;
