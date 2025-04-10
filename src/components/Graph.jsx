/**
 * Graph.jsx
 *
 * Displays a pie chart of breed distribution based on filtered data.
 *
 * Author: Collin Lanier
 * Date: April 4, 2025
 */

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box, Heading } from "@radix-ui/themes";

// Sample color palette
const COLORS = [
  "#84cc16",
  "#10b981",
  "#3b82f6",
  "#8b5cf6",
  "#f97316",
  "#ef4444",
  "#a855f7",
  "#14b8a6",
  "#6366f1",
  "#f59e0b",
  "#ec4899",
  "#0ea5e9",
  "#22c55e",
  "#f43f5e",
  "#c084fc",
  "#34d399",
  "#fb923c",
  "#f87171",
  "#4f46e5",
  "#eab308",
  "#06b6d4",
  "#d946ef",
];

const Graph = ({ data }) => {
  // Group breed counts
  const breedCountMap = data.reduce((acc, animal) => {
    const breed = animal.breed || "Unknown";
    acc[breed] = (acc[breed] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(breedCountMap).map(([breed, count]) => ({
    name: breed,
    value: count,
  }));

  return (
    <Box style={{ width: "100%", height: 400 }}>
      <Heading size="5" mb="3">
        Breed Distribution
      </Heading>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={130}
            fill="#8884d8"
            label
          >
            {chartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Graph;
