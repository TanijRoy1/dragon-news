import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import MyContainer from '../components/MyContainer';

const AuthLayout = () => {
    return (
        <MyContainer className={`flex flex-col min-h-screen`}>
            <NavBar></NavBar>
            <div className='flex justify-center items-center flex-1'>
                <Outlet></Outlet>
            </div>
        </MyContainer>
    );
};

export default AuthLayout;