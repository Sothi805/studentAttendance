// src/routes/AdminRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Dashboard from '../pages/Dashboard';

const LayoutRoutes: React.FC = () => {
    return (
        <Layout>
            <Routes>
                <Route index element={<Dashboard/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </Layout>
    );
};

export default LayoutRoutes;
