import React, {useState} from "react";
import {signIn} from './apiCall/index'


const Login = ({setToken}) => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = async(event) => {
        try {
            event.preventDefault()
            const result = await signIn(userName, password)
            console.log(result)
            if(result.message == 'Success') {
                window.localStorage.setItem('token', result.token)
                setToken(result.token)
            }
        }catch(error){
            throw error
        }
    }
    return (
        <div className='signupPage'>
        <img className='signupImage' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Chon23.jpg/1200px-Chon23.jpg'/>
        <div className='signupContainer'>
        <h2>Login</h2>
        <p>Be sure to check out the office chon website! 
        <a href='https://chon.merchdirect.com/'>Chon Merch</a>
        </p>
        <p className='notAffiliated'>This website is in no way affiliated with Chon or their affiliates. This is only a fan website.</p>
        <form className='submitForm' onSubmit={handleSubmit}>
        <input className='signup username'  onChange={(event) => setUsername(event.target.value)}value={userName} type='username'placeholder='Username'/>
        <input className='signup password'  onChange={(event) => setPassword(event.target.value)} value={password} type='password'placeholder='Password'/>
        <button className='signup button' type='submit'>Submit!</button>
        </form>
        </div>
    </div>
    )
}


export default Login