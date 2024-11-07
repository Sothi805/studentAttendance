import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <div id="navbar" className="navbar px-2 pt-2 pb-4">
            <Link to={"/admin"} className='items-center justify-center flex gap-2'>
                <img
                    className='h-[3rem]'
                    src='KASlogo.png'
                    alt='image'
                />
                <a className='font-bold text-lg text-white'>Khmer American School</a>
            </Link>
        </div>
    );
};

export default Navbar;
