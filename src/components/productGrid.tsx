import ProductCard from "./ProductCard"

export default function ProductGrid() {
  const products = [
    {
      name: "Mini LCW Chair",
      price: 56.00,
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      name: "Modern Chair",
      price: 56.00,
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      name: "Comfort Chair",
      price: 56.00,
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      name: "Classic Chair",
      price: 56.00,
      image: "/placeholder.svg?height=200&width=200"
    }
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Top Categories</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  )
}

