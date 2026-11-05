import { create } from 'zustand'

export type Status = 'In Stock' | 'Low Stock' | 'Out of Stock' | 'Discontinued'

export interface Product {
    id: string
    name: string
    sku: string
    category: string
    stock: number
    price: number
    status: Status
    updated: string
}

const mockProducts: Product[] = [
    { id: '1', name: 'Wireless Headphones Pro', sku: 'SKU-10234', category: 'Electronics', stock: 86, price: 199, status: 'In Stock', updated: 'Oct 28, 2026' },
    { id: '2', name: 'Insulated Water Bottle', sku: 'SKU-11892', category: 'Lifestyle', stock: 14, price: 24.5, status: 'Low Stock', updated: 'Oct 27, 2026' },
    { id: '3', name: 'Ergonomic Office Chair', sku: 'SKU-07412', category: 'Furniture', stock: 0, price: 289, status: 'Out of Stock', updated: 'Oct 26, 2026' },
    { id: '4', name: 'Mechanical Keyboard RGB', sku: 'SKU-09321', category: 'Electronics', stock: 42, price: 129.99, status: 'In Stock', updated: 'Oct 25, 2026' },
    { id: '5', name: 'Yoga Mat Premium', sku: 'SKU-12205', category: 'Fitness', stock: 7, price: 35, status: 'Low Stock', updated: 'Oct 24, 2026' },
    { id: '6', name: 'Ceramic Mug Set (4pk)', sku: 'SKU-13077', category: 'Home', stock: 0, price: 18, status: 'Discontinued', updated: 'Oct 23, 2026' }
]

interface Store {
    products: Product[]
    search: string
    setSearch: (s: string) => void
}

export const useProductStore = create<Store>((set) => ({
    products: mockProducts,
    search: '',
    setSearch:(s) => set({ search: s })
}))