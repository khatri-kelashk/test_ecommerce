"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from '../product-data';

export default function CartPage() {
  const [cartIds, setCartIds] = useState(["123", "345"]);

  const cartProducts = cartIds.map((id) => products.find((p) => p.id === id)!);

  return (
    <>
      <h1>Shopping Cart</h1>
      {cartProducts.map((product) => (
        <Link key={product.id} href={"/products/"+ product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </Link>
      ))}
    </>
  );
}