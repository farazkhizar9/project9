"use client";
import React from 'react';
import { useCart } from '../../context/CartContext';


export default function CartPage() {
const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();


return (
<section>
<h2 className="text-2xl font-semibold mb-6">Your Cart</h2>


{items.length === 0 ? (
<div className="bg-white p-6 rounded-lg shadow-sm">Your cart is empty.</div>
) : (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 space-y-4">
{items.map(i => (
<div key={i.product.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
<img src={i.product.image} alt={i.product.title} className="w-24 h-24 object-cover rounded-md" />
<div className="flex-1">
<h3 className="font-medium">{i.product.title}</h3>
<p className="text-sm text-slate-600">${i.product.price.toFixed(2)}</p>
</div>
<div className="flex items-center gap-2">
<input
type="number"
min={1}
value={i.quantity}
onChange={(e) => updateQuantity(i.product.id, Number(e.target.value))}
className="w-20 p-2 border rounded"
/>
<button onClick={() => removeFromCart(i.product.id)} className="text-sm text-red-600">Remove</button>
</div>
</div>
))}
</div>


<aside className="bg-white p-4 rounded-lg shadow-sm">
<h4 className="font-semibold mb-2">Order summary</h4>
<p className="mb-4">Total: <strong>${total.toFixed(2)}</strong></p>
<button className="w-full bg-indigo-600 text-white py-2 rounded mb-2">Proceed to Checkout</button>
<button className="w-full border py-2 rounded" onClick={clearCart}>Clear Cart</button>
</aside>
</div>
)}
</section>
);
}