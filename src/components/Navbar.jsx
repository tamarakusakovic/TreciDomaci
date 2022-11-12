import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar({ user, onLogout }) {
    return (
        <nav className="navbar navbar-expand-lg border navbar-dark sticky-top bg-primary">
            <div className='text-white' style={{ fontSize: '18px', paddingLeft: '10px' }}>
                {
                    user ? (user.name) : 'Pharmacy'
                }
            </div>
            <div className="navbar-collapse collapse">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item mx-auto">
                        <NavLink className='nav-link' to='/'>{user ? 'Laboratories' : 'Login'}</NavLink>
                    </li>
                    {
                        user && (
                            <li className="nav-item mx-auto">
                                <NavLink className='nav-link' to='/analysis'>Analysis</NavLink>
                            </li>
                        )
                    }
                </ul>
                {
                    user && (
                        <button className='btn btn-secondary mr-3'>Logout</button>
                    )
                }
            </div>
        </nav>
    )
}
