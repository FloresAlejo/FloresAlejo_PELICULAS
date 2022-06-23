
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import movies from "../movie.json";
import { get } from "./httpClient";
import { MoviesCard } from "./MoviesCard";
import styles from "./MoviesGrid.module.css";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
export function MoviesGrid() {
   //let movies = [];
   const [movies, setMovies] = useState([]);

   const location = useLocation();
   //console.log(location.search);
    const query = useQuery();
    const search = query.get("Search");
    //console.log(search);

    useEffect(() => {
        const searchURL = search
        ? "/search/movie?query=" + search
        : "/discover/movie";
        get(searchURL)
          .then((data) => {
            setMovies(data.results);
          });
        
        }, [search]);
    return (
        <ul className={styles.movieGrid}>
            {movies.map((movie) => (
                <MoviesCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    )
} 