import React, {useState} from 'react'
import {createUser} from './apiCall/index'

const Signup = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    

    const handleSubmit = async(event) => {
    event.preventDefault()
    if(password !== password2) {
    console.log("Passwords don't match")
    }
    if(userName === '' || password ==='' || password2 === '') {
        console.log('Please fill in all the fields')
    }
    await createUser(userName, password)
    }
    return (
        <div className='signupPage'>
            <img className='signupImage' src='https://i.imgur.com/s2qaXk5.jpg'/>
            <div className='signupContainer'>
            <h2>Signup!</h2>
            <p>Be sure to check out the office chon website! 
            <a href='https://chon.merchdirect.com/'> Chon Merch</a>
            </p>
            <p className='notAffiliated'>This website is in no way affiliated with Chon or their affiliates. This is only a fan website.</p>
            <form className='submitForm' onSubmit={handleSubmit}>
            <input className='signup username' onChange={(event) => setUserName(event.target.value)}value={userName} type='username'placeholder='Username'/>
            <input className='signup password' onChange={(event) => setPassword(event.target.value)} value={password} type='password'placeholder='Password'/>
            <input className='signup password2' onChange={(event) => setPassword2(event.target.value)} value={password2} type='password' placeholder='Confirm password'/>
            <button className='signup button' type='submit'>Submit!</button>
            </form>
            </div>
        </div>
    )
}


export default Signup