import { Filter } from "./Filter";
import { MoviesGrid } from "./MoviesGrid";
import { Search } from "./Search";
import styles from "./LandingPage.module.css"; 
export function LandingPage() {
    return (
        
    <div>
        <Search />
        <div>
            <Filter />
        </div>
        <MoviesGrid />
    </div>
    );
}