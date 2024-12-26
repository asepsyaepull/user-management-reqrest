import { Award, TrendingUp } from 'lucide-react';

export default function Features() {
    const features = [
        {
            icon: Award,
            title: "Fake Data",
            subtitle: "In Monetization",
            description: "No more tedious sample data creating, weve got it covered."
        },
        {
            icon: TrendingUp,
            title: "Always-onReal Responses",
            subtitle: "AI Strategy",
            description: "Develop with real response codes. GET, POST PUT & DELETE supported."
        },
        {
            icon: TrendingUp,
            title: "Always-on",
            subtitle: "AI Strategy",
            description: "24/7 free access in your development phases. Go Nuts"
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-olive-50 dark:bg-olive-900/20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {features.map((feature) => (
                    <div key={feature.title} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                        <feature.icon className="w-10 h-10 text-olive-600 dark:text-olive-400 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-olive-600 dark:text-olive-400 font-medium mb-2">
                            {feature.subtitle}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}