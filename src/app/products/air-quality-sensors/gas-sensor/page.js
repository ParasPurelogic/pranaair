import Image from "next/image"

export default function AirQualitySensorsPage() {
  const products = [
    {
      id: "co-detector",
      name: "CO Detector",
      description: "Professional carbon monoxide detection system",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "nano-tvoc",
      name: "Nano TVOC",
      description: "Advanced TVOC sensor with nano technology",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: "breathalyzer",
      name: "Breathalyzer",
      description: "Professional-grade breath analysis device",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="container py-5">
      <h1 className="mb-4">Air Quality Sensors</h1>
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
                <a href={`/products/air-quality-sensors/${product.id}`} className="btn btn-primary">
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

