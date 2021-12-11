import React from "react";
import { useParams, useHistory } from "react-router-dom";

const AnimalSingle = () => {
  let { animal } = useParams();
  let history = useHistory();

  return (
    <div>
      <h1>{animal} will be here</h1>
      <div>
        <button onClick={() => history.goBack()}>Back to animals</button>
      </div>
    </div>
  );
};

export default AnimalSingle;
