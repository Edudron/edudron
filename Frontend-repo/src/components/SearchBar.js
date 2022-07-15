import React, {useState} from 'react'
// import SearchIcon from '@mui/icons-material/Search';
import "../PageCss/searchbar.css";

function SearchBar({placeholder,data }) {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) =>{
   const searchWord = event.target.value
   const newFilter =data.filter((value) =>{
    return value.title.toLowerCase().includes(searchWord.toLowerCase());
   });
   if (searchWord=="") {
    setFilteredData([]);
   }else{
    setFilteredData(newFilter);
   }
  
  };
  return (
    
    <div className='search'>
        <div className='searchInput'>
            <input type="text" placeholder={placeholder} onChange={handleFilter} />
            
            <div className='searchIcon'>
              {/* <SearchIcon /> */}
            
        </div>
        </div>
        {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) =>{
            return(
              <a className="dataIteam" href={value.link} target="_blank">
          
              <p>{value.title}</p>
              </a>
            );
          })}
        </div>
)}
        </div>
        
  );
}

export default SearchBar