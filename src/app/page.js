export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <h1>Breathe Clean, Live Healthy</h1>
          <p>Advanced air quality monitoring solutions for a healthier environment</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="product-card">
                <h3>Air Quality Monitors</h3>
                <p>Monitor PM2.5, CO2, and other pollutants with our advanced devices</p>
                <a href="/products/air-quality-monitors" className="btn btn-outline-success">
                  Explore Monitors
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-card">
                <h3>Air Quality Sensors</h3>
                <p>Professional-grade sensors for accurate air quality measurements</p>
                <a href="/products/air-quality-sensors" className="btn btn-outline-success">
                  View Sensors
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="product-card">
                <h3>Air Purifiers</h3>
                <p>Clean the air in your space with our efficient purification systems</p>
                <a href="/products/air-purifier" className="btn btn-outline-success">
                  Discover Purifiers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
