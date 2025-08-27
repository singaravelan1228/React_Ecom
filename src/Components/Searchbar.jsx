
import { useState } from "react";
import { Search } from "lucide-react";
import "./Searchbar.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);

  };

  return (
    <form onSubmit={handleSearch} className="search-container" role="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search products"
      />
      <button type="submit" className="search-btn" aria-label="Submit search">
        <Search size={20} />
      </button>
    </form>
  );
};

export default SearchBar;

