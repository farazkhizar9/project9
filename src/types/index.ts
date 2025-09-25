"use client";
export interface Product {
id: string;
title: string;
price: number;
image: string;
description?: string;
}


export interface CartItem {
product: Product;
quantity: number;
}