"use client";
import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";

const SearchInput = ({ label, handleInputChange, restaurentId = "" }) => {
  return (
    <InputGroup
      className="sm:w-1/3 max-sm:my-6"
      onChange={(e) => handleInputChange(e, label, restaurentId)}
    >
      <InputGroupInput placeholder={label} />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
};

export default SearchInput;
