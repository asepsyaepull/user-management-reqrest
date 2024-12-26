import React from 'react';
import { MailOpen, Phone } from 'lucide-react';
import { mockUsers } from '../../data/mockUsers';

const ProfileCard = ({ user, onClick }) => {
    // Cari pengguna yang sesuai di mockUsers berdasarkan user.id
    const mockUser = mockUsers.find(mockUser => mockUser.id === user.id);

    return (
        <div
            className="flex flex-col md:flex-row container mx-auto justify-between p-4 bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 shadow rounded-lg hover:shadow-lg transition-colors duration-300 cursor-pointer"
            onClick={onClick}
        >
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <img
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                    className="object-cover w-16 h-16 rounded-full"
                />
                <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {user.first_name} {user.last_name}
                    </h2>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-20 text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <MailOpen className="w-4 h-4" />
                            <span>{user.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>{mockUser ? mockUser.phone : 'N/A'}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-fit justify-center md:justify-end">
                <span className="px-4 py-2 bg-olive-50 dark:bg-olive-900/30 text-olive-700 dark:text-olive-300 rounded-full text-sm">
                    {mockUser ? mockUser.role : 'N/A'}
                </span>
            </div>
        </div>
    );
}

export default ProfileCard;