export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-4 py-12 max-w-3xl">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-500 mb-8 text-center">
                        Last updated: {"9th December 2024"}
                    </p>

                    <div className="space-y-8">
                        <div className="prose prose-blue max-w-none">
                            <p className="text-gray-600 leading-relaxed">
                                Welcome to DrinkApp. This Privacy Policy
                                explains how we collect, use, disclose, and
                                safeguard your information when you use our
                                mobile application. Please read this policy
                                carefully. If you do not agree with the terms of
                                this privacy policy, please do not access the
                                application.
                            </p>
                        </div>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                                Information We Collect
                            </h2>
                            <p className="text-gray-600">
                                We may collect information about you in a
                                variety of ways. The information we may collect
                                via the app includes:
                            </p>
                            <ul className="space-y-4 list-none pl-0">
                                {[
                                    {
                                        title: "Personal Data",
                                        content:
                                            "Demographic and other personally identifiable information (such as your name and email address) that you voluntarily give to us when choosing to participate in various activities related to the app.",
                                    },
                                    {
                                        title: "Data from Social Networks",
                                        content:
                                            "User information from social networking sites, including your name, social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks.",
                                    },
                                    {
                                        title: "Mobile Device Access",
                                        content:
                                            "We may request access or permission to certain features from your mobile device, including your mobile device's storage, notifications, and other relevant features.",
                                    },
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="bg-blue-50 p-4 rounded-lg"
                                    >
                                        <strong className="text-blue-600 block mb-2">
                                            {item.title}:
                                        </strong>
                                        <span className="text-gray-600">
                                            {item.content}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                                Use of Your Information
                            </h2>
                            <p className="text-gray-600">
                                Having accurate information about you permits us
                                to provide you with a smooth, efficient, and
                                customized experience. Specifically, we may use
                                information collected about you via the app to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Create and manage your account</li>
                                <li>
                                    Deliver targeted advertising, coupons,
                                    newsletters, and other information regarding
                                    promotions
                                </li>
                                <li>Enable user-to-user communications</li>
                                <li>
                                    Increase the efficiency and operation of the
                                    app
                                </li>
                                <li>
                                    Monitor and analyze usage and trends to
                                    improve your experience
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                                Contact Us
                            </h2>
                            <p className="text-gray-600">
                                If you have questions or comments about this
                                Privacy Policy, please contact us at:
                            </p>
                            <a
                                href="mailto:support@drinkapp.com"
                                className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                            >
                                support@minjiya.com
                            </a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
