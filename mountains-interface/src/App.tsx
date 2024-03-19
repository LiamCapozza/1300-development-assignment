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
  const [toDo, setToDo] = useState<number[]>([]);
  const [sort, setSort] = useState<string>("None");
  const [diffFilter, setDiffFilter] = useState<string>("None");
  const [stateFilter, setStateFilter] = useState<string>("None");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleToDo = (mountainNumber: number) => {
    if (!toDo.includes(mountainNumber)) {
      setToDo([...toDo, mountainNumber]);
    } else {
      let tempArr: number[] = [...toDo];
      let index = tempArr.indexOf(mountainNumber);
      tempArr.splice(index, 1);
      setToDo([...tempArr]);
    }
  };

  useEffect(() => {
    let hikeList: Hike[] = hikeData;
    if (diffFilter !== "None") {
      hikeList = hikeData.filter((hike) => hike.difficulty === diffFilter);
    }
    if (stateFilter !== "None") {
      hikeList = hikeList.filter((hike) => hike.state === stateFilter);
    }
    if (sort === "None") {
      hikeList = hikeList.sort((a, b) => {
        return a.number - b.number;
      });
    } else if (sort === "Length - High to Low") {
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
    <div className={"App " + (isSidebarOpen ? "with-sidebar" : "")}>
      <header>
        <h1>Hike To-Do List Maker</h1>
      </header>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? "Close To-Do" : "Open To-Do"}
      </button>
      <div className={"sidebar " + (isSidebarOpen ? "open" : "")}>
        <ToDo toDo={toDo} hikeData={[...hikeData]} toggleToDo={toggleToDo} />
      </div>
      <Hikes
        hikes={hikes}
        sort={sort}
        diffFilter={diffFilter}
        stateFilter={stateFilter}
        setSort={setSort}
        setDiffFilter={setDiffFilter}
        setStateFilter={setStateFilter}
        toggleToDo={toggleToDo}
        toDo={toDo}
      />
    </div>
  );
}

export default App;
