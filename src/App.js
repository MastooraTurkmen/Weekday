import { useState } from 'react';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  const [filteredData, setFilteredData] = useState([]);

  // filter data when click the select types
  const updateFilteredData = (data) => {
    setFilteredData(data)
  };

  return (
    <div>
      <Navbar updateFilteredData={updateFilteredData} />
      <Home filteredData={filteredData} />
    </div>
  );
}

export default App;
