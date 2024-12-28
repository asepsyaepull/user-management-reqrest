import React, { useState } from 'react';
import { User, Settings, LogOut, X } from 'lucide-react';
import useLogin from '../../hooks/useLogin';

const MobileProfileMenu = () => {
    const { handleLogout } = useLogin();
    const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);


    const handleLogoutClick = () => {
        setIsLogoutPopupOpen(true);
    };

    const confirmLogout = () => {
        handleLogout();
        window.location.reload();
        const refreshLink = () => {
            window.location.href = window.location.href;
        };
        refreshLink();
    };

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
                {/* Logout Popup */}
                {isLogoutPopupOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-sm p-6 relative animate-fade-in">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsLogoutPopupOpen(false)}
                                className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            {/* Icon */}
                            <div className="mb-4 bg-olive-50 dark:bg-olive-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                                <LogOut className="w-6 h-6 text-olive-600 dark:text-olive-400" />
                            </div>
                            {/* Content */}
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Logout Confirmation
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Are you sure you want to logout from your account?
                            </p>
                            {/* Buttons */}
                            <div className="flex gap-3">
                                <button
                                    onClick={confirmLogout}
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg transition-colors"
                                >
                                    Yes, Logout
                                </button>
                                <button
                                    onClick={() => setIsLogoutPopupOpen(false)}
                                    className="flex-1 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-lg transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileProfileMenu;