import React from "react";
import { users } from "../data/data";
import "chart.js/auto";
import { FcProcess } from "react-icons/fc";
import { dummy } from "../data/dummy";
import BarChart from "../components/BarChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  return (
    <div className="p-10 pt-4 pb-4 flex flex-col gap-6">
      <h1 className="text-4xl">Dashboard</h1>
      <div className="stats flex mt-3 gap-4">
        {dummy.map((d) => (
          <div className="p-4 bg-gray-800 max-w-sm w-full flex-wrap rounded-lg flex gap-3 text-right items-center justify-between hover:scale-105 hover:bg-gray-900 hover:shadow-white shadow-sm">
            <div>
              <h2 className="text-3xl text-left font-bold">${d.value}</h2>
              <p className="text-sm text-gray-600 font-bold text-left">
                {d.label}
              </p>
            </div>
            <div
              className=" p-2 text-white rounded-r-md bg-green-400 font-bold"
              style={{ width: `${d.remaining}px` }}
            >
              {d.remaining} %
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full gap-4">
        <div className="w-1/3 h-full ">
          <h3 className="font-bold text-2xl">Recent Orders</h3>
          <div className="w-full col-span-1 relative rounded-lg h-96 overflow-y-scroll scrollbar-hide">
            <ul className="">
              {users.slice(0, 10).map((order, id) => (
                <li
                  key={id}
                  className="bg-gray-700 hover:bg-gray-800 rounded-lg my-2 p-2 flex items-center cursor-pointer"
                >
                  <div className="bg-purple-100 rounded-lg p-3">
                    <FcProcess className="text-purple-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-white font-bold">${order.price}</p>
                    <p className="text-gray-200 text-sm">{order.name}</p>
                  </div>
                  <p className="lg:flex md:hidden absolute right-6 text-sm">
                    {order.shipment_status}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <BarChart />
      </div>
    </div>
  );
}

export default Dashboard;
