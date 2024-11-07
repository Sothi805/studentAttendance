// src/components/Layout.tsx
import React from 'react';
import Navbar from '../components/Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='flex h-[100vh]'>
            <div className=' basis-1/5 bg-slate-900'>
                <Navbar/>
            </div>
            <div className="basis-4/5">
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Layout;
