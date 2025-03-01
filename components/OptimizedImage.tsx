'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
    lowQualitySrc?: string;
    className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    lowQualitySrc,
    className = '',
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative ${className}`} style={{ overflow: 'hidden' }}>
            {lowQualitySrc && (
                <Image
                    src={lowQualitySrc}
                    alt={alt}
                    fill
                    className={`transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
                    style={{ objectFit: 'cover' }}
                    {...props}
                />
            )}
            <Image
                src={src}
                alt={alt}
                className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsLoaded(true)}
                {...props}
            />
        </div>
    );
};

export default OptimizedImage; 