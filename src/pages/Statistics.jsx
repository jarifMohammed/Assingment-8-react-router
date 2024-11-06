import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = () => {
  // Dummy data for most sold products
  const products = [
    { name: 'Mobile Phone', sold: 120 },
    { name: 'Gaming Laptop', sold: 90 },
    { name: 'Smartwatch', sold: 75 },
    { name: 'Drone', sold: 60 },
    { name: 'Headphones', sold: 50 },
  ];

  // Chart.js data configuration
  const data = {
    labels: products.map(product => product.name),
    datasets: [
      {
        label: 'Most Sold Products',
        data: products.map(product => product.sold),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart.js options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Top 5 Most Sold Products',
        font: { size: 20 },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.raw} units sold`;
          },
        },
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Sales Statistics</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Statistics;
