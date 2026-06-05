import { servicesContent } from "./content";

export default function ServicesSection() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        {servicesContent.title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        {servicesContent.description}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicesContent.services.map((service) => (
                        <div
                            key={service.id}
                            className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
