import React, { useState } from 'react';

interface SearchBarProps {
  onSubmit: (query: string) => void; // Function to call when the form is submitted
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <form className="flex items-center" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Search..."
          className="form-input w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          onChange={handleInputChange}
          value={query}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
