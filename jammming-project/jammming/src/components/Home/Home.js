import React, {useEffect} from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'
import { generateAcessToken } from '../../assets/helpers';
import './Home.scss'

const Home = () => {
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
                        <SearchBar />
                    </div>
                    <section className="containerLists">
                        <div className='box-results box-list'>
                            <SearchResults />
                        </div>
                        <div className='box-playlist box-list'>
                            <Playlist />
                            <button className='save-btn'>SAVE TO SPOTIFY</button> 
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Home


