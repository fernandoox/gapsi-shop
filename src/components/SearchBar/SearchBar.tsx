import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

type SearchBarProps = {
  onSearch: (keyword: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState<string>("");

  const handleSearch = () => {
    if (keyword.trim()) {
      onSearch(keyword);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mb={4}
      mt={5}
    >
      <TextField
        variant="outlined"
        label="Buscar productos"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{ mr: 2, width: "500px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        size="large"
      >
        Buscar
      </Button>
    </Box>
  );
};

export default SearchBar;
