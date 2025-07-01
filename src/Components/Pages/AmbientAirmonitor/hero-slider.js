'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeInText from "@/Components/FadeInText";


export default function TabSlider({ tabs = [] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('fade-in');

    useEffect(() => {
        const interval = setInterval(() => {
            changeTab((activeIndex + 1) % tabs.length);
        }, 9000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    // Fade transition logic
    const changeTab = (index) => {
        setFadeClass('fade-out');
        setTimeout(() => {
            setActiveIndex(index);
            setFadeClass('fade-in');
        }, 200); // matches fade-out duration
    };

    const handleTabClick = (index) => {
        if (index !== activeIndex) {
            changeTab(index);
        }
    };

    const tab = tabs[activeIndex];

    return (
        <div className="tab-slider text-center">
            {/* Tab Content with fade animation */}
            <div className={`tab-content-wrapper ${fadeClass}`}>
                <div className='hero-img'>
                    <Image
                        src={tab.image}
                        width={1000}
                        height={600}
                        alt={tab.label}
                    />
                </div>
                <div className='hero-content'>
                    <FadeInText>
                        <span>{tab.label}</span>
                        <h1>{tab.heading}</h1>
                        <p>{tab.content}</p>
                        {tab.cta && (
                            <Link href={tab.cta.href} className="hero-btn">
                                Request a Quote
                                <Image src='/img/hero-btn.png' width={50} height={50} alt="arrow icon" />
                            </Link>
                        )}
                    </FadeInText>
                </div>
            </div>

            {/* Tab Buttons */}
            <ul className="hero-tab-button">
                {tabs.map((t, index) => (
                    <li className="nav-item" key={t.key}>
                        <button
                            className={`nav-link ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {t.tablabel}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
