import React, {useState, useEffect} from 'react'
import './TrackList.scss'
import SearchResults from '../SearchResults/SearchResults'
import { getTracks } from '../../assets/helpers'
import Track from '../Track/Track'

const TrackList = (props) => {
    const [word, setWord] =  useState('')
    const [tracklist, setTracklist] = useState([])
    const [showList, setShowList] = useState(false)
    
    
    const callResults = async () => {
        const tracks = await getTracks(props.word)
        setTracklist(tracks.tracks.items)
        //console.log("tracklist word: ", tracks.tracks.items)

    }
    const plus = <svg id="Layer_1" height="512" className='plus-btn' viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm4 13h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2z"/></svg>

    useEffect(() => {
        if (props.word !== '') {
            //console.log("tracklist if word: ", props.word)
            callResults()

        }
        
    }, [props.word]);

    return (
        <div className='container-tracklist'>
            <h3>Tracks</h3>

                {tracklist.map((item, index) => (
                    <div className='track-container' id={item.id}>
                        <Track item={item} key={index} />
                        {/* <div className='plus-container' onClick={()=>{props.track(item.id)}}> */}
                        <div className='btn-container' onClick={()=>{props.addPlaylist(item)}}>
                            <p className='btn-simbol'>+</p>
                        </div>
                    </div>
                ))}
        </div>
    )
      
}

export default TrackList

/*

 <div className='container-tracklist'>
            <h3>Tracks</h3>
            <div>
                {tracklist.map((item, index) => (
                 /*       <Track item={item} key={index} />  */
                /*
                 <div className='track-container'>
                 <img src={item.album.images[0].url} width="70px" height="70px" alt={item.name} />
                 <div className='track-txt'>
                     <h4 className='track-title'>{item.name}</h4>
                     <p className='track-artist'>
         
                         {item.artists.map((item, index) => (
                             <span key={index}>{`${item.name} `}</span> ))} | {item.album.name}
                     </p>
                 </div>
             <div className='plus-container' onClick={()=>{props.track(item.name)}}>
                 {plus}
             </div>
         </div>


         ) )}

     </div>

 </div> 


*/