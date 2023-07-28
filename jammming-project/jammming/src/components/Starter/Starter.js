import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Starter.scss'
import { generateAcessToken } from '../../assets/helpers'

const Starter = () => {
    const [user, setUser] = useState('')

    const navigate = useNavigate()

    const toggle = async () => {
        //setIsLogged(true)
        if (user === "") {
          const userData = await generateAcessToken()
          console.log("user data toggle: ",userData)
          setUser(userData)
        }
    }


    useEffect(() => {
    
      toggle()

    }, []);


    return (
     <div className='containerLogin'>
            <div className='box-start'>
                <p>Welcome <span className='username'>{user?.display_name}</span>!</p>
                <button onClick={() => navigate('/Home')} className='login-btn'>Start</button>
            </div>
      </div>
    )
}

export default Starter

/*

        checkIsLogged() === false ? <div className='containerLogin'>

*/

/*



{}

{
  "display_name": "Vivy Vivy",
  "external_urls": {
    "spotify": "https://open.spotify.com/user/vivzz"
  },
  "href": "https://api.spotify.com/v1/users/vivzz",
  "id": "vivzz",
  "images": [
    {
      "url": "https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-1/68307522_10157513137163466_5376313419727110144_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=104&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=nFugMx8pX_0AX9xjqDP&_nc_ht=scontent-ams2-1.xx&edm=AP4hL3IEAAAA&oh=00_AfDCrYOei70G4fAlTGjGTChWpRvUD-BX8CAy0wwt3fyoBA&oe=64E93442",
      "height": 64,
      "width": 64
    },
    {
      "url": "https://scontent-ams2-1.xx.fbcdn.net/v/t1.6435-1/68307522_10157513137163466_5376313419727110144_n.jpg?stp=dst-jpg_s320x320&_nc_cat=104&ccb=1-7&_nc_sid=0c64ff&_nc_ohc=nFugMx8pX_0AX9xjqDP&_nc_ht=scontent-ams2-1.xx&edm=AP4hL3IEAAAA&oh=00_AfDYuEKHKANc-oViZf6_LUV2NCPifsNnPPJRNkzTilbohQ&oe=64E93442",
      "height": 300,
      "width": 300
    }
  ],
  "type": "user",
  "uri": "spotify:user:vivzz",
  "followers": {
    "href": null,
    "total": 67
  },
  "country": "ES",
  "product": "free",
  "explicit_content": {
    "filter_enabled": false,
    "filter_locked": false
  },
  "email": "vivyyy@gmail.com"
}


*/