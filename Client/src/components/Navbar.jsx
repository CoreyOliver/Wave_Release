import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] no_print">
      <div className="flex justify-evenly items-center w-full h-full ">
        <div>
          <ul className="hidden md:flex">
            <NavLink to="/ws">
              <li className="ml-10 text-sm uppercase hover:border-b hover:bg-slate-500 hover:rounded-xl">
                Wholesale Enter
              </li>
            </NavLink>
            <NavLink to="unscheduled">
              <li className="ml-10 text-sm uppercase hover:border-b hover:bg-slate-500 hover:rounded-xl">
                Batch
              </li>
            </NavLink>
            <NavLink to="webs">
              <li className="ml-10 text-sm uppercase hover:border-b hover:bg-slate-500 hover:rounded-xl">
                Web Enter
              </li>
            </NavLink>
            <NavLink to="/calendar">
              <li className="ml-10 text-sm uppercase hover:border-b hover:bg-slate-500 hover:rounded-xl">
                Calendar
              </li>
            </NavLink>
          </ul>
          <div className="flex md:hidden">
            <h1 className="mr-32 ml-16">Supply List</h1>
            <AiOutlineMenu size={25} className="m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
