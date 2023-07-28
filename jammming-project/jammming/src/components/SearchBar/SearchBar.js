import React, {useState} from "react";
import SearchResults from "../SearchResults/SearchResults";
import "./SearchBar.scss";

const SearchBar = () => {
    const [word, setWord] = useState('')
    return (
        <section className="search-box">

            <form placeholder="Type a song or an artist.">
                <label
                    htmlFor="search"
                    className="form-label">Type a song or an artist here</label>
                <input
                    type="text"
                    name="musicSearch" 
                    onBlur={(e)=>{setWord(e.target.value)}}
                    id="musicSearch" />
                <button
                    type="button"
                    className="form-btn">Search</button>
            </form>
            {/* arrumar essa parte aqui!!
            <SearchResults word={word} /> */}
        </section>
    )
}

export default SearchBar