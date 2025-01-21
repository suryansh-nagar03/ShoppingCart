import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, MoveRight } from "lucide-react"
import { useParams } from "react-router-dom";
import { Shoes } from "@/lib/database";
import { Link } from "react-router-dom";

export default function ShoesProduct() {
  const {productId} = useParams();
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  // const [selectedSize, setSelectedSize] = useState("");
  useEffect(() => {
    const foundProduct = Shoes.find(item => item.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors?.[0] || "");
      // setSelectedSize(foundProduct.sizes?.[0] || "");
    }
  }
  , [productId]);

  const similarProducts = product ? Shoes.filter(item => item.id !== product.id).slice(0, 4) : [];

  if (!product) {
    return <div>Product not found</div>
  }

  const getColorValue = (colorName) => {
    const colorMap = {
      "Black": "#000000",
      "Brown": "#8B4513",
      "Tan": "#D2B48C",
      "Gray": "#808080",
      "Navy": "#000080",
      "Gold": "#FFD700"
    }
    return colorMap[colorName] || colorName
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Main Product Image */}
        <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm text-gray-500">{product.brand}</p>
            <h1 className="text-2xl font-medium">{product.name}</h1>
            <p className="text-xl font-medium mt-2">$ {product.price.toFixed(2)}</p>
          </div>

          {/* Color Selector */}
          {product.colors && (
            <div>
              <p className="text-sm mb-2">Select color: {selectedColor}</p>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full border ${
                      selectedColor === color ? "ring-2 ring-black ring-offset-2" : ""
                    }`}
                    style={{ backgroundColor: getColorValue(color) }}
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
          <div className="flex gap-4 mt-6">
            <Button className="flex-1 bg-black hover:bg-gray-800">Add to cart</Button>
          </div>
        </div>
      </div>

      {/* Similar Items */}
      {similarProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-medium mb-6">Similar items</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {similarProducts.map((item) => (
              <div key={item.id} className="group">
                <div className="relative aspect-[3/4] mb-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
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
        <Link to="/shoes" className="flex items-center gap-2 text-sm hover:underline">
          <MoveRight className="h-4 w-4 rotate-180" />
          ALL SHOES
        </Link>
      </div>
    </div>
  )
}