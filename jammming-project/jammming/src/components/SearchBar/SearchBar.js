import React from "react";
import "./SearchBar.scss";

const SearchBar = () => {
    return (
        <section className="search-box">
            <form>
                <label htmlFor="search" className="form-label">Type a song or an artist here</label>
                <input type="text" name="musicSearch" id="musicSearch" />
                <button type="submit" className="form-btn">Search</button>
            </form>
        </section>
    )
}

export default SearchBar