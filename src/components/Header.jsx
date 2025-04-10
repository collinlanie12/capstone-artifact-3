/**
 * Header.jsx
 *
 * Displays the Grazioso Salvare logo and dashboard title.
 *
 * Author: Collin Lanier
 * Date: April 4, 2025
 */

import React from "react";
import { Box, Flex, Heading, Separator } from "@radix-ui/themes";

import logo from "../assets/Grazioso_Salvare_Logo.png";

const Header = () => {
  return (
    <Box p={"2"}>
      {/* Logo and Title */}
      <Flex direction={"column"} align={"center"} gap={"2"} mb={"2"}>
        <img
          src={logo}
          alt="Grazioso Salvare Logo"
          style={{ width: "200px", height: "auto" }}
        />
        <Heading size={"6"}>Grazioso Salvare Dashboard - Collin Lanier</Heading>
        <Separator size={"4"} my={"3"} />
      </Flex>
    </Box>
  );
};

export default Header;
