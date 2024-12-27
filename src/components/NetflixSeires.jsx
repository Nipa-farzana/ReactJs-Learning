import React from "react";
import seriesData from "../api/seriesData.json"; // Correct relative path
import { SeriesCard } from "./SeriesCard";

const NetflixSeires = () => {
  return (
    <ul>
      {seriesData.map((data) => (
        <SeriesCard key = {data.id} data = {data} />))}
    </ul>
  );
};

export default NetflixSeires;
