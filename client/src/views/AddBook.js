import { useState } from 'react';
import useGetRequest from '../helpers/api';

const searchParameters = ['title', 'author', 'isbn'];

function AddBook({ addBook }) {
  const [selectedParameter, setSelectedParameter] = useState('isbn');
  const [searchValue, setSearchValue] = useState();
  const [query, setQuery] = useState();
  const { data, error, loading } = useGetRequest(
    `https://www.googleapis.com/books/v1/volumes?q=${query}`
  );

  return (
    <div>
      <label htmlFor='search'>Search:</label>
      <input
        id='search'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      ></input>
      <select
        value={selectedParameter}
        onChange={(event) => setSelectedParameter(event.target.value)}
      >
        {searchParameters.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <button
        onClick={() => setQuery(`${selectedParameter}${searchValue}`)}
      >
        Search
      </button>
      {error && console.log(error.message)}
      {loading && <p>Loading...</p>}
      {/* {data && console.log(data)} */}
      {data &&
        data.items.map((book) => (
          <div>
            <img
              alt={book.volumeInfo.title}
              width='50'
              height='70'
              src={book.volumeInfo.imageLinks.thumbnail}
            ></img>
            <p>{book.volumeInfo.title}</p>
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.industryIdentifiers[0].type}</p>
            <p>{book.volumeInfo.industryIdentifiers[0].identifier}</p>
          </div>
        ))}
    </div>
  );
}

export default AddBook;
