'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import "./style.css"

const SensorNavBar = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.sensor-nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active-sensor-link');
      } else {
        link.classList.remove('active-sensor-link');
      }
    });
  }, []);

  return (
    <div className="sticky-top sensor-bar">
      <div className="container-fluid">
        <Link href="/air-quality-sensor/sulfur-dioxide-so2-sensor" className="sensor-nav-link ">
          SO2
        </Link>
        <Link href="/sensors/co2" className="sensor-nav-link ">
          CO2
        </Link>
        <Link href="/sensors/no2" className="sensor-nav-link ">
          NO2
        </Link>
        <Link href="/sensors/co" className="sensor-nav-link ">
          CO
        </Link>
        <Link href="/sensors/ozone" className="sensor-nav-link ">
          Ozone
        </Link>
        <Link href="/sensors/ammonia" className="sensor-nav-link ">
          Ammonia
        </Link>
        <Link href="/sensors/h2s" className="sensor-nav-link ">
          H2S
        </Link>
        <Link href="/sensors/chlorine" className="sensor-nav-link ">
          Chlorine
        </Link>
        <Link href="/sensors/ethanol" className="sensor-nav-link ">
          Ethanol
        </Link>
      </div>
    </div>
  );
};

export default SensorNavBar;
