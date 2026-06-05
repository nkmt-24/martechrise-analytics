import { aboutContent } from "./content";

export default function AboutSection() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            {aboutContent.title}
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                            {aboutContent.description}
                        </p>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 italic">
                            &quot;{aboutContent.mission}&quot;
                        </p>
                    </div>
                    <div className="md:w-1/2 aspect-video bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                        <span className="text-gray-400">About Image Placeholder</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
