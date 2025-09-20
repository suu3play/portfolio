import React, { useState, useRef, useEffect } from 'react';

interface ProjectImageProps {
    src?: string;
    fallback?: string;
    alt: string;
    className?: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({
    src,
    fallback = '/images/projects/project-placeholder.svg',
    alt,
    className = '',
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const [currentSrc, setCurrentSrc] = useState<string>(fallback);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        const currentImgRef = imgRef.current;
        if (currentImgRef) {
            observer.observe(currentImgRef);
        }

        return () => {
            if (currentImgRef) {
                observer.unobserve(currentImgRef);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView && src && !hasError) {
            setCurrentSrc(src);
        }
    }, [isInView, src, hasError]);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setCurrentSrc(fallback);
    };

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <img
                ref={imgRef}
                src={currentSrc}
                alt={alt}
                loading="lazy"
                onLoad={handleLoad}
                onError={handleError}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                role="img"
                aria-label={alt}
            />
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                </div>
            )}
        </div>
    );
};

export default ProjectImage;