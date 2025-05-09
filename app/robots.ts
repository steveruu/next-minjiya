import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: ["/"],
                disallow: [
                    "/api/",
                    "/newshyshow.php/",
                    "/*.json$",
                    "/private/",
                ],
            },
            {
                userAgent: "Googlebot",
                allow: ["/"],
                disallow: ["/api/", "/newshyshow.php/"],
            },
        ],
        sitemap: "https://minjiya.com/sitemap.xml",
        host: "https://minjiya.com",
    };
}
