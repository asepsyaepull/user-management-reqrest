import { Leaf } from "lucide-react";

export default function Footer() {
    const sections = [
        {
            title: "Product",
            links: ["Features", "Pricing", "Case Studies", "Reviews"]
        },
        {
            title: "Company",
            links: ["About", "Careers", "Press", "News"]
        },
        {
            title: "Resources",
            links: ["Blog", "Newsletter", "Events", "Help Center"]
        },
        {
            title: "Policies",
            links: ["Terms", "Privacy", "Security", "Status"]
        }
    ];

    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex items-center space-x-2">
                            <Leaf className="h-8 w-8 text-olive-700 dark:text-olive-600" />
                            <span className="font-bold text-xl text-gray-900 dark:text-white">Olive</span>
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                            Revolutionizing revenue management for modern businesses.
                        </p>
                    </div>
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-olive-600 dark:hover:text-olive-400">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-center text-gray-600 dark:text-gray-400">
                        © {new Date().getFullYear()} Olive. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}