import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { users } from "../data/data";
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
import "chart.js/auto";
import { FcProcess } from "react-icons/fc";
function Dashboard() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Sales $",
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#e8c3b9",
            "#c45850",
            "#e6194B",
          ],
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);
  console.log(users);
  const dummy = [
    {
      label: "Orders",
      value: 39,
      remaining: "86",
    },
    // {
    //   label: "Inventory",
    //   value: 100,
    //   remaining: "70",
    // },
    {
      label: "sales",
      value: 950,
      remaining: "67",
    },
    {
      label: "Revenue",
      value: 7200,
      remaining: "93",
    },
  ];

  return (
    <div className=" p-10 pb-4 flex flex-col gap-6">
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
        <div className="w-full h-96  max-w-[850px]">
          <h3 className="font-bold text-2xl pb-2">Bar Chart</h3>
          <div className="w-full h-full border-2  p-4 rounded-md">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
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
      </div>
    </div>
  );
}

export default Dashboard;