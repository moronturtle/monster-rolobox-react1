import React from "react";

import { Card } from "../card/card.component";

import "./card-list.styles.css";

export const CardList = props => {
  console.log(props);
  //   return <div className="card-list">{props.children}</div>;
  return (
    <div className="card-list">
      {" "}
      {props.monster.map(monster => (
        // <h1 key={monster.id}>{monster.name}  </h1>
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
