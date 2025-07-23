import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: ["/"],
                disallow: ["/api/", "/*.json$", "/private/"],
            },
            {
                userAgent: "Googlebot",
                allow: ["/"],
                disallow: ["/api/"],
            },
            {
                userAgent: "Bingbot",
                allow: ["/"],
                disallow: ["/api/"],
            },
            {
                userAgent: "ChatGPT-User",
                allow: ["/"],
                disallow: ["/api/"],
            },
            {
                userAgent: "ClaudeBot",
                allow: ["/"],
                disallow: ["/api/"],
            },
            {
                userAgent: "PerplexityBot",
                allow: ["/"],
                disallow: ["/api/"],
            },
        ],
        sitemap: "https://minjiya.com/sitemap.xml",
        host: "https://minjiya.com",
    };
}
