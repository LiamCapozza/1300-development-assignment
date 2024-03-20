import { Dispatch, SetStateAction } from "react";
import { Hike } from "./App";
import Mountain from "./Mountain";

interface HikesProps {
  hikes: Hike[];
  sort: string;
  diffFilter: string;
  stateFilter: string;
  search: string;
  setSort: Dispatch<SetStateAction<string>>;
  setDiffFilter: Dispatch<SetStateAction<string>>;
  setStateFilter: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
  toggleToDo: (mountainNumber: number) => void;
  toDo: number[];
}

export default function Hikes(props: HikesProps) {
  return (
    <div className="hikes-section">
      <div className="sorts-filters">
        <div className="sorting">
          <label htmlFor="sorts">Sort by:</label>

          <select
            name="sorts"
            id="sorts"
            onChange={(e) => props.setSort(e.target.value)}
            value={props.sort}
          >
            <option value="None">None</option>
            <option value="Length - High to Low">Length - High to Low</option>
            <option value="Length - Low to High">Length - Low to High</option>
            <option value="Height - Tall to Short">
              Height - Tall to Short
            </option>
            <option value="Height - Short to Tall">
              Height - Short to Tall
            </option>
          </select>

          <button className="reset" onClick={() => props.setSort("None")}>
            X
          </button>
        </div>

        <div className="filtering">
          <label htmlFor="filterDiff">Filter by:</label>
          <select
            name="filterDiff"
            id="filterDiff"
            onChange={(e) => props.setDiffFilter(e.target.value)}
            value={
              props.diffFilter === "None" ? "Difficulty" : props.diffFilter
            }
          >
            <option value="None">Difficulty</option>
            <option value="Hard">Hard</option>
            <option value="Medium">Medium</option>
            <option value="Easy">Easy</option>
          </select>

          <label htmlFor="filterState">Filter by:</label>
          <select
            name="filterState"
            id="filterState"
            onChange={(e) => props.setStateFilter(e.target.value)}
            value={props.stateFilter === "None" ? "State" : props.stateFilter}
          >
            <option value="None">State</option>
            <option value="New Hampshire">New Hampshire</option>
            <option value="Vermont">Vermont</option>
            <option value="Maine">Maine</option>
            <option value="Nepal">Nepal</option>
          </select>
          <button
            className="reset"
            onClick={() => {
              props.setDiffFilter("None");
              props.setStateFilter("None");
            }}
          >
            X
          </button>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => props.setSearch(e.target.value)}
        value={props.search}
      ></input>
      <div className="hikes">
        {props.hikes.length ? (
          props.hikes.map((hike) => (
            <Mountain
              key={hike.number}
              hike={hike}
              toggleToDo={props.toggleToDo}
              cardInHikes={true}
              toDo={props.toDo}
            />
          ))
        ) : (
          <p>No results! Try again</p>
        )}
      </div>
    </div>
  );
}
