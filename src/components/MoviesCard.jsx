import { Link } from "react-router-dom";
import styles from "./MoviesCard.module.css"

export function MoviesCard({ movie }) {
    const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
    <li className={styles.MovieCard}>
        <Link to={"/movies/" + movie.id}>
        <img 
        width={230}
        height={345}
        className={styles.MovieImage} 
        src={imageURL} 
        alt={imageURL.title} />
        </Link>
        <div>{movie.title}</div>
    </li>
    );
}