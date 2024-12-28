import React, { useState } from 'react';
import { Leaf, Menu } from 'lucide-react';
import Navigation from '../ui/navigation';
import DarkModeToggle from '../ui/DarkModeTogle';
import ProfileDropdown from '../ui/profileDropDown';
import MobileMenu from '../ui/MobileMenu';
import MobileNavigation from '../ui/MobileNavigationMenu';
import MobileProfileMenu from '../ui/MobileProfileMenu';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const token = localStorage.getItem("access_token");
    

    return (
        <>
            <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-2">
                            <Leaf className="h-8 w-8 text-olive-700 dark:text-olive-600" />
                            <span className="font-bold text-xl text-gray-900 dark:text-white">Olive</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <Navigation />
                            <DarkModeToggle />
                            {token ? (
                                <ProfileDropdown />
                            ) : (
                                <Link to="/login" className="px-8 py-2 bg-olive-600 hover:bg-olive-700 text-white rounded-lg transition-colors">
                                    Login
                                </Link>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                <div className="flex flex-col h-full">
                    <div className="flex-1">
                        <MobileNavigation />
                    </div>
                    <div className="mt-auto">
                        <div className="px-4 py-3">
                            <DarkModeToggle />
                        </div>
                        <MobileProfileMenu />
                    </div>
                </div>
            </MobileMenu>
        </>
    );
};

export default Navbar;