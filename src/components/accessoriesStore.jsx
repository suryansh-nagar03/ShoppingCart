import React from "react";
import { Accessories } from "../lib/database";
import ItemCard from "@/components/itemCard";

export default function AccessoriesStore() {
  return (
    <div>
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {Accessories.map((item) => (
            <ItemCard
              key={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              brand={item.brand}
              category="accessories"
              productId={item.id}
            />
          ))}
        </div>
      </main>
    </div>
  );
}