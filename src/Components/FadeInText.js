'use client';
import { useRef, useEffect, useState } from 'react';

const FadeInText = ({ children }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Reset the animation to allow re-trigger
                    el.classList.remove('fade-in-up');
                    void el.offsetWidth; // Force reflow
                    el.classList.add('fade-in-up');
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (el) {
            observer.observe(el);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="mt-4">
            <div className={isVisible ? 'fade-in-up' : ''}>
                {children}
            </div>
        </div>
    );
};

export default FadeInText;
