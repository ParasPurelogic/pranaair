import Image from "next/image"

export default function IndoorMonitorsPage() {
  const products = [
    {
      id: "indoor-pm25",
      name: "Indoor PM2.5 Monitor",
      description: "Continuous indoor air quality monitoring system",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "indoor-co2",
      name: "Indoor CO2 Monitor",
      description: "Smart CO2 monitoring for indoor spaces",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="container py-5">
      <h1 className="mb-4">Indoor Air Quality Monitors</h1>
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card h-100">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <a href={`/products/air-quality-monitors/indoor/${product.id}`} className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

