import React, {useState} from 'react'
import './Track.scss'

const Track = props => {
    const track = props.item
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentAudio, setCurrentAudio] = useState('')

    const handlePlay = () => {
        const audioElement = document.getElementById(`audioElement-${track.id}`)
        let audioPlaying = document.getElementById(currentAudio)

        console.log("audio ele ", audioElement)
        console.log("audio play ", audioPlaying)
        /*
        if (audioPlaying !== '' && audioPlaying !== audioElement) {
            console.log("entrou no teste")
            audioPlaying.pause()
        }*/
        if (!isPlaying) {
            /*
            if (currentAudio !== null) {
                console.log("entrou no teste")
                audioPlaying.pause()
            }*/
            audioElement.play();
            setIsPlaying(true);

        } else {
            audioElement.pause();
            setIsPlaying(false);

        }
        setCurrentAudio(audioElement)
        console.log("entrou no handle")
        //console.log("audio element ", audioElement)
    }

    return (
    <div className='track-compo'>
        <div className='img-track'>
            <div className='img-audio' onClick={handlePlay}>
                <audio id={`audioElement-${track.id}`}>
                    <source src={track.preview_url} type='audio/mpeg' />
                </audio>
            </div>
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