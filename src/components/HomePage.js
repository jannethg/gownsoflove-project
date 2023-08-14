import { useState } from "react";
import GownCard from "./GownCard";

export default function HomePage({ gownsList }) {
    const [categoryFilter, setCategoryFilter] = useState("Wedding Gown")

    let filteredGowns
    if (categoryFilter === "All") {
        filteredGowns = gownsList
    }
    else {
        filteredGowns = gownsList.filter(gown => gown.category === categoryFilter)
    }
    return (
        <div>
            <div>
                <button className="btn btn-primary me-2" onClick={() => setCategoryFilter("All")}>All</button>
                <button className="btn btn-primary me-2" onClick={() => setCategoryFilter("Wedding Gown")}>Wedding</button>
                <button className="btn btn-primary me-2" onClick={() => setCategoryFilter("Prom Gown")}>Prom</button>
                <button className="btn btn-primary me-2" onClick={() => setCategoryFilter("Evening Gown")}>Evening</button>  
            </div>
           { filteredGowns.map (g => <GownCard gown={g}/> ) }
        </div>
    );
}