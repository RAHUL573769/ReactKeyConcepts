import React from "react";

const Description = (props) => {
  console.log(props);
  return (
    <div>
      <ul id="concepts">
        <li className="concept">
          <img src={props.concepts[0].image} alt="TODO: TITLE" />
          <h2>{props.concepts[0].title}</h2>
          <p>{props.concepts[0].description}</p>
        </li>
        <li className="concept">
          <img src={props.concepts[1].image} alt="TODO: TITLE" />
          <h2>{props.concepts[1].title}</h2>
          <p>{props.concepts[1].description}</p>
        </li>
        <li className="concept">
          <img src={props.concepts[2].image} alt="TODO: TITLE" />
          <h2>{props.concepts[2].title}</h2>
          <p>{props.concepts[2].description}</p>
        </li>
      </ul>
    </div>
  );
};

export default Description;
