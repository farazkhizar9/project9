import React from 'react';
import Navbar from './Navbar';


export default function Header() {
return (
<header className="bg-white shadow-sm">
<div className="container mx-auto px-4 py-4 flex items-center justify-between">
<h1 className="text-xl font-bold">MyStore</h1>
<Navbar />
</div>
</header>
);
}