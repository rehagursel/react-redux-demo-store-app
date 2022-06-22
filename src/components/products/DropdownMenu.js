import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const DropdownMenu = (props) => {
  const categoryList = useSelector((state) => state.list.categories);

  const dropdownList = [
    { name: "All Products", id: "4564444" },
    ...categoryList,
  ];

  const sortProductsHandler = (e) => {
    props.onSort(e.target.innerHTML);
  };
  return (
    <Menu as="div" className="relative inline-block text-left w-80">
      <div>
        <Menu.Button className="inline-flex justify-between w-full rounded-md shadow-md px-4 py-2 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Categories
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {dropdownList.map((category) => (
              <Menu.Item key={category.id}>
                <div
                  onClick={sortProductsHandler}
                  className="bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 active:text-gray-700 block py-2 px-4 text-sm cursor-pointer mt-1"
                >
                  {category.name}
                </div>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
