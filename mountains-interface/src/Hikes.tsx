import React, { Dispatch, SetStateAction } from "react";
import { Hike } from "./App";
import Mountain from "./Mountain";

interface HikesProps {
  hikes: Hike[];
  sort: string;
  diffFilter: string;
  stateFilter: string;
  setSort: Dispatch<SetStateAction<string>>;
  setDiffFilter: Dispatch<SetStateAction<string>>;
  setStateFilter: Dispatch<SetStateAction<string>>;
  toggleToDo: (mountainNumber: number) => void;
  toDo: number[];
}

export default function Hikes(props: HikesProps) {
  return (
    <div className="hikes-section">
      <h1>Hikes</h1>
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
          <button onClick={() => props.setSort("None")}>Reset Sorts</button>
        </div>

        <div className="filtering">
          <button
            onClick={() => {
              props.setDiffFilter("None");
              props.setStateFilter("None");
            }}
          >
            Reset Filters
          </button>
          <div className="filtering-diff">
            <label htmlFor="filterDiff">Filter by difficulty:</label>
            <select
              name="filterDiff"
              id="filterDiff"
              onChange={(e) => props.setDiffFilter(e.target.value)}
              value={props.diffFilter}
            >
              <option value="None">None</option>
              <option value="Hard">Hard</option>
              <option value="Medium">Medium</option>
              <option value="Easy">Easy</option>
            </select>
          </div>
          <div className="filtering-state">
            <label htmlFor="filterState">Filter by state:</label>
            <select
              name="filterState"
              id="filterState"
              onChange={(e) => props.setStateFilter(e.target.value)}
              value={props.stateFilter}
            >
              <option value="None">None</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="Vermont">Vermont</option>
              <option value="Maine">Maine</option>
              <option value="Nepal">Nepal</option>
            </select>
          </div>
        </div>
      </div>
      <div className="hikes">
        {props.hikes.map((hike) => (
          <Mountain
            key={hike.number}
            hike={hike}
            toggleToDo={props.toggleToDo}
            cardInHikes={true}
            toDo={props.toDo}
          />
        ))}
      </div>
    </div>
  );
}
