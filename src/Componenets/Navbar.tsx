import Searchbar from "./searchbar";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="w-full">
      <div className=" flex justify-between items-center ">
        <h1 className="text-4xl font-medium ">FoodHub</h1>
        <Searchbar />
        <div className="flex gap-4  ">
          <div className="icon_wrapper ">
            <FaUserCircle className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
