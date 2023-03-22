import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
function BarChart() {
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
  return (
    <div className="w-full h-96  max-w-[850px]">
      <h3 className="font-bold text-2xl pb-2">Bar Chart</h3>
      <div className="w-full h-full border-2  p-4 rounded-md">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default BarChart;
