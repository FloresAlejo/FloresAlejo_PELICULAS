import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "./httpClient";
import movie from "./MoviesData.json"
import styles from "./MoviesDetail.module.css"

export function MoviesDetail (){
    const { movieId} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get ("/movie/" + movieId).then((data) => {
            setMovie(data)
        });
    }, [movieId]);

    if (!movie){
        return null;
    }

    const imageURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return <div className={styles.detailsContainer}>
        <img className={`${styles.columna} ${styles.movieImage}`} src={imageURL} alt={movie.title} />
        <div className={`${styles.columna} ${styles.movieText}`}>
            <p><strong>TITULO: </strong> {movie.title}</p>
            <p>
                <strong>GENERO: </strong>
                {movie.genres.map(genre => genre.name).join(", ")}
            </p>
            <p><strong>DESCRIPCION: </strong> {movie.overview}</p>
        </div>
    </div>
    
}