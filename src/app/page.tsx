"use client";
import ProjectGanttChart from "@/components/ProjectsPage/ProjectGanttChart";
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
    <div className="h-full flex-col flex items-center justify-center gap-32 overflow-y-scroll">
      <div className="flex flex-row gap-4 w-4/5  h-52 items-start justify-between mt-10">
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
      <div className="bg-white overflow-hidden rounded-md shadow-md p-4 h-80 w-4/5 m-auto relative">
        <ProjectGanttChart />
      </div>
    </div>
  );
};

export default Home;
