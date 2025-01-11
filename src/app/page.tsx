"use client";
import ProjectStat from "@/components/ProjectsPage/ProjectStat";
import React from "react";
import ReactApexChart from "react-apexcharts"; // Import ReactApexChart

interface ChartProps {
  series: {
    name: string;
    data: number[];
  }[];
  xaxis: {
    categories: string[];
  };
}

const Home: React.FC<ChartProps> = () => {
  const options = {
    series: [
      {
        name: "sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };

  const pieOptions = {
    series: [44, 55, 13, 43, 22],
    chartOptions: {
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    },
  };

  return (
    <div className="h-full">
      <div className="flex flex-row gap-8  h-1/4 items-start justify-start p-10">
        <div className="bg-white rounded-md shadow-md p-4">
          <h1 className="text-2xl font-semibold text-gray-800">Sales Chart</h1>
          <ReactApexChart
            options={options}
            series={options.series}
            type="line"
            width="400"
          />
        </div>
        <div className="bg-white rounded-md shadow-md p-4">
          <ProjectStat
            series={pieOptions.series}
            chartOptions={pieOptions.chartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
