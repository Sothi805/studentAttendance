import React from 'react';
import {Link} from 'react-router-dom'

const Login: React.FC = () => {
    return (
        <>
            <div id='login' className='login container'>
                <Link to='/admin'>Hello World</Link>
            </div>
        </>
    );
};

export default Login;