import React from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api';
import s from '../header/header.module.scss';
function Search({ onSearchChange }) {
  const [search, setSearch] = React.useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=20000&languageCode=ru&namePrefix=${inputValue}`,
      geoApiOptions,
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.name}`,
              label: `${city.name}, ${city.country}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className={s.search}>
    <AsyncPaginate
      placeholder="поиск по городу"
      value={search}
      debounceTimeout={600}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
    </div> 
  );
}

export default Search;
