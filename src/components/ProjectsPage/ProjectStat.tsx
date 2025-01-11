"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
  series: number[];
  chartOptions: {
    labels: string[];
  };
}

const ProjectStat: React.FC<ChartProps> = ({ series, chartOptions }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800">Performance</h1>
      <div>
        <ReactApexChart
          options={chartOptions}
          series={series}
          type="donut"
          width="400"
        />
      </div>
    </div>
  );
};

export default ProjectStat;
