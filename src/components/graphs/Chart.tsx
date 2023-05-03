import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const NumberArr1 = [1, 4, 48, 394, 848, 447, 984];
const NumberArr2 = [4, 5, 584, 283, 7, 984, 939];
const RandomNumber = Math.floor(Math.random() * 1000);

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: NumberArr1.map((el) => el),

      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: NumberArr2.map((el) => el),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function App() {
  return <Bar options={options} data={data} />;
}
