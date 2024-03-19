import React, { useEffect, useState } from "react";
import { Hike } from "./App";

interface MountainProps {
  hike: Hike;
  toggleToDo: (mountainNumber: number) => void;
  cardInHikes: boolean;
  toDo: number[];
}

export default function Mountain(props: MountainProps) {
  const [isFav, setIsFav] = useState<boolean>();

  useEffect(() => {
    if (props.toDo.includes(props.hike.number)) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [props.toDo]);

  return (
    <div className="mountain-card" id={props.hike.name}>
      <img src={props.hike.image} alt={props.hike.name} />
      <h3>{props.hike.name}</h3>
      <div className="diff-save">
        <p>{props.hike.difficulty}</p>

        <button
          onClick={() => {
            props.toggleToDo(props.hike.number);
          }}
        >
          {isFav ? "Remove" : "Add"}
        </button>
      </div>
      <p>
        {props.hike.length} miles, {props.hike.height} feet
      </p>
    </div>
  );
}
