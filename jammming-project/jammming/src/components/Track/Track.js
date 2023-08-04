import React from 'react'
import './Track.scss'
import Playlist from '../Playlist/Playlist' 

const Track = props => {
    const track = props.item
    const idTrack = props.item.id
    const index = props.key

    const toggleBtn = () => {
        
    }
    
    return (
    <div className='track-compo' id={idTrack}>
        <div className='img-track'>
            <img src={track.album.images[0].url} width="75px" height="75px" alt={track.name} />
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