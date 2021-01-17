import { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import style from '../css/BookSelector.module.css';

let filterCounter = 0;

function Filters({defineFilters}) {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    let titleFilter = [];
    let authorFilter = [];
    let genreFilter = [];
    let formFilter = [];
    filters.forEach((filter) => {
      switch (filter.type) {
        case 'Title':
          titleFilter.push(filter.value);
          break;
        case 'Author':
          authorFilter.push(filter.value);
          break;
        case 'Genre':
          genreFilter.push(filter.value);
          break;
        case 'Form':
          formFilter.push(filter.value);
          break;
        default:
      }
    });
    defineFilters({titleFilter, authorFilter, genreFilter, formFilter})
  }, [filters, defineFilters]);

  const addFilter = (id, type, value) => {
    let tempArray = [...filters];
    let index = tempArray.findIndex((element) => element.id === id);
    tempArray[index] = { id, type, value };
    setFilters(tempArray);
  };

  const deleteFilter = (id) => {
    let tempArray = [...filters];
    let index = tempArray.findIndex((element) => element.id === id);
    tempArray.splice(index, 1);
    setFilters(tempArray);
  };

  return (
    <section>
      <form>
        {filters &&
          filters.map((filter) => (
            <Filter
              parameters={filter}
              key={filter.id}
              index={filter.id}
              deleteFilter={deleteFilter}
              addFilter={addFilter}
            />
          ))}
      </form>
      <button
        className={style.button}
        type='button'
        onClick={() => {
          filterCounter++;
          setFilters([
            ...filters,
            { type: 'Title', value: '', id: filterCounter },
          ]);
        }}
      >
        Add New Filter
      </button>
      <button
        className={style.button}
        type='button'
        onClick={() => setFilters([])}
      >
        Clear Filters
      </button>
    </section>
  );
}

export default Filters;
