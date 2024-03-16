import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GeoAPIOptions, GEO_API_URL } from "./api";

const Search = ({ onSearchChange }) => {
  const [Search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = async (input) => {
    try {
      const Response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${input}`,
        GeoAPIOptions
      );
      const res = await Response.json();
      return {
        options: res.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <div className="w-96 hover:cursor-pointer text-black ">
      <AsyncPaginate
        loadOptions={loadOptions}
        placeholder="Search for city"
        debounceTimeout={600}
        value={Search}
        styles={{ width: "50px" }}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Search;
