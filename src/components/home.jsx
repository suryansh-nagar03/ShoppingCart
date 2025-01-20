import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"


const CategoryCard = ({ name, image, href }) => (
  <Link to={href} className="group relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden block">
    <img src={image} alt={`${name} category`} className="w-full h-full object-cover" />
    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
      <div className="bg-white py-4 px-8 rounded-full">
        <span className="font-medium">{name}</span>
      </div>
      <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-gray-800 transition-colors">
        <MoveRight className="w-6 h-6" />   
      </button>
    </div>
  </Link>
)

export default function HomePage() {
const categories = [
    {
        name: "CLOTHING",
        image: "/clothing1.jpeg",
        href: "/clothing",
    },
    {
        name: "SHOES",
        image: "/shoes1.jpeg",
        href: "/shoes",
    },
    {
        name: "ACCESSORIES",
        image: "accessories1.avif",
        href: "/accessories",
    },
]

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
        <h1 className="text-5xl md:text-6xl font-medium leading-tight">
          Find your own unique style and thousands of brands
        </h1>
        <div className="text-right">
          <p className="text-xl mb-4">Get 15% discount on your first order</p>
          <Button variant="outline" className="rounded-full px-6">
            Shop now
          </Button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.name} name={category.name} image={category.image} href={category.href} />
        ))}
      </div>
    </main>
  )
}

