import React from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import useLogin from '../../hooks/useLogin';

const MobileProfileMenu = () => {
    const { handleLogout } = useLogin();

    const handleLogoutClick = () => {
        handleLogout();
    }

    return (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-4 py-3">
                <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt="Profile"
                    className="h-10 w-10 rounded-full object-cover"
                />
                <div className="ml-3">
                    <p className="text-base font-medium text-gray-800 dark:text-white">John Doe</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">john@example.com</p>
                </div>
            </div>

            <div className="mt-3 space-y-1">
                <a
                    href="#"
                    className="flex items-center px-4 py-2 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <User className="h-5 w-5 mr-3" />
                    Profile
                </a>
                <a
                    href="#"
                    className="flex items-center px-4 py-2 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <Settings className="h-5 w-5 mr-3" />
                    Settings
                </a>
                <a
                    onClick={handleLogoutClick}
                    className="flex items-center px-4 py-2 text-base text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    <LogOut className="h-5 w-5 mr-3" />
                    Sign out
                </a>
            </div>
        </div>
    );
};

export default MobileProfileMenu;