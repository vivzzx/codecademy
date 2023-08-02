import React, {useState} from "react";
import SearchResults from "../SearchResults/SearchResults";
import TrackList from "../TrackList/TrackList";
import "./SearchBar.scss";

const SearchBar = (props) => {
    const [word, setWord] = useState('')

    const handleClick = () => {
        props.searchWord(word)
        console.log("handleClick word: ", word)
    }
    
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
                    className="form-btn"
                    onClick={handleClick}
                    >Search</button>
            </form>
           {/*<SearchResults word={word} />*/}
        </section>
    )
}

export default SearchBar