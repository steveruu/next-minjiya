/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable image optimization
    images: {
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 60, // 60 seconds minimum caching
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Enable compression
    compress: true,

    // Optimize production builds
    productionBrowserSourceMaps: false,

    // Improve caching
    onDemandEntries: {
        // Period (in ms) where the server will keep pages in the buffer
        maxInactiveAge: 25 * 1000,
        // Number of pages that should be kept simultaneously without being disposed
        pagesBufferLength: 2,
    },

    // Cache HTTP headers
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "https://minjiya.com",
                    },
                ],
            },
            {
                // Apply these headers to all static assets
                source: "/(.*)\\.(jpg|jpeg|png|gif|webp|svg|ico|woff2|css|js)$",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },

    // Optimize third-party scripts
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ["react-icons"],
    },
};

export default nextConfig;
