/**
 * DataTable.jsx
 *
 * Displays the animal data in a table format with radio button row selection.
 * Fetches data from the Backend API.
 *
 * Author: Collin Lanier
 * Date: April 4, 2025
 */

import React, { useEffect, useState } from "react";
import { Box, Button, Flex, RadioGroup, Table, Text } from "@radix-ui/themes";
import { fetchAnimals } from "../services/animalService";

const DataTable = ({ onSelect, filter, onDataUpdate }) => {
  const [animals, setAnimals] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;

  // Fetch data from the backed when the table loads or filter changes
  useEffect(() => {
    const loadAnimals = async () => {
      try {
        const data = await fetchAnimals(currentPage, limit, filter);
        setAnimals(data);
        setHasMore(data.length === limit); // Only true if there might be more data

        if (data.length > 0) {
          // If no current selection or current selection is not in the list
          const stillSelected = data.find((a) => a._id == selectedId);
          if (!stillSelected) {
            setSelectedId(data[0]._id);
            onSelect && onSelect(data[0]);
          }
        }
        onDataUpdate && onDataUpdate(data);
      } catch (error) {
        console.error("Failed to fetch animals", error);
      }
    };

    loadAnimals();
  }, [currentPage, filter, onSelect]);

  // When a new filter is selected go back to the first page
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const handleSelect = (id) => {
    setSelectedId(id);
    const selectedAnimal = animals.find((a) => a._id === id);
    onSelect && onSelect(selectedAnimal); // Send selected data up to parent
  };

  // View next set of data, or view previous set (limit is set to 10)
  const handleNext = () => setCurrentPage((prev) => prev + 1);
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <Box p="4">
      <Text size="4" weight="bold" mb="3">
        Animal Data Table
      </Text>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Select</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Type</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Breed</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Age</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Sex</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {animals.map((animal) => (
            <Table.Row key={animal._id}>
              <Table.Cell>
                <RadioGroup.Root
                  value={String(selectedId)}
                  onValueChange={() => handleSelect(animal._id)}
                >
                  <RadioGroup.Item value={String(animal._id)} />
                </RadioGroup.Root>
              </Table.Cell>
              <Table.Cell>{animal.name || "Unknown"}</Table.Cell>
              <Table.Cell>{animal.animal_type || "Unknown"}</Table.Cell>
              <Table.Cell>{animal.breed || "Unknown"}</Table.Cell>
              <Table.Cell>{animal.age_upon_outcome || "Unknown"}</Table.Cell>
              <Table.Cell>{animal.sex_upon_outcome || "Unknown"}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      {/* Pagination Controls for data */}
      <Flex justify={"center"} mt={"4"} gap={"3"}>
        <Button onClick={handlePrev} disabled={currentPage === 1}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
        <Text>Page {currentPage}</Text>
        <Button onClick={handleNext} disabled={!hasMore}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
      </Flex>
    </Box>
  );
};

export default DataTable;
