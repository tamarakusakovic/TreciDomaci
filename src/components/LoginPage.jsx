import React, { useState } from 'react'
import Input from './Input';

export default function LoginPage({ onLogin }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Login page</h2>
            <form onSubmit={e => {
                e.preventDefault();
                onLogin(email, password);
            }} >
                <Input label='Email' type='email' value={email} onChange={setEmail} />
                <Input label='Password' type='password' value={password} onChange={setPassword} />
                <button type='submit' className='form-control btn btn-secondary mt-2'>Login</button>
            </form>
        </div>
    )
}
