export default function Resources() {
    const resources = [
        { title: "Pricing and packaging", number: "01" },
        { title: "Billing and payments", number: "02" },
        { title: "Industry trends", number: "03" },
        { title: "The SEI Report", number: "04" }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Still don't really get it. <span className="text-olive-600 dark:text-olive-400">Interesting</span>
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {resources.map((resource) => (
                        <div
                            key={resource.number}
                            className="group cursor-pointer"
                        >
                            <div className="text-sm text-olive-600 dark:text-olive-400 mb-2">{resource.number}</div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-olive-600 dark:group-hover:text-olive-400 transition-colors">
                                {resource.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}