"use client";
import Link from 'next/link';
import React from 'react';
import { useCart } from '../context/CartContext';


export default function Navbar() {
const { items } = useCart();
const count = items.reduce((s, i) => s + i.quantity, 0);


return (
<nav className="flex items-center gap-4">
<Link href="/" className="hover:underline">Home</Link>
<Link href="/products" className="hover:underline">Products</Link>
<Link href="/about" className="hover:underline">About</Link>
<Link href="/contact" className="hover:underline">Contact</Link>
<Link href="/cart" className="ml-4 inline-flex items-center gap-2">
<span>Cart</span>
<span className="text-sm bg-slate-100 rounded-full px-2 py-0.5">{count}</span>
</Link>
</nav>
);
}