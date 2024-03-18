import React from "react";
import { Hike } from "./App";

interface MountainProps {
  hike: Hike;
}

export default function Mountain(props: MountainProps) {
  return (
    <div className="mountain-card" id={props.hike.name}>
      <img src={props.hike.image} alt={props.hike.name} />
      <h3>{props.hike.name}</h3>
      <div className="diff-save">
        <p>{props.hike.difficulty}</p>
        <button>Add</button>
      </div>
      <p>
        {props.hike.length} miles, {props.hike.height} feet
      </p>
    </div>
  );
}
