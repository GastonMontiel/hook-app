import React, { useMemo } from "react";
import getHeroesByPublisher from "../helpers/getHeroesByPublisher";
import PropsTypes from "prop-types";
import { HeroCard } from "./HeroCard";
export const HeroList = ({ publisher }) => {
  const heroesByPublisher = useMemo(
    () => getHeroesByPublisher(publisher),
    [publisher]
  );
  return (
    <div className=" row rows-cols-1 row-cols-md-3 g-3">
      {heroesByPublisher?.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

HeroList.propTypes = {
  publisher: PropsTypes.string.isRequired,
};
