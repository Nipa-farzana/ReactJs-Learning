import React from "react";
import seriesData from "../api/seriesData.json"; // Correct relative path

const NetflixSeires = () => {
  return (
    <ul>
      {seriesData.map((curElem) => (
        <li key={curElem.id}>
          <div>
            <img 
              src={curElem.img_url} 
              alt={curElem.name} 
              width="40%" 
              height="60%" 
            />
          </div>
          <h2>Name: {curElem.name}</h2>
          <h3>Rating: {curElem.rating}</h3>
          <p>Summary: {curElem.description}</p>
          <p>Genre: {curElem.genre.join(", ")}</p> {/* Join array elements */}
          <p>Cast: {curElem.cast.join(", ")}</p> {/* Join array elements */}
          <a href={curElem.watch_url} target="_blank" rel="noopener noreferrer">
            <button>Watch Now</button>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NetflixSeires;
