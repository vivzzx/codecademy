import React, { useState } from 'react'
import './Playlist.scss'
//import Track from '../Track/Track'

const Playlist = (props) => {
    //const { song, artist, album } = idTrack
    //const [playlist, setPlaylist] = useState([])
    //const { song, artist, album } = props
    const playlist = props.playlist
    const idTrack = props.idTrack
    
    const printTrack = () => {
            playlist.onEach((element) => {
                <div>
                    <h4>{element.song}</h4>
                    <p>{element.artist} | {element.album}</p> 
                </div>
            })
    }

    return (
        <div className='container-playlist'>
            <h3>Playlist</h3>
            {/*playlist.length > 0 ? printTrack : false*/}
            {printTrack}
            <p>Musica 1</p>
            <p>Musica 2</p>
        </div>
        )
}

export default Playlist

/*
<h4>{props.song}</h4>
                <p>{props.artist} | {props.album}</p>
                */