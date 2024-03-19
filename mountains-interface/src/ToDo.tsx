import React from "react";
import { Hike } from "./App";
import Mountain from "./Mountain";
interface ToDoProps {
  toDo: number[];
  hikeData: Hike[];
  toggleToDo: (mountainNumber: number) => void;
}

export default function ToDo(props: ToDoProps) {
  let toDoHikes = props.hikeData.filter((hike) =>
    props.toDo.includes(hike.number)
  );
  return (
    <div className="toDo">
      <h1>To-Do</h1>
      <div className="to-dos">
        {toDoHikes.map((hike) => (
          <Mountain
            key={hike.number}
            hike={hike}
            cardInHikes={false}
            toggleToDo={props.toggleToDo}
            toDo={props.toDo}
          />
        ))}
      </div>
    </div>
  );
}
