import React from "react";

 function MovieCard({movie:{imdbID,Year,Poster,Title,Type}}) {
    return(
    <div className="movie" key= {imdbID}>
            <div>
              <p>{Year}</p>
            </div>
            <div>
                <a
                href={`https://www.imdb.com/title/${imdbID}/`}
                target='_blank'
                rel='noreferrer'
                >
              <img
                src={
                  Poster !== "N/A"
                    ? Poster
                    : "https://via.placeholder.com/400"
                }
                alt={Title}
              />
              </a>
            </div>
            <div>
              <span>{Title}</span>
              <h3>{Type}</h3>
            </div>
          </div>
    )

}

export default MovieCard
