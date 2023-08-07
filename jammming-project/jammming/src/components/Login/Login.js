import React from 'react'
import './Login.scss'
import { startGenerate } from '../../assets/helpers'

const Login = () => {

    const startToken = () => {
        startGenerate()
    }

    return (
        <div className='containerLogin'>
            <div className='box-login'>
                <p>To make a Playlist, you need to login.</p>
                <button onClick={()=>{startToken()}} className='login-btn'>Log in with Spotify</button>
            </div>
        </div>
    )
}

export default Login