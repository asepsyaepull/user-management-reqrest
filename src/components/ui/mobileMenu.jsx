import React from 'react';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-gray-900/50" onClick={onClose} />

            {/* Menu panel */}
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-800 shadow-xl">
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-lg font-medium text-gray-900 dark:text-white">Menu</span>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                    >
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <div className="px-4 py-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;