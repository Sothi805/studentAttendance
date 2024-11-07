// src/routes/AdminRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../pages/Home';

const LayoutRoutes: React.FC = () => {
    return (
        <Layout>
            <Routes>
                <Route index element={<Home/>}/>
            </Routes>
        </Layout>
    );
};

export default LayoutRoutes;
