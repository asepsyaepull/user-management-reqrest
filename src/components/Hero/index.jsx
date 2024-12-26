import { Zap, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 text-olive-600 dark:text-olive-400 mb-4">
                    <Zap className="w-5 h-5" />
                    <span className="font-medium">All Monetization</span>
                    <Sparkles className="w-5 h-5" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                    Models In <span className="text-olive-600 dark:text-olive-400">One</span> Solution
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Welcome to DemoApp, a platform that showcases the power of API integration!
                    We display real-time data taken directly from https://reqres.in/
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onClick={() => navigate('/login')} className="w-full sm:w-auto px-8 py-3 bg-olive-600 hover:bg-olive-700 text-white rounded-lg transition-colors">
                        Try It Free
                    </button>
                    <button className="w-full sm:w-auto px-8 py-3 border border-olive-600 text-olive-600 dark:text-olive-400 hover:bg-olive-50 dark:hover:bg-olive-900/30 rounded-lg transition-colors">
                        Watch Demo
                    </button>
                </div>
            </div>
        </section>
    );
}