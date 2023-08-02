import React, { useState,useEffect } from 'react'
import './Playlist.scss'
import Track from '../Track/Track'

const Playlist = props => {
    //const { song, artist, album } = idTrack
    const [playlist, setPlaylist] = useState([])
    //const { song, artist, album } = props
    
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

    console.log("on playlist",props)

    return (
        <div className='container-playlist'>
            <h3>Playlist</h3>
            {playlist.map((item,index)=>(
                <div className='track-container' id={item.id}>
                        <Track item={item} key={index} />
                        {/* <div className='plus-container' onClick={()=>{props.track(item.id)}}> */}
                        <div className='btn-container' onClick={()=>{props.addPlaylist(item)}}>
                            <p className='btn-simbol'>-</p>
                        </div>
                </div>
            ))}
        </div>
        )
}

export default Playlist

/*
<h4>{props.song}</h4>
                <p>{props.artist} | {props.album}</p>
                */