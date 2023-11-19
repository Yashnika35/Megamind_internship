// DataTable.js

import React, { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25); // Change to 25 for 25 rows per page
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Assuming you have a JSON file named data.json in the public folder
    fetch("/companyData.json")
      .then((response) => response.json())
      .then((data) => setData(data.placementCompaniesData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    .filter(
      (item) =>
        item.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.date_from.includes(searchQuery) ||
        item.sno.includes(searchQuery)
    )
    .slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  const goToPreviousPage = () => setCurrentPage(currentPage - 1);
  const goToNextPage = () => setCurrentPage(currentPage + 1);

  // Handle search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when performing a new search
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by company name, date, or sno"
        value={searchQuery}
        onChange={handleSearch}
      />

      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Company Name</th>
            <th>Date From</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.sno}>
              <td>{item.sno}</td>
              <td>{item.company_name}</td>
              <td>{item.date_from}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex">
        <div className="px-4 hover:drop-shadow-md">
          <Button
            variant="outlined"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            ripple={true}
          >
            <strong>Previous</strong>
          </Button>
        </div>
        <div className="px-4 hover:drop-shadow-md">
          <Button
            variant="outlined"
            onClick={goToNextPage}
            disabled={indexOfLastItem >= data.length}
            ripple={true}
            color="black"
          >
            <strong>Next</strong>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
