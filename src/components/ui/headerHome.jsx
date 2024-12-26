import { Search, Filter, Plus } from 'lucide-react';
import InputField from './InputField';

export default function HeaderHome() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <InputField
                    icon={Search && <Search className="w-5 h-5" />}
                    type="text"
                    placeholder="Search name, email, etc"
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
    );
}