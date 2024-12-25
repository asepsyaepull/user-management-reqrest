import React from 'react';

const MobileNavigation = () => {
    const menuItems = [
        { label: 'Tour Guide', href: '/' },
    ];

    return (
        <div className="space-y-1">
            {menuItems.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    {item.label}
                </a>
            ))}
        </div>
    );
};

export default MobileNavigation;