/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://minjiya.com",
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: "weekly",
    priority: 0.7,
    exclude: ["/api/*", "/newshyshow.php/*", "/private/*"],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api", "/newshyshow.php", "/*.json$", "/private"],
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: ["/api", "/newshyshow.php"],
            },
        ],
        additionalSitemaps: ["https://minjiya.com/sitemap.xml"],
    },
    // Add your routes here
    transform: async (config, path) => {
        // Custom transformation for each URL
        // Priority based on the route path
        let priority = 0.7;

        if (path === "/") {
            priority = 1.0;
        } else if (
            path.startsWith("/drinkapp") ||
            path.startsWith("/stihni-to")
        ) {
            priority = 0.9;
        }

        // Return the default transform object
        return {
            loc: path, // URL
            changefreq: config.changefreq,
            priority,
            lastmod: new Date().toISOString(),
        };
    },
};
