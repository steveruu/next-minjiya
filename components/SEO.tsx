import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

interface SEOProps {
    title?: string;
    description?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: 'website' | 'article' | 'product';
    structuredData?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({
    title = 'Minjiya | Tvoříme webové a mobilní aplikace budoucnosti',
    description = 'Minjiya - Tvoříme webové a mobilní aplikace budoucnosti. Profesionální vývoj moderních webových stránek a mobilních aplikací s důrazem na design a uživatelskou zkušenost.',
    canonicalUrl = 'https://minjiya.com',
    ogImage = 'https://minjiya.com/mt.png',
    ogType = 'website',
    structuredData,
}) => {
    return (
        <>
            <Head>
                {/* Page metadata */}
                <title>{title}</title>
                <meta name="description" content={description} />

                {/* Canonical link */}
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content={ogType} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:locale" content="cs_CZ" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={canonicalUrl} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImage} />
            </Head>

            {/* Structured data for rich snippets */}
            {structuredData && (
                <Script
                    id="structured-data"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            )}
        </>
    );
};

export default SEO; 