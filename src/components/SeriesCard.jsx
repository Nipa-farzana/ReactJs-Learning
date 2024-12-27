export const SeriesCard = ({ data }) => {

  //console.log(props);

  const { img_url, name, rating, description, cast, genre, watch_url } = data;

    return ( <li>
        <div>
          <img 
            src={img_url} 
            alt={name} 
            width="40%" 
            height="60%" 
          />
        </div>
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p className="text-3xl font-bold underline">Summary: {description}</p>
        <p>Genre: {genre.join(", ")}</p> {/* Join array elements */}
        <p>Cast: {cast.join(", ")}</p> {/* Join array elements */}
        <a href={watch_url} target="_blank" rel="noopener noreferrer">
          <button>Watch Now</button>
        </a>
      </li>);

};