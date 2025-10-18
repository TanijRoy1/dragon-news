import React from 'react';
import { NavLink } from 'react-router';
import userImg from "../assets/user.png";

const NavBar = () => {
    return (
        <div className='flex items-center justify-between my-5'>
            <div></div>
            <div className='flex gap-3 text-accent'>
                <NavLink to={`/`} className={`MyNavLink hover:text-black text-lg border-b-2 border-white`}>Home</NavLink>
                <NavLink to={`/about`} className={`MyNavLink hover:text-black text-lg border-b-2 border-white`}>About</NavLink>
                <NavLink to={`/career`} className={`MyNavLink hover:text-black text-lg border-b-2 border-white`}>Career</NavLink>
            </div>
            <div className="flex gap-3">
                <img src={userImg} alt="" />
                <button className='btn btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default NavBar;