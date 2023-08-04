import React, { useState,useEffect } from 'react'
import './Playlist.scss'
import Track from '../Track/Track'
import { saveToPlaylist } from '../../assets/helpers'

const Playlist = props => {
    const [playlist, setPlaylist] = useState([])
    const [playlistTitle, setPlaylistTitle] = useState("")
    const [toggleVisibility, setToggleVisibility] = useState(false)
    
    const toggleClass = () => {
        if (toggleVisibility) {
            return "dialog"
        } else {
            return "dialog-hidden"
        }
    }
    const saveToSpotify = () => {
        if (playlistTitle === "") {
            console.log('empty title')
            setToggleVisibility(true)
            toggleClass()

        } else {
            const tracksUri = []
            props.playlist.map((item, index) => (
                tracksUri.push(item.uri)
                //console.log("map aqui!", item.uri)
            ))
            console.log("todos os uri", tracksUri)
            //tracksUri.join(',')
            //const string = tracksUri.join(',').toString()
            saveToPlaylist(tracksUri, playlistTitle)
        }
    }

    const handleUserInput = (e) => {
        setPlaylistTitle(e.target.value)
    }

    useEffect(() => {
        setPlaylist(props.playlist)
      
        
    }, [props.playlist])

    //console.log("on playlist",props)

    return (
        <div className='container-playlist'>
            <div className='playlist-title'>
                <h3>Playlist:</h3>
                <form>
                    <label htmlFor="title"></label>
                    <input 
                        required
                        className='playlistForm'
                        type="text" 
                        name='playlistTitle'
                        defaultValue={playlistTitle}
                        placeholder='Your playlist title here'
                        onChange={handleUserInput} />
                </form>
            </div>
            <div className='flex-playlist'>
                {playlist.map((item,index)=>(
                    <div className='track-container' id={item.id}>
                            <Track item={item} key={index} />
                            {/* <div className='plus-container' onClick={()=>{props.track(item.id)}}> */}
                            <div className='btn-container' onClick={()=>{props.removePlaylist(item)}}>
                                <p className='btn-simbol'>-</p>
                            </div>
                    </div>
                ))}
            </div>
            <div className='container-save-btn'>
                <button className='save-btn' onClick={saveToSpotify}>SAVE TO SPOTIFY</button>
            </div>
            <div className={toggleClass()}>
                    <div className='dialog-content'>
                        <p className='dialogTitle'>Missing title</p>
                        <p className='dialogDescription'>
                            You need to choose a title to your playlist.
                        </p>
                        <button className='button-dialog' onClick={() => setToggleVisibility(false)}>Ok 👌</button>
                    </div>
                </div>
        </div>
        )
}

export default Playlist