import React from 'react'
import './Track.scss'
import Playlist from '../Playlist/Playlist' 

const plus = <svg id="Layer_1" height="512" className='plus-btn' viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm4 13h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z"/></svg>

const Track = props => {
    const track = props.item
    const idTrack = props.item.id
    const index = props.key

    const toggleBtn = () => {
        
    }
    
    return (
    <div className='track-compo' id={idTrack}>
        <div className='img-track'>
            <img src={track.album.images[0].url} width="70px" height="70px" alt={track.name} />
        </div>
        <div className='track-txt'>
            <h4 className='track-title'>{track.name}</h4>
            
            <p className='track-artist'>
                <span key={track.index}>
                    {`${track.name} `}
                </span> | {track.album.name}
            </p>

        </div>

    </div>
    )
}

export default Track

/*
<img src={item.album.images[0].url} width="100px" alt="" srcset="" />
*/