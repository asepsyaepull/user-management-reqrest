import React, { useState, useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { User, Settings, LogOut, Link } from 'lucide-react';
import useLogin from '../../hooks/useLogin';

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();
    const { handleLogout } = useLogin();

    useClickOutside(dropdownRef, () => setIsOpen(false));

    const handleLogoutClick = (e) => {
        e.preventDefault();
        handleLogout();
    };

    return (
        <div className="relative z-50" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt="Profile"
                    className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">John Doe</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
                    <a
                        href="#"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <User className="h-4 w-4 mr-2" />
                        Profile
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <Settings className="h-4 w-4 mr-2" />
                        Settings
                    </a>
                    <hr className="my-1 border-gray-200 dark:border-gray-700" />
                    <a
                        onClick={handleLogoutClick}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:cursor-pointer"
                    >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;