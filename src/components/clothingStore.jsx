import React from "react";
import { Clothing } from "../lib/database";
import ItemCard from "@/components/itemCard"
import { Outlet } from "react-router-dom";

export default function ClothingStore() {
  return (
    <div>
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {Clothing.map((cloth) => (
            <ItemCard key={cloth.id} name={cloth.name} image={cloth.image} category={"clothing"} productId={cloth.id}/>
          ))}
        </div>
      </main>
      <Outlet />
    </div>
  );
}
