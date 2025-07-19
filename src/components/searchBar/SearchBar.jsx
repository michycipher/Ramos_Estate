
import './searchbar.scss';
import React, { useState } from 'react';

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState(
    {
      type: 'buy',
      location: '',
      minPrice: 0,
      maxPrice: 0,
    }
  );

  const switchType = (val) => {
    setQuery((prev) => ({...prev, type: val}));
  }

  return (
    <div className='searchBar'>
      <div className="type">
        {types.map((type) => (            
        <button key={type} onClick={() =>switchType(type)} className={query.type === type ? "active" : ""}>{type}</button>
        ))}
        {/* <button onClick={() =>switchType("rent")}>Rent</button> */}
      </div>
      <form>
        <input type="text" name="location" placeholder='City location' id="" />
        <input type="number" name="minPrice" min={0} max={30000000} placeholder='Min Price' id="" />
        <input type="number" name="maxPrice" min={0} max={30000000} placeholder='Max Price' id="" />
      
      <button>
        <img src="/search.png" alt="search icon" />
      </button>
      </form>
    </div>
  )
}

export default SearchBar