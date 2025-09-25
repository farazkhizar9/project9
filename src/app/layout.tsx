"use client";
import './globals.css';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartProvider } from '../context/CartContext';


export const metadata = {
title: 'MyStore',
description: 'Simple e-commerce using Next.js 15, TypeScript, Tailwind'
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<CartProvider>
<Header />
<main className="container px-4 py-8">{children}</main>
<Footer />
</CartProvider>
</body>
</html>
);
}