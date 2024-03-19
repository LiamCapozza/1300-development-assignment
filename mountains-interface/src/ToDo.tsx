import React from "react";
import { Hike } from "./App";
import Mountain from "./Mountain";

interface ToDoProps {
  toDo: number[];
  hikeData: Hike[];
  toggleToDo: (mountainNumber: number) => void;
}

export default function ToDo(props: ToDoProps) {
  let toDoHikes: Hike[] = [];

  for (let i = 0; i < props.toDo.length; i++) {
    toDoHikes.push(props.hikeData[props.toDo[i]]);
  }

  return (
    <div className="toDo">
      <h1>To-Do</h1>
      <div className="to-dos">
        {toDoHikes.length ? (
          <>
            <p>
              {toDoHikes.length} {toDoHikes.length > 1 ? "hikes" : "hike"} left
              to do!
            </p>
            {toDoHikes.map((hike) => (
              <Mountain
                key={hike.number}
                hike={hike}
                cardInHikes={false}
                toggleToDo={props.toggleToDo}
                toDo={props.toDo}
              />
            ))}
          </>
        ) : (
          <h3>Add something and get trekking!</h3>
        )}
      </div>
    </div>
  );
}
