import { Search, Filter } from 'lucide-react';
import InputField from './InputField';

export default function HeaderHome() {
    return (
        <div className="flex items-center justify-between mb-8 gap-4">
            <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <InputField
                    icon={Search && <Search className="w-5 h-5" />}
                    type="text"
                    placeholder="Search name, email, etc"
                />
            </div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2 border border-olive-600 rounded-lg hover:bg-gray-50">
                        <Filter className="w-4 h-4" />
                        <span>All Roles</span>
                    </button>
                </div>
                <button className="px-4 py-2 bg-olive-700 text-white rounded-lg font-medium hover:bg-olive-800 transition-colors flex items-center gap-2">
                    <span className="text-lg">+</span>
                    Add Guide
                </button>
            </div>
        </div>
    );
}