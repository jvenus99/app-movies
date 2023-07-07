import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonAtom from "../../../shared/presentation/components/button.atom";
import InputAtom from "../../../shared/presentation/components/input.atom";
import { GetMovieCase } from "../../data/useCases/getMovie.case";
import { setMovie, startLoading, stopLoading, clearState } from "../../data/action/movie.action";
import "./search.organism.scss";

interface SearchOrganismProps {
  getMovieCase: GetMovieCase;
}

const SearchOrganism: React.FC<SearchOrganismProps> = ({ getMovieCase }) => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    dispatch(startLoading());
    getMovieCase
      .execute(searchValue)
      .then((movie) => {
        dispatch(setMovie(movie));
        console.log(movie);
      })
      .catch((e) => {
        dispatch(stopLoading());
        console.log(e);
      });
  };

  const handleResetClick = () => {
    setSearchValue("");
    dispatch(clearState());
  };

  return (
    <form className="search-organism">
      <InputAtom
        placeholder="Enter a movie title"
        value={searchValue}
        onChange={handleInputChange}
      />
      <ButtonAtom onClick={handleSearchClick}>
        Search
      </ButtonAtom>
      <ButtonAtom onClick={handleResetClick}>
        Reset
      </ButtonAtom>
    </form>
  );
};

export default SearchOrganism;