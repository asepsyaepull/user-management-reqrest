import { Link } from 'react-router-dom';
import React from 'react';

const getMenuItems = () => {
    return [
        { label: 'Home', href: '/' },
        { label: 'List User', href: '/list-user' },
    ];
};

const MobileNavigation = () => {
    const menuItems = getMenuItems();

    return (
        <div className="space-y-1">
            {menuItems.map((item) => (
                <Link
                    key={item.label}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
};

export default MobileNavigation;