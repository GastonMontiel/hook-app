import React from "react";
import PropsTypes from "prop-types";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imgUrl = `/assets/heroes/${id}.jpg`;
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img className="card-img" src={imgUrl} alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && <p>{characters}</p>}
              <div className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </div>

              <Link to={`/hero/${id}`}>Mas info</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  id: PropsTypes.string,
  superhero: PropsTypes.string,
  publisher: PropsTypes.string,
  alter_ego: PropsTypes.string,
  first_appearance: PropsTypes.string,
  characters: PropsTypes.string,
};
