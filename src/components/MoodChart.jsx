import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function MoodChart({ moods }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = chartRef.current;
  
    return () => {
      if (chartInstance && chartInstance.destroy) {
        chartInstance.destroy();
      }
    };
  }, []);

  if (!moods || moods.length === 0) return null;

  const moodCounts = moods.reduce((acc, entry) => {
    acc[entry.mood] = (acc[entry.mood] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(moodCounts),
    datasets: [
      {
        label: "Mood Count",
        data: Object.values(moodCounts),
        backgroundColor: "#60a5fa",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 1 } },
    },
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-center mb-4">Mood Trends</h2>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
}