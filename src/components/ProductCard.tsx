import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  name: string
  price: number
  image: string
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden">
      <CardContent className="p-0">
        {/* Image Container with gradient background */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 p-8">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
          />
          {/* Quick action buttons that appear on hover */}
          <div className="absolute left-4 top-4 flex flex-col gap-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
              <HeartIcon className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
              <ShoppingCartIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-gray-900">${price.toFixed(2)}</span>
          </div>
          <Button 
            variant="outline" 
            className="mt-4 w-full bg-transparent hover:bg-primary hover:text-white"
          >
            View Shop
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Icons
function HeartIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function ShoppingCartIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

