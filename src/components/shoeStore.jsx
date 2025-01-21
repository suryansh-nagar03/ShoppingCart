import React from "react"
import { Shoes } from "../lib/database"
import ItemCard from "@/components/itemCard"

export default function ShoeStore() {
    return (
        <div>
            <main className="container mx-auto px-4 py-12">            
                  {/* Categories Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {Shoes.map((shoe) => (
                    <ItemCard key={shoe.name} name={shoe.name} image={shoe.image} category={"shoes"} productId={shoe.id} />
                  ))}
                </div>
            </main>
        </div>
    )
}