import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <>
            <div id="dashboard" className="dashboard">
                <div className="px-8 py-4 flex justify-between items-center bg-white drop-shadow-xl">
                    <h1 className='font-bold text-slate-700'>Admin's Dashboard</h1>
                    <div className="h-[3rem] flex items-center gap-4">
                        <img
                            className="h-full rounded-full" 
                            src="../images/anonymouspfp.png" 
                            alt="image" />
                        <h3 className='text-slate-700'>Cristiano Ronaldo</h3>
                    </div>
                </div>

                <div className='px-8'>
                    <div className="flex justify-between items-center">
                        <h1 className='py-8 font-bold text-slate-700'>Welcome to Admin's Dashboard!</h1>
                        <h1 className='text-slate-700'>Khmer American School <span>&#47;</span> Admin <span>&#47;</span> <span className='text-slate-500'>Dashboard</span></h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;