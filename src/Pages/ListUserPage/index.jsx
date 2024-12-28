import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import useUser from '../../hooks/useUser';
import ProfileCard from '../../components/ui/profileCard';
import { mockUsers } from '../../data/mockUsers';
import { useNavigate } from 'react-router-dom';
import { Filter, Plus, Search } from 'lucide-react';
import InputField from '../../components/ui/InputField';

const ListUserPage = () => {
    const { users, pagination, totalPages, getData, handleNextPage, handlePrevPage } = useUser();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        if (users) {
            setFilteredUsers(
                users.filter(user =>
                    user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    user.email.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        }
    }, [searchQuery, users]);

    useEffect(() => {
        getData();
    }, [pagination]);

    const handleDetail = (user) => {
        navigate(`/detail-profile/${user.id}`);
    }
    if (!users) {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
            <span className="loading loading-dots loading-lg text-gray-900 dark:text-white"></span>
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
                <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                    <div className="relative flex-1 max-w-md w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <InputField
                            icon={Search && <Search className="w-5 h-5" />}
                            type="text"
                            placeholder="Search name, email, etc"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative w-full md:w-auto">
                            <button className="flex items-center gap-2 px-4 py-2 border border-olive-700 dark:border-white rounded-lg bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 text-gray-900 dark:text-white w-full md:w-auto">
                                <Filter className="w-4 h-4" />
                                <span>All Roles</span>
                            </button>
                        </div>
                        <button className="px-4 py-2 bg-olive-700 text-white rounded-lg font-medium hover:bg-olive-800 transition-colors flex items-center gap-2 w-full md:w-auto">
                            <Plus className="w-4 h-4" />
                            <span>Add User</span>
                        </button>
                    </div>
                </div>
                <div className="space-y-4">
                    {(filteredUsers.length > 0 ? filteredUsers : mockUsers).map((user) => (
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

export default ListUserPage;