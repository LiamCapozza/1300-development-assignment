import React, { useEffect } from "react";
import "./App.css";
import Hikes from "./Hikes";
import ToDo from "./ToDo";
import { useState } from "react";
import hikeData from "./hikes.json";

export type Hike = {
  number: number;
  name: string;
  height: number;
  length: number;
  difficulty: string;
  state: string;
  image: string;
};

function App() {
  const [hikes, setHikes] = useState<Hike[]>(hikeData);
  const [toDo, setToDo] = useState<Hike[]>([]);

  const [sort, setSort] = useState<string>("None");
  const [diffFilter, setDiffFilter] = useState<string>("None");
  const [stateFilter, setStateFilter] = useState<string>("None");

  useEffect(() => {
    console.log(sort);
    let hikeList: Hike[] = hikeData;
    if (diffFilter !== "None") {
      hikeList = hikeData.filter((hike) => hike.difficulty === diffFilter);
    }
    if (stateFilter !== "None") {
      hikeList = hikeList.filter((hike) => hike.state === stateFilter);
    }
    if (sort === "Length - High to Low") {
      hikeList = hikeList.sort((a, b) => {
        return b.length - a.length;
      });
    } else if (sort === "Length - Low to High") {
      hikeList = hikeList.sort((a, b) => {
        return a.length - b.length;
      });
    } else if (sort === "Height - Tall to Short") {
      hikeList = hikeList.sort((a, b) => {
        return b.height - a.height;
      });
    } else if (sort === "Height - Short to Tall") {
      hikeList = hikeList.sort((a, b) => {
        return a.height - b.height;
      });
    }
    setHikes([...hikeList]);
  }, [sort, diffFilter, stateFilter]);

  return (
    <div className="App">
      <header>
        <h1>Hike To-Do List Maker</h1>
      </header>
      <Hikes
        hikes={hikes}
        sort={sort}
        diffFilter={diffFilter}
        stateFilter={stateFilter}
        setSort={setSort}
        setDiffFilter={setDiffFilter}
        setStateFilter={setStateFilter}
      />
      <ToDo />
    </div>
  );
}

export default App;
