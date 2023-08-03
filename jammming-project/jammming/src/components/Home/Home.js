import React, {useEffect, useState} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import TrackList from '../TrackList/TrackList';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'
import { generateAcessToken } from '../../assets/helpers';
import './Home.scss'

const Home = () => {
    const [word, setWord] = useState('')
    const [playlist, setPlaylist] = useState([])

    
    const searchWord = (word) => {
        setWord(word)
    }

    const addPlaylist = (track) => {
        if(!playlist.includes(track)){
            setPlaylist((prevPlaylist) => [...prevPlaylist, track])
            //console.log("playlist no home:", playlist)
        }
    }

    const removePlaylist = (track) => {
        setPlaylist(prevPlaylist => prevPlaylist.filter(item => item !== track))
    }

    useEffect(() => {
        generateAcessToken()
      }, [])

    return (
        <div className="Home">
            <div className='box-content'>
                <header className="home-header">
                    <h1>Ja<span className='highlight'>mmm</span>ing</h1>
                </header>
                <main>
                    <div className='box-search'>
                        <SearchBar searchWord={searchWord} />
                    </div>
                    <section className="containerLists">
                        <div className='box-results box-list'>
                            <TrackList word={word} addPlaylist={addPlaylist} />
                        </div>
                        <div className='box-playlist box-list'>
                            <Playlist playlist={playlist} removePlaylist={removePlaylist} /> 
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Home


