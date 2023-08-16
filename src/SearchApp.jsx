import React, { useState } from 'react';
import './App.css';
import data from './data.json';

const SearchApp = () => {
  const [searchText, setSearchText] = useState('');

  const filteredData = data.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div className="search-app">
      <input
        className="search-input"
        type="text"
        placeholder="Search by title..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <ul className="search-results"> {/* search-results 클래스 추가 */}
        {filteredData.map(item => (
          <li key={item.title} className="search-result"> {/* search-result 클래스 추가 */}
            <h3>{item.title}</h3>
            <p>Author: {item.author}</p>
            <p>Hashtags: {item.hashtag.join(", ")}</p>
            <p>Slide Count: {item.slide}</p>
            <p>File Size: {item.fileSize}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchApp;
