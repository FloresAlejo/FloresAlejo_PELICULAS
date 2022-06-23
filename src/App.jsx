
import { LandingPage } from "./components/LandingPage";
import { MoviesGrid } from "./components/MoviesGrid";
import { BrowserRouter as  Router, Switch, Route, Link} from "react-router-dom";
import { MoviesDetail } from "./components/MoviesDetail";
import { Search } from "./components/Search";
import styles from "./App.module.css"
 export function App(){
    return (
    <Router>
        <header >
            <Link to="/">
                <div className={styles.cabecera}>
                <div><h1>PelisPlus 📼🎥</h1></div>
              
                </div>
            </Link>
            
        </header>

        <main>
            <Switch>
                <Route exact path="/movies/:movieId">
                    <MoviesDetail />
                </Route>
                <Route path="/"><LandingPage /></Route>
            </Switch>
        </main>
    </Router>
    );
}