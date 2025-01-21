"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { MapPin, ShoppingCart } from "lucide-react"

export default function Header() {
  return (    
    <header className="w-full border-b">
      {/* Top bar */}
      <div className="px-4 py-4 flex items-center justify-between">
        {/* Location */}
        <div className="flex items-center pl-3 gap-2 text-sm">
          <MapPin className="h-4 w-4" />
          <span>Noida, India</span>
        </div>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-[1.6rem] font-semibold">Drop Market</h1>
        </Link>

        {/* Right actions */}
          <div className="flex items-center gap-6 pr-3">
            <Link to="/cart" className="hover:text-gray-600">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Button className="bg-[#D6392B] hover:bg-[#C02E21] text-white rounded-full w-24">Sign In</Button>
          </div>
              </div>

              {/* Navigation */}
      <nav className="px-4 py-3 bg-gray-200">
        <ul className="flex items-center justify-center gap-16">
          {["Clothing", "Shoes", "Accessories"].map((item) => (
            <li key={item}>
              <Link to={`/${item.toLowerCase().replace(" ", "-")}`} className="text-sm font-semibold hover:text-gray-600">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

