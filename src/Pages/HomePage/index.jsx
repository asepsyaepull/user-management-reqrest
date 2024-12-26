import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import useUser from '../../hooks/useUser';
import HeaderHome from '../../components/ui/headerHome';
import ProfileCard from '../../components/ui/profileCard';
import { mockUsers } from '../../data/mockUsers';
import { useNavigate } from 'react-router-dom';

const ListUser = () => {
    const { users, pagination, totalPages, getData, handleNextPage, handlePrevPage } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [pagination]);

    const handleDetail = (user) => {
        navigate(`/detail-profile/${user.id}`);
    }
    if (!users) {
        return (
            <div className="flex h-screen items-center justify-center">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        );
    }

    return (
        <div className='bg-gray-50 dark:bg-gray-900 transition-colors min-h-screen'>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            {/* Main Content */}
            <div className='max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8'>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Guides</h1>
                <HeaderHome />
                <div className="space-y-4">
                    {(users.length > 0 ? users : mockUsers).map((user) => (
                        <ProfileCard onClick={() => handleDetail(user)} key={user.id} user={user} />
                    ))}
                </div>
            </div>
            <nav className="flex max-w-7xl mx-auto justify-end pt-4 pb-20 px-4 sm:px-6 lg:px-8">
                <ul className="inline-flex items-center -space-x-px gap-2">
                    <li>
                        <button
                            onClick={handlePrevPage}
                            disabled={pagination.page === 1}
                            className={`px-3 py-2 ml-0 leading-tight bg-gray-50 dark:bg-gray-900 transition-colors rounded-lg ${pagination.page === 1 ? 'text-gray-200 dark:text-gray-700 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 cursor-not-allowed' : 'hover:bg-olive-50 border border-olive-600  text-olive-600 dark:text-olive-400 dark:hover:bg-olive-900/30 dark:hover:bg-gray-700 dark:hover:text-olive-500'}`}
                        >
                            Previous
                        </button>
                    </li>
                    <li>
                        <span className="px-3 py-2 leading-tight text-gray-500 ">
                            Page {pagination.page}
                        </span>
                    </li>
                    <li>
                        <button
                            onClick={handleNextPage}
                            disabled={pagination.page >= totalPages}
                            className={`px-3 py-2 ml-0 leading-tight bg-gray-50 dark:bg-gray-900 transition-colors rounded-lg ${pagination.page >= totalPages ? 'text-gray-200 dark:text-gray-700 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 cursor-not-allowed' : 'hover:bg-olive-50 border border-olive-600  text-olive-600 dark:text-olive-400 dark:hover:bg-olive-900/30 dark:hover:bg-gray-700 dark:hover:text-olive-500'}`}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default ListUser;