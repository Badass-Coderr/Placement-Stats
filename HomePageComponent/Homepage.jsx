import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboared from "./Dashboared";

function Homepage() {
  const [filteredData, setFilteredData] = useState([]); // State to hold filtered data
  const location = useLocation();
  const { students = [] } = location.state || {}; // Extract students from location state

  // Use useEffect to update filteredData only once when the component mounts
  useEffect(() => {
    setFilteredData(students);
  }, [students]); // This will only run once when 'students' changes

  const handleFilter = async (filters) => {
    try {
      // Construct the query string from the filters
      const queryParams = new URLSearchParams(filters).toString();
      const response = await fetch(`http://localhost:8080/filter?${queryParams}`);
      const data = await response.json();
      setFilteredData(data);
       // Update the state with the filtered data
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    }
  };

  return (
    <>
      <div>
        <div className="app-content" style={{backgroundColor:'#f3f4f6'}}>
          <Sidebar onFilter={handleFilter}></Sidebar>
          <div className="content">
            <Dashboared filteredData={filteredData}></Dashboared>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
