import { TextField } from "@mui/material";

function SearchInput({ searchTerm, handleSearch }) {
  return (
    <TextField
      label="Search"
      variant="outlined"
      value={searchTerm}
      onChange={handleSearch}
      className="border-solid border-gray-300 border-2 hover:border-gray-700 rounded-md"
    />
  );
}

export default SearchInput;
