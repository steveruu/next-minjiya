import Image from "next/image";

export default function DrinkApp() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                            Track Your Hydration Journey
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Stay healthy and hydrated with DrinkApp. Monitor
                            your daily water intake, set reminders, and achieve
                            your wellness goals.
                        </p>
                        <div className="space-x-4">
                            <a
                                className="bg-blue-600 text-white px-8 py-3 rounded-full 
                hover:bg-blue-700 transition duration-300"
                                href="#download"
                            >
                                Download Now
                            </a>
                            <a
                                className="border-2 border-blue-600 text-blue-600 px-8 py-3 
                rounded-full hover:bg-blue-50 transition duration-300"
                                href="#why-choose-drinkapp"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="relative h-[400px] md:h-[600px] p-4">
                            <div className="relative h-full w-full drop-shadow-2xl rounded-[2.5rem] p-4 md:p-6">
                                <Image
                                    src="/images/drinkapp_2.png"
                                    alt="DrinkApp Interface"
                                    fill
                                    className="object-contain p-2 md:p-4"
                                    priority
                                    style={{
                                        borderRadius: "2rem",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-white py-16">
                <div
                    className="container mx-auto px-4"
                    id="why-choose-drinkapp"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                        Why Choose DrinkApp?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="p-6 bg-blue-50 rounded-xl">
                            <div
                                className="w-12 h-12 bg-blue-600 rounded-full flex items-center 
                justify-center mb-4"
                            >
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Smart Reminders
                            </h3>
                            <p className="text-gray-600">
                                Never forget to stay hydrated with our
                                intelligent reminder system.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-6 bg-blue-50 rounded-xl">
                            <div
                                className="w-12 h-12 bg-blue-600 rounded-full flex items-center 
                justify-center mb-4"
                            >
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Track Progress
                            </h3>
                            <p className="text-gray-600">
                                Monitor your daily, weekly, and monthly
                                hydration patterns with detailed analytics.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-6 bg-blue-50 rounded-xl">
                            <div
                                className="w-12 h-12 bg-blue-600 rounded-full flex items-center 
                justify-center mb-4"
                            >
                                <svg
                                    className="w-6 h-6 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4v16m8-8H4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Personalized Goals
                            </h3>
                            <p className="text-gray-600">
                                Set and achieve custom hydration goals based on
                                your lifestyle and needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Start Your Hydration Journey Today
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of users who have improved their daily
                        hydration habits with DrinkApp.
                    </p>
                    <a
                        className="bg-white text-blue-600 px-8 py-3 rounded-full 
            hover:bg-blue-50 transition duration-300 text-lg font-semibold"
                        href="#download"
                    >
                        Download DrinkApp
                    </a>
                </div>
            </div>
        </div>
    );
}
