import React, { useState,useEffect } from 'react'
import './Playlist.scss'
import Track from '../Track/Track'
import { saveToPlaylist } from '../../assets/helpers'

const Playlist = props => {
    //const { song, artist, album } = idTrack
    const [playlist, setPlaylist] = useState([])

    const saveToSpotify = () => {
        const tracksUri = []
        props.playlist.map((item, index) => (
            tracksUri.push(item.uri)
            //console.log("map aqui!", item.uri)
        ))
        console.log("todos os uri", tracksUri)
        //tracksUri.join(',')
        //const string = tracksUri.join(',').toString()
        saveToPlaylist(tracksUri)
    }
    
 /*    useEffect(() => {
        const playlistArr = [...playlist]
 
        if(!playlistArr.includes(props.playlist)){
            playlistArr.push(props.playlist)
            setPlaylist(playlistArr)
        }
      
        
    }, [props]) */

    useEffect(() => {
        setPlaylist(props.playlist)
      
        
    }, [props.playlist])

    //console.log("on playlist",props)

    return (
        <div className='container-playlist'>
            <h3>Playlist</h3>
            {playlist.map((item,index)=>(
                <div className='track-container' id={item.id}>
                        <Track item={item} key={index} />
                        {/* <div className='plus-container' onClick={()=>{props.track(item.id)}}> */}
                        <div className='btn-container' onClick={()=>{props.removePlaylist(item)}}>
                            <p className='btn-simbol'>-</p>
                        </div>
                </div>
            ))}
            <button className='save-btn' onClick={saveToSpotify}>SAVE TO SPOTIFY</button>
        </div>
        )
}

export default Playlist

/*
<h4>{props.song}</h4>
                <p>{props.artist} | {props.album}</p>
                */