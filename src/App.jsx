import React from "react";

export const App = () => {
  //return [<NetflixSeires key ="1" />,<NetflixSeires  key ="2" /> ];
return (<React.Fragment> 
  <NetflixSeires />
  <NetflixSeires />
  <NetflixSeires />
</React.Fragment>
);

};

const NetflixSeires = () => {
  const name = " Queen of Tears";
  const rating = "8.5";
  const summary = "The queen of department stores and her small-town husband weather a marital crisis —until love miraculously begins to bloom again.";

  let age = 18;

  //let canWatch = "Not Avaiaable";
  //if(age >= 18) canWatch = "Watch Now";

  const canWatch = () => {
    if(age >= 18 ) return "Watch Now";
      return "not";
    
  };

  const returnGenre = () => {
    const genre = "Comedy";
    return genre;
 };
 
 /*if(age < 18){
  return( <div>
    <div>
      <img src="images.jpeg" alt="images.jpeg" width= "30%" height= "60%" />
    </div>
  <h2> Name:{name}</h2>
  <h3>Rating:{7 + 9.3}</h3>
  <p>Summary:{summary}</p>
  <p>Genre: {returnGenre()}</p>
  <button>Not Available</button>
  </div>);

 }*/


  return( <div>
    <div>
      <img src="images.jpeg" alt="images.jpeg" width= "30%" height= "60%" />
    </div>
  <h2> Name:{name}</h2>
  <h3>Rating:{7 + 9.3}</h3>
  <p>Summary:{summary}</p>
  <p>Genre: {returnGenre()}</p>
  {/*<button>{age >= 18 ? "Show Now" : "Not Available"}</button>
//<button>{canWatch}</button>*/}
  <button>{canWatch()}</button>
  </div>);

};



