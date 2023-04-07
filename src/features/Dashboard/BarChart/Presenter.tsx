import React from "react";
import { Bar } from "react-chartjs-2";

function BarChartPT({
  chartData,
  chartOptions,
}: {
  chartData: any;
  chartOptions: any;
}) {
  return (
    <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default BarChartPT;
