import React from 'react'
import './SearchResults.scss'
import TrackList from '../TrackList/TrackList'

const SearchResults = (props) => {
    let results
    //console.log('propssss',props)


    const getData = async () => {
        const url = 'https://api.spotify.com'
        const queryParams = '/v1/search?q='
        const wordQuery = props.word
        const types = '&type=artist%2Ctrack&limit=10'
        const endpoint = url + queryParams + wordQuery + types

        try {
            const response = await fetch(endpoint, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            })
         
            if (response.ok) {
                const jsonResponse = await response.json()
                // code to execute with jsonResponse
                console.log(jsonResponse)
                results = jsonResponse
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    if(props.word !== ''){
        getData()
    }
    /*
    const results = [
        {
            song: 'Watermelon Sugar',
            artist: 'Harry Styles',
            album: 'Fine Line',
        },
        {
            song: 'Stand by Me',
            artist: 'Oasis',
            album: 'Be Here Now',
        },
        {
            song: 'Ur so beautiful',
            artist: 'Grace VanderWaal',
            album: 'Ur so beautiful',
        }
    ]*/

    return (
        <div className='container-results'>
            <h3>Results</h3>
            <div>
                {getData}
                <TrackList results={results} />
            </div>
        </div>
    )
}

export default SearchResults

/*
<Track idTrack={results.s001} add2Playlist={add2Playlist} />
<Track idTrack={results.s002} add2Playlist={add2Playlist} />
<Track idTrack={results.s003} add2Playlist={add2Playlist} />

*/