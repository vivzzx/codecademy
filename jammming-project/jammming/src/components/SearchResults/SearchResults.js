import React from 'react'
import './SearchResults.scss'
import Track from '../Track/Track'

const SearchResults = () => {

    return (
        <div className='container-results'>
            <h3>Results</h3>
            <div>
                <Track />
                <Track />
                <Track />
            </div>
        </div>
    )
}

export default SearchResults