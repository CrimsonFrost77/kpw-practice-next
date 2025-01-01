import React, { useState, useEffect } from 'react';

interface ImageTextWrapperProps {
    imageUrl?: string;
    imagePosition?: 'left' | 'right';
    imageWidth?: string;
    spacing?: string;
    children: React.ReactNode;
}

const ImageTextWrapper = ({
    imageUrl = "/api/placeholder/400/300",
    imagePosition = "left",
    imageWidth = "40",
    spacing = "4",
    children
}: ImageTextWrapperProps) => {
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Switch to vertical layout on mobile devices
    const isMobile = windowWidth < 768;

    const containerClasses = [
        'flex',
        isMobile ? 'flex-col' : 'flex-row',
        `gap-${spacing}`,
        'w-full',
        'items-start',
        imagePosition === 'right' && !isMobile ? 'flex-row-reverse' : ''
    ].filter(Boolean).join(' ');

    const imageClasses = [
        isMobile ? 'w-full' : `w-${imageWidth}`,
        'rounded-lg',
        'shadow-md',
        'object-cover'
    ].join(' ');

    const textClasses = [
        'flex-1',
        'text-gray-700',
        'leading-relaxed',
        isMobile ? 'mt-4' : ''
    ].filter(Boolean).join(' ');

    return (
        <div className={containerClasses}>
            <img
                src={imageUrl}
                alt="Content image"
                className={imageClasses}
            />
            <div className={textClasses}>
                {children}
            </div>
        </div>
    );
};

// Example usage
const ExamplePage = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <ImageTextWrapper
                imageUrl="/api/placeholder/400/300"
                imagePosition="left"
                imageWidth="40"
                spacing="6"
            >
                <h2 className="text-2xl font-bold mb-4">
                    Kaliakair Municipality
                </h2>
                <p className="mb-4">
                    Kaliakair Municipality, established in 2003, stands as a 
                    testament to urban development in the Gazipur District. 
                    Our municipality has grown from its humble beginnings to 
                    become a vital center of commerce and community life.
                </p>
                <p className="mb-4">
                    Located at a strategic point in Gazipur District, Kaliakair 
                    Municipality serves as an important hub connecting various 
                    major urban centers. The municipality location has played a 
                    crucial role in its development as both a residential and 
                    commercial center.
                </p>
                <p>
                    The jurisdiction of Kaliakair Municipality covers various 
                    important areas including residential zones, commercial 
                    districts, and industrial areas. Each ward has been 
                    carefully planned to ensure balanced development and 
                    efficient service delivery to all residents.
                </p>
            </ImageTextWrapper>
        </div>
    );
};

export default ExamplePage;