import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import useUser from '../../hooks/useUser';
import HeaderHome from '../../components/ui/headerHome';
import ProfileCard from '../../components/ui/profileCard';
import { mockUsers } from '../../data/mockUsers';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const { users, pagination, totalPages, getData, handleNextPage, handlePrevPage } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [pagination]);

    const handleDetail = (user) => {
        navigate(`/detail-profile/${user.id}`);
    }

    return (
        <div>
            <Navbar />
            {/*  Main Content */}
            <div className='max-w-7xl mx-auto my-10 '>
                <h1 className="text-2xl font-bold mb-4">Guides</h1>
                <HeaderHome />
                <div className="space-y-4">
                    {(users.length > 0 ? users : mockUsers).map((user) => (
                        <ProfileCard onClick={() => handleDetail(user)} key={user.id} user={user} />
                    ))}
                </div>
            </div>
            <nav className="flex max-w-7xl mx-auto justify-end mt-4 mb-20">
                    <ul className="inline-flex items-center -space-x-px gap-2">
                        <li>
                            <button
                                onClick={handlePrevPage}
                                disabled={pagination.page === 1}
                                className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg ${pagination.page === 1 ? 'bg-gray-700 cursor-not-allowed' : 'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                            >
                                Previous
                            </button>
                        </li>
                        <li>
                            <span className="px-3 py-2 leading-tight text-gray-500 bg-white dark:text-gray-400">
                                Page {pagination.page}
                            </span>
                        </li>
                        <li>
                            <button
                                onClick={handleNextPage}
                                disabled={pagination.page >= totalPages}
                                className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg ${pagination.page >= totalPages ? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white'}`}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
            </nav>
        </div>
    );
};

export default HomePage;