import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Starter.scss'
import { generateAcessToken } from '../../assets/helpers'

const Starter = () => {
    const [user, setUser] = useState('')

    const navigate = useNavigate()

    const toggle = async () => {
        if (user === "") {
          const userData = await generateAcessToken()
          setUser(userData)
        }
    }

    useEffect(() => {
    
      toggle()

    },);


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