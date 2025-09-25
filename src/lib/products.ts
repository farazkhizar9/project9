import type { Product } from '../types';


export const products: Product[] = [
{
id: '1',
title: 'Classic T‑Shirt',
price: 19.99,
image: 't.jpeg',
description: 'Soft cotton T‑shirt — comfortable daily wear.'
},
{
id: '2',
title: 'Comfy Chair',
price: 129.99,
image: '/Gaming Chair.jpeg',
description: 'Ergonomic chair with soft cushions.'
},
{
id: '3',
title: 'City Bicycle',
price: 349.5,
image: 'road-bike.jpeg',
description: 'Lightweight city bike for everyday rides.'
},
{
id: '4',
title: 'Laptop Pro 14"',
price: 1299.0,
image: 'gg.jpeg',
description: 'Powerful laptop for creators and coders.'
}
];


export function getProductById(id: string) {
return products.find(p => p.id === id) || null;
}