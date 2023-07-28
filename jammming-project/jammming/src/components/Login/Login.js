import React, {useEffect, useState} from 'react'
import { redirect } from 'react-router-dom'
import './Login.scss'
import { startGenerate } from '../../assets/helpers'

const Login = () => {
    const [isLogged, setIsLogged] = useState(false)

    const startToken = () => {
        startGenerate()
        //checkStatus()
    }

    useEffect(() => {
        //startGenerate()

    }, []);

    return (
        <div className='containerLogin'>
        {isLogged === true ? redirect("/app") : false} 
            <div className='box-login'>
                <p>To make a Playlist, you need to login.</p>
                <button onClick={()=>{startToken()}} className='login-btn'>Log in with Spotify</button>
            </div>
        </div>
    )
}

export default Login