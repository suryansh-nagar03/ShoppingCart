import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => (
  <div className="flex items-center py-6 border-b">
    <img
      src={item.image || "/placeholder.svg"}
      alt={item.name}
      className="w-24 h-24 object-cover rounded-md mr-4"
    />
    <div className="flex-grow">
      <h3 className="font-medium">{item.name}</h3>
      <p className="text-sm text-gray-500">{item.brand}</p>
      <div className="text-sm flex gap-2 text-gray-500">
        {item.selectedSize !== 0 && <div>Size: {item.selectedSize}</div>}
        <div>Color: {item.selectedColor}</div>
      </div>
    </div>
    <div className="flex items-center">
      <button
        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        className="p-1 rounded-full hover:bg-gray-100"
        disabled={item.quantity <= 1}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="mx-2 w-8 text-center">{item.quantity}</span>
      <button
        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        className="p-1 rounded-full hover:bg-gray-100"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
    <p className="w-24 text-right font-medium">
      $ {(item.price * item.quantity).toFixed(2)}
    </p>
    <button
      onClick={() => onRemove(item.id)}
      className="ml-4 p-1 rounded-full hover:bg-gray-100"
    >
      <X className="h-5 w-5" />
    </button>
  </div>
);

export default function Cart({ cart, setCart }) {
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-medium mb-8">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
                selectedColor={item.selectedColor}
                selectedSize={item.selectedSize}
              />
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$ {shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium text-lg mt-4 pt-4 border-t">
              <span>Total</span>
              <span>$ {total.toFixed(2)}</span>
            </div>
            <Button className="w-full mt-6 bg-black hover:bg-gray-800 text-white">
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
