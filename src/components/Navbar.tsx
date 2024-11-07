import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>('/admin/dashboard'); // Default active link

    // Update active link on click
    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <div id="navbar" className="navbar relative pt-2 pb-4 h-full">
            <Link to={"/admin"} className="px-4 py-4 items-center flex gap-2">
                <img className="h-[3rem]" src="../KASlogo.png" alt="image" />
                <span className="font-bold text-white xl:text-xl text-sm">Khmer American School</span>
            </Link>
            <div className="py-4">
                <Link
                    to="/admin/dashboard"
                    onClick={() => handleLinkClick('/admin/dashboard')}
                    className={`px-4 py-4 flex text-white text-[1rem] gap-4 items-center ${activeLink === '/admin/dashboard' ? 'bg-slate-800' : ''}`}
                >
                    <img className="ml-2 w-[2rem]" src="../icons/dashboard.svg" alt="Icon" />
                    Dashboard
                </Link>
                <Link
                    to="/admin/classes"
                    onClick={() => handleLinkClick('/admin/classes')}
                    className={`px-4 py-4 flex text-white text-[1rem] gap-4 items-center ${activeLink === '/admin/classes' ? 'bg-slate-800' : ''}`}
                >
                    <img className="ml-2 w-[2rem]" src="../icons/class.svg" alt="Icon" />
                    Classes
                </Link>
                <Link
                    to="/admin/students"
                    onClick={() => handleLinkClick('/admin/students')}
                    className={`px-4 py-4 flex text-white text-[1rem] gap-4 items-center ${activeLink === '/admin/students' ? 'bg-slate-800' : ''}`}
                >
                    <img className="ml-2 w-[2rem]" src="../icons/student.svg" alt="Icon" />
                    Students
                </Link>
                <Link
                    to="/admin/teachers"
                    onClick={() => handleLinkClick('/admin/teachers')}
                    className={`px-4 py-4 flex text-white text-[1rem] gap-4 items-center ${activeLink === '/admin/teachers' ? 'bg-slate-800' : ''}`}
                >
                    <img className="ml-2 w-[2rem]" src="../icons/teacher.svg" alt="Icon" />
                    Teachers
                </Link>
                <Link
                    to="/admin/reports"
                    onClick={() => handleLinkClick('/admin/reports')}
                    className={`px-4 py-4 flex text-white text-[1rem] gap-4 items-center ${activeLink === '/admin/reports' ? 'bg-slate-800' : ''}`}
                >
                    <img className="ml-2 w-[2rem]" src="../icons/report.svg" alt="Icon" />
                    Read Reports
                </Link>
            </div>
            <div className="absolute bottom-0 w-full">
                <Link
                    to="/login"
                    onClick={() => handleLinkClick('/login')}
                    className={`px-4 py-4 flex text-white text-[1rem] gap-4 items-center ${activeLink === '/login' ? 'bg-slate-800' : ''}`}
                >
                    <img className="ml-2 w-[2rem]" src="../icons/leave.svg" alt="Icon" />
                    Leave
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
