import { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import MainList from "./MainList";
import LoadingSpinner from "./LoadingSpinner";

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
          setData(response.data);
          setLoading(false);
        }, 1800);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleToggle = (id) => {
    setExpandedItem((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="ml-2 mt-2">
      <SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
      <MainList
        data={data}
        searchTerm={searchTerm}
        expandedItem={expandedItem}
        handleToggle={handleToggle}
      />
    </div>
  );
}

export default FetchData;
