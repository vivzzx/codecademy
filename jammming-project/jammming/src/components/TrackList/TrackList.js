import React from 'react'
import Track from '../Track/Track'

const TrackList = (results) => {
   // const [s001, s002, s003] = results
    

    return (
        <div>
        
            <Track idTrack={results[0]} />
            <Track idTrack={results[1]}  />
            <Track idTrack={results[2]}  />
        </div>
    )
      
}

export default TrackList