export default function Testimonials() {
    const testimonials = [
        {
            quote: "Reqres is an excellent learning tool.I use it to learn about API requests and JSON data manipulation.Highly recommended for beginners!",
            author: "Karl Magnussen",
            role: "CFO at TechFlow",
            rating: 5
        },
        {
            quote: "As a QA tester, Reqres helps me simulate various API scenarios without relying on the backend team. It's a huge time-saver and improves testing efficiency.",
            author: "Sarah Winters",
            role: "COO at DataStream",
            rating: 5
        },
        {
            quote: "The simplicity of Reqres API is its strength. I can prototype ideas quickly without the need for a complex backend setup. It's perfect for rapid development.",
            author: "Jane Doe",
            role: "COO at DLockTech",
            rating: 5
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-olive-600">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-12">
                    Tech And Expertise To Drive Innovation
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl">
                            <div className="flex gap-1 justify-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-olive-400">★</span>
                                ))}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{testimonial.quote}</p>
                            <div className="font-medium">
                                <p className="text-gray-900 dark:text-white">{testimonial.author}</p>
                                <p className="text-olive-600 dark:text-olive-400">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}