// src/routes/ShowRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import LayoutRoutes from './LayoutRoute';

const ShowRoutes: React.FC = () => {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin/*' element={<LayoutRoutes/>} />
        </Routes>
    );
};

export default ShowRoutes;
