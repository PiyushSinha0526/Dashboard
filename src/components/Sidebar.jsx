import React, { useState } from "react";
import { FaHome, FaUsers, FaCog } from "react-icons/fa";
import { AiTwotoneShop } from "react-icons/ai";
import { MdInventory } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

function Sidebar() {
  const [open, setOpen] = useState(true);

  const navigationItems = [
    { name: "Dashboard", icon: <FaHome size={24} />, path: "/" },
    { name: "Orders", icon: <AiTwotoneShop size={24} />, path: "/orders" },
    { name: "Users", icon: <FaUsers size={24} />, path: "/users" },
    { name: "Inventory", icon: <MdInventory size={24} />, path: "/inventory" },
    { name: "Settings", icon: <FaCog size={24} />, path: "/setting" },
  ];

  return (
    <section className="h-full">
      <div
        className={`bg-gray-900 min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-3`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {navigationItems?.map((nav, i) => (
            <Link
              to={nav?.path}
              key={i}
              className={` ${
                nav?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{nav.icon}</div>
              <h2
                style={{
                  transitionDelay: `${i * 2}50ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {nav?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute z-50 left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {nav?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className=" text-xl text-gray-900 font-semibold"></div>
    </section>
  );
}

export default Sidebar;
