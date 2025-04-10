/**
 * FilterButtons.jsx
 *
 * Provides filter buttons for the Dashboard.
 * Clicking a button will trigger a callback with the selected filter type.
 *
 * Author: Collin Lanier
 * Date: April 4, 2025
 */

import { Box, Button, Flex } from "@radix-ui/themes";
import React from "react";

const FILTERS = [
  "Disaster or Individual Tracking",
  "Mountain or Wilderness Rescue",
  "Water Rescue",
  "Dog",
  "Cat",
  "Reset",
];

const FilterButtons = ({ onFilterChange }) => {
  return (
    <Box p={"2"}>
      <Flex wrap={"wrap-reverse"} gap={"3"} justify={"center"}>
        {/* Map for the filter options to make buttons */}
        {FILTERS.map((filter) => (
          <Button
            key={filter}
            onClick={() => onFilterChange(filter)}
            variant="solid"
            radius="large"
            color="red"
            size={"3"}
          >
            {filter}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default FilterButtons;
