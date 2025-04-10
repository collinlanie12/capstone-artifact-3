/**
 * Dashboard.jsx
 *
 * This page respresents the Grazioso Salvare Dashboard user interface.
 * It displays the logo, header, filter controls, a data table for animal records,
 * a pie chart showing breed distribution, and a map showing animal
 * locations based on selected data.
 *
 * Author: Collin Lanier
 * Date: April 4, 2025
 */

import React, { useState } from "react";

import Header from "../components/Header";
import FilterButtons from "../components/FilterButtons";
import DataTable from "../components/DataTable";
import Graph from "../components/Graph";
import Map from "../components/Map";
import { Box, Flex } from "@radix-ui/themes";

import "../Responsive.css";

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("Reset");
  const [selectedAnimal, setSelectedAnimal] = useState(null); // Used for the Map
  const [animalData, setAnimalData] = useState([]); // This is passed to the Graph

  const handleAnimalSelect = (animal) => {
    setSelectedAnimal(animal);
  };

  return (
    <Box p={"4"}>
      {/* Logo + title for dashboard */}
      <Header />
      {/* Buttons to filter data from database */}
      <FilterButtons onFilterChange={setActiveFilter} />
      {/* Table with data for animals */}
      <DataTable
        onSelect={handleAnimalSelect}
        filter={activeFilter}
        onDataUpdate={setAnimalData}
      />

      {/* Setting the pie-chart and map beside each other (mobile stacked vertically) */}
      <Flex
        direction={"row"}
        gap={"4"}
        mt={"4"}
        wrap={"wrap"}
        justify={"center"}
        align={"start"}
      >
        <Box
          className="graph-mobile-spacing"
          style={{ flex: "1", minWidth: "400px", maxWidth: "600px" }}
        >
          {/* Graph with animal breeds (Pie Chart) */}
          <Graph data={animalData} />
        </Box>

        <Box style={{ flex: "1", minWidth: "400px", maxWidth: "600px" }}>
          {/* Map for selected animal */}
          <Map selectedAnimal={selectedAnimal} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
