import React from 'react';
import logo from "../assets/logo.png";
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='py-4 flex flex-col gap-2.5 items-center text-accent'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='font-semibold'>{format(new Date(), "EEEE, MMMM d, yyyy")}</p>
        </div>
    );
};

export default Header;