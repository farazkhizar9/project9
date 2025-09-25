"use client";
import React from 'react';


export default function Footer() {
return (
<footer className="mt-12 border-t py-6 text-center text-sm text-slate-600">
© {new Date().getFullYear()} MyStore — Built with Next.js & Tailwind
</footer>
);
}