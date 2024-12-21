import Image from 'next/image'
import { FaWater, FaBell, FaApple, FaDownload, FaAndroid } from 'react-icons/fa'
import { IoIosFlash } from 'react-icons/io'

export default function DrinkApp() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-blue-100">
                <div className="container mx-auto px-4">
                    <div className="flex items-center h-16">
                        <div className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                            DrinkApp <span>💧</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 pt-32 pb-32">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-blue-900">
                            Stay Hydrated, Stay Healthy
                        </h1>
                        <p className="text-xl text-blue-700">
                            Track your daily water intake, get timely reminders, and maintain a healthy lifestyle with DrinkApp.
                        </p>
                        <a
                            href="#download"
                            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
                        >
                            <FaDownload />
                            <span>Download</span>
                        </a>
                    </div>
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <Image
                            src="/images/drinkapp_2.png"
                            alt="DrinkApp Interface"
                            width={400}
                            height={800}
                            className="mx-auto drop-shadow-2xl"
                        />
                    </div>
                </div>
            </section>
            {/* Features Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-16">
                        Everything you need to stay hydrated
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <FeatureCard
                            icon={<FaWater className="text-4xl text-blue-500 mx-auto" />}
                            title="Track Water Intake"
                            description="Easily log your daily water consumption with just a tap"
                        />
                        <FeatureCard
                            icon={<FaBell className="text-4xl text-blue-500 mx-auto" />}
                            title="Smart Reminders"
                            description="Get personalized reminders based on your daily routine"
                        />
                        <FeatureCard
                            icon={<IoIosFlash className="text-4xl text-blue-500 mx-auto" />}
                            title="Calorie Tracking"
                            description="Monitor your beverage caloric intake effortlessly"
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-blue-50 py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-blue-600">20+</div>
                            <div className="text-blue-900">Active Users</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-blue-600">1K+</div>
                            <div className="text-blue-900">Glasses Tracked</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-blue-600">5.0★</div>
                            <div className="text-blue-900">App Store Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20" id="download">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Start Your Hydration Journey Today
                    </h2>
                    <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
                        Join millions of users who have improved their daily water intake with DrinkApp.
                    </p>
                    <div className="flex flex-row gap-2 justify-center items-center">
                        <a
                            href="https://apps.apple.com/us/app/drinkapp-by-drinkup/id6739220265"
                            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
                            target="_blank"
                        >
                            <FaApple className="text-2xl" />
                            <span>Download for iOS</span>
                        </a>
                        <a
                            href="https://minjiya.com/bin/drinkapp.apk"
                            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
                            target="_blank"
                        >
                            <FaAndroid className="text-2xl" />
                            <span>Download for Android</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}

function FeatureCard({ icon, title, description }: {
    icon: React.ReactNode
    title: string
    description: string
}) {
    return (
        <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
            <p className="text-blue-700">{description}</p>
        </div>
    )
}
