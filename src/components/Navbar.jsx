import React, { useState, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
function Navbar() {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-gray-900 shadow-sm w-full flex justify-end items-center fixed md:relative z-40">
      <div className="flex gap-2 p-4 items-center">
        <Popover className="relative ">
          <Popover.Button className="outline-none cursor-pointer text-gray-700 flex justify-center items-center">
            <IoMdNotifications className="h-8 w-8" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-3 bg-gray-800 shadow-sm rounded max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-3">
                <div className="flex justify-between items-center w-full">
                  <p className="text-white font-medium">Notifications</p>
                  <a className="text-sm text-orange-500" href="#">
                    Mark all as read
                  </a>
                </div>
                <div className="mt-4 grid gap-4 grid-cols-1 overflow-hidden">
                  {[1, 2, 3].map((i, idx) => (
                    <div key={idx} className="flex">
                      <div className="rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center">
                        <IoMdNotifications className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-500">
                          Notification Title
                        </p>
                        <p className="text-sm text-gray-300 truncate">
                          Test Notification text for design
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <div className="flex gap-2 font-bold">
          <CgProfile size={30} />
          <span className="text-2xl">Hi, Dashboard</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
