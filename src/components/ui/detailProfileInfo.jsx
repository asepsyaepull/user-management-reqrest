import { Briefcase, Users, Clock, Activity } from 'lucide-react';

export default function DetailProfileInfo() {
    const info = [
        { icon: Briefcase, label: 'Work Experience', value: '10 years' },
        { icon: Users, label: 'Experience Level', value: 'Senior' },
        { icon: Clock, label: 'Job Type', value: 'Full Time' },
        { icon: Activity, label: 'Job Status', value: 'Active' }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-24 px-4 sm:px-8">
            {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm transition-colors">
                    <div className="flex items-start gap-3">
                        <div className="p-2 bg-olive-50 dark:bg-olive-900/30 rounded-lg">
                            <Icon className="w-5 h-5 text-olive-600 dark:text-olive-300" />
                        </div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{label}</p>
                            <p className="font-semibold text-gray-900 dark:text-white">{value}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}