import queryString from "query-string";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hook/useForm";
import { HeroCard } from "../components/HeroCard";
import getHeroByName from "../helpers/getHeroByName";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q } = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const { searchText, onInputChange } = useForm({ searchText: q });
  const showError = heroes.length === 0 && q;

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Busqueda</h4>
          <hr />
          <form action="" onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-outline-primary">busqueda</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {!q && <div className="alert alert-primary">Busca un heroe</div>}
          {showError && (
            <div className="alert alert-danger">
              No hay heroes para <b>{q}</b>
            </div>
          )}
          {heroes.map((hero) => (
            <HeroCard {...hero} key={hero.id} />
          ))}
        </div>
      </div>
    </>
  );
};
