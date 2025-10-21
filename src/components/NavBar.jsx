import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from "../assets/user.png";
import AuthContext from '../Context/AuthContext';
import 'animate.css';

const NavBar = () => {
    const {user, signOutUser} = use(AuthContext);
    const handleSignOut = () => {
        signOutUser()
         .then(() => {})
         .catch(error => {
            console.log(error);
         })
    }
const [play, setPlay] = useState(false);
    return (
        <div className='flex items-center justify-between my-5'>
            <button onClick={() => setPlay(true)}>Play</button>
            <div className={`font-semibold text-blue-500 text-lg ${play && "animate__animated animate__swing"}`}>{user && user.displayName}</div>
            <div className='flex gap-3 text-accent'>
                <NavLink to={`/`} className={`MyNavLink hover:text-black text-lg border-b-2 border-white`}>Home</NavLink>
                <NavLink to={`/about`} className={`MyNavLink hover:text-black text-lg border-b-2 border-white`}>About</NavLink>
                <NavLink to={`/career`} className={`MyNavLink hover:text-black text-lg border-b-2 border-white`}>Career</NavLink>
            </div>
            <div className="flex gap-3">
                <img className='w-9 border rounded-full object-cover border-gray-300 bg-gray-100' src={user? user.photoURL:userImg} alt="" />
                {
                    user ?
                    <button onClick={handleSignOut} className='btn btn-secondary'>Sign Out</button>
                    : <Link to={`/auth/login`} className='btn btn-primary'>Login</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;