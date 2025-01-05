'use client';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartProps {
  series: number[];
  chartOptions: {
    labels: string[];
  };
}

const ProjectStat: React.FC<ChartProps> = ({ series, chartOptions }) => {
  return (
    <div className="h-full">
      <h1 className="text-2xl font-semibold text-gray-800">Sales Chart</h1>
      <div className="h-1/4">
        <ReactApexChart options={chartOptions} series={series} type="donut" height="350" />
      </div>
    </div>
  );
};

export default ProjectStat;