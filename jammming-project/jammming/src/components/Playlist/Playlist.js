import React from 'react'
import './Playlist.scss'

const Playlist = () => {

    return (
        <div className='container-playlist'>
            <h3>Playlist Name</h3>
            <div>
                <h5>Item 1</h5>
                <p>Eminem</p>
            </div>
            <button className='save-btn'>SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist