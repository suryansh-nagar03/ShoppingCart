import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, MoveRight } from "lucide-react"

// This component can be used for any product by passing the appropriate data
export default function ProductPage({ product, similarProducts }) {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "")
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "")
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-lg overflow-hidden ${
                  selectedImage === index ? "border-black" : "border-transparent"
                }`}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}
          </div>
          <div className="flex-1">
            <img
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full aspect-[3/4] object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm text-gray-500">{product.brand}</p>
            <h1 className="text-2xl font-medium">{product.name}</h1>
            <p className="text-xl font-medium mt-2">$ {product.price.toFixed(2)}</p>
          </div>

          {/* Size Selector */}
          {product.sizes && (
            <div>
              <p className="text-sm mb-2">Select size</p>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-full border ${
                      selectedSize === size ? "border-black bg-black text-white" : "border-gray-200 hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selector */}
          {product.colors && (
            <div>
              <p className="text-sm mb-2">Select color</p>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full border ${
                      selectedColor === color ? "ring-2 ring-black ring-offset-2" : ""
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="border-t pt-6">
            <h2 className="font-medium mb-4">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-4 mt-auto">
            <Button className="flex-1 bg-black hover:bg-gray-800">Add to cart</Button>
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Similar Items */}
      {similarProducts && similarProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-medium mb-6">Similar items</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similarProducts.map((item, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[3/4] mb-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-500">{item.brand}</p>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm">$ {item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <div className="flex justify-between mt-16">
        <a href={product.categoryLinks?.all} className="flex items-center gap-2 text-sm hover:underline">
          <MoveRight className="h-4 w-4 rotate-180" />
          ALL {product.brand} {product.category}
        </a>
        <a href={product.categoryLinks?.other} className="flex items-center gap-2 text-sm hover:underline">
          OTHER {product.brand} CLOTHES
          <MoveRight className="h-4 w-4" />
        </a>
        <a href={product.categoryLinks?.similar} className="flex items-center gap-2 text-sm hover:underline">
          ALL {product.category}
          <MoveRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

