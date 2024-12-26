import { LineChart, Shield, Zap } from 'lucide-react';

export default function Solutions() {
    const solutions = [
        {
            step: "01",
            title: "Reqres is a real API",
            description: "Reqres simulates real application scenarios. If you want to test a user authentication system, Reqres will respond to a successful login/register request with a token for you to identify a sample user, or with a 403 forbidden response to an unsuccessful login/registration attempt.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            step: "02",
            title: "Technical demos and tutorials",
            description: "If you're trying to demonstrate a front-end (JavaScript-based) concept, you don't really want the hassle of setting up an API, or even a server (especially during a live workshop or demo).",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
            step: "03",
            title: "Rapid prototyping of interfaces",
            description: "When prototyping a new interface, you just want an API there, with minimal setup effort involved. Normally, I'd point people, who aren't too familiar with backend programming, to Sailsjs which can auto-generate a REST-API for you from the command line.",
            image: "https://hlhrapid.com/wp-content/uploads/2023/11/rapid-prototyping-cost-breakdown.jpg"
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
                    Leading Solutions for <span className="text-olive-600 dark:text-olive-400">Business</span> Revenue
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution) => (
                        <div key={solution.step} className="group">
                            <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                                <img src={solution.image} alt={solution.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                                <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-olive-600 dark:text-olive-400">
                                    {solution.step}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{solution.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}