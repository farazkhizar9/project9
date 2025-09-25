"use client";
import React from 'react';


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
children: React.ReactNode;
}


export default function Button({ children, className = '', ...rest }: Props) {
return (
<button
{...rest}
className={`px-4 py-2 rounded-lg shadow-sm text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
>
{children}
</button>
);
}