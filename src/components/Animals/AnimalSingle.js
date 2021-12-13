import React from "react";
import { useParams, useHistory } from "react-router-dom";

const AnimalSingle = () => {
  let history = useHistory();
  let { animal } = useParams();

  return (
    <div>
      <h1>{animal} will be here</h1>
      <div>
        <img
          src={`https://source.unsplash.com/1600x900/?${animal}`}
          alt="animal_picture"
        />
        <div>
          <button onClick={() => history.goBack()}>Back to animals</button>
        </div>
      </div>
    </div>
  );
};

export default AnimalSingle;
