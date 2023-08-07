import React, {useState, useEffect} from 'react'
import './TrackList.scss'
import { getTracks } from '../../assets/helpers'
import Track from '../Track/Track'

const TrackList = (props) => {
    //const [word, setWord] =  useState('')
    const [tracklist, setTracklist] = useState([]) 
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const callResults = async () => {
        const tracks = await getTracks(props.word)
        setTracklist(tracks.tracks.items)
        //console.log("tracklist word: ", tracks.tracks.items)

    }

    useEffect(() => {
        if (props.word !== '') {
            //console.log("tracklist if word: ", props.word)
            callResults()

        }
        
    }, [callResults, props.word]);

    return (
        <div className='container-tracklist'>
            <div className='tracklist-title'>
                <h3>Tracks</h3>
            </div>
            <div className='flex-playlist'>
                {tracklist.map((item, index) => (
                    <div className='track-container' id={item.id}>
                        <Track item={item} key={index} />
                        {/* <div className='plus-container' onClick={()=>{props.track(item.id)}}> */}
                        <div className='btn-container' onClick={()=>{props.addPlaylist(item)}}>
                            <p className='btn-simbol-add'>+</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
      
}

export default TrackList