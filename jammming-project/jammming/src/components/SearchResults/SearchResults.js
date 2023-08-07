import React, {useState} from 'react'
import './SearchResults.scss'

const SearchResults = (props) => {
    const [results, setResults] = useState('');
    const [searched, setSearched] = useState(false)

    const getData = async () => {
        const url = 'https://api.spotify.com'
        const queryParams = '/v1/search?q='
        const wordQuery = props.word
        //const types = '&type=artist%2Ctrack&limit=10'
        const types = '&type=track&limit=10'
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
                setResults(jsonResponse.tracks.items)
                props.callResults(results)

                //console.log("results pra retornar", results)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    if(props.word !== '' && !searched){
        getData()
        setSearched(true)

    } 


    return (
        <>
        </>
    )
}

export default SearchResults