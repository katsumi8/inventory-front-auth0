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
    <div className="relative m-auto h-[50vh] w-full rounded-lg border bg-white p-4 md:col-span-2 lg:h-[70vh]">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}

export default BarChartPT;
