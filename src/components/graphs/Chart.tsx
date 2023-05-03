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

const MyData: any = [];

const Array1 = [
  {
    item: "Rice",
    cost: 500,
  },
  {
    item: "Beans",
    cost: 1000,
  },
  {
    item: "Yam",
    cost: 1500,
  },
  {
    item: "Sphag",
    cost: 2000,
  },
  {
    item: "Tomatoes",
    cost: 2500,
  },
  {
    item: "Eggs",
    cost: 3000,
  },
  {
    item: "Bread",
    cost: 7000,
  },
  {
    item: "Okpa",
    cost: 4000,
  },
  {
    item: "Indomie",
    cost: 1800,
  },
  {
    item: "Cake",
    cost: 9000,
  },
];

const GenerateRandom = (max: any, min: any) => {
  return Math.floor(Math.random() * (max - min));
};

const Letters = "a b c d e f g h i";

Array.from({ length: 10 }, () => {
  MyData.push({
    item: Letters[Math.floor(Math.random() * Letters.length)],
    cost: GenerateRandom(75, 20),
  });
});

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
  return (
    <div>
      <Bar options={options} data={data} />
      <p>{JSON.stringify(MyData)}</p>
    </div>
  );
}
