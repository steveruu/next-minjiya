import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://minjiya.com";
    const currentDate = new Date();

    // Define common pages
    const routes = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: "monthly" as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/drinkapp`,
            lastModified: currentDate,
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/stihni-to`,
            lastModified: currentDate,
            changeFrequency: "weekly" as const,
            priority: 0.9,
        },
    ];

    return routes;
}
