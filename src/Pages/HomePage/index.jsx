import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import useUser from '../../hooks/useUser';

const HomePage = () => {
    const { users, pagination, totalPages, getData, handleNextPage, handlePrevPage } = useUser();

    useEffect(() => {
        getData();
    }, [pagination]);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">User List</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Array.isArray(users) && users.map((user) => (
                        <div key={user.id} className="p-4 border rounded shadow">
                            <img src={user.avatar} alt={user.first_name} className="w-24 h-24 rounded-full mx-auto" />
                            <h2 className="text-xl text-center mt-2">{user.first_name} {user.last_name}</h2>
                            <p className="text-center">{user.email}</p>
                            <div>
                                <Link to={`/detail-profile/${user.id}`} className="block text-center mt-2 text-blue-500">View Profile</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <nav className="flex justify-end mt-4">
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
        </div>
    );
};

export default HomePage;