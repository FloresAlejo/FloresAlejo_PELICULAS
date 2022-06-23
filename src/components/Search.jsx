import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Search.module.css";
import { useQuery } from "./UseQuery";

export function Search(){
    const query = useQuery();
    const search = query.get("Search");

    const[searchText, setSearchText] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?Search=" + searchText);
    };

    useEffect(() => {
        setSearchText(search || "");
    },[search]); 

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
        
                <input 
                className={styles.searchInput} 
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} 
                />
                <button className={styles.searchButton} type="submit">🔎</button>
            </div>
        </form>
    );
}