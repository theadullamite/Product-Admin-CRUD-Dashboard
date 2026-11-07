import { useProductStore } from "../store/useProductStore";
import { ProductTable } from "../components/products/ProductTable"


export default function Products() {
    const { search, setSearch } = useProductStore()

    return (
        <div className="p-4 md:p-8 space-y-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div><h1 className="text-3xl font-bold tracking-tight">Products</h1><p className="text-gray-400 mt-1">Manage your product catalog and inventory levels</p></div>
                <input placeholder="Search products, SKU..." value={search} onChange={e => setSearch(e.target.value)} className="h-10 bg-white/5 border border-white/10 rounded-xl px-4 w-full md:w-80 focus:outline-none focus:border-[#00e5cc]/50"/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#121212a] p-5 rounded-2xl border border-white/10"><p className="text-sm text-gray-400">Total Products</p><p className="text-3xl font-bold mt-2">124</p><p className="text-teal-300 text-xs mt-2">12 this month</p></div>
                <div className="bg-[#121212a] p-5 rounded-2xl border border-white/10"><p className="text-sm text-gray-400">Low Stock</p><p className="text-3xl font-bold mt-2">12</p><p className="text-teal-300 text-xs mt-2">-3 from last week</p></div>
                <div className="bg-[#121212a] p-5 rounded-2xl border border-white/10"><p className="text-sm text-gray-400">Out of Stock</p><p className="text-3xl font-bold mt-2">5</p><p className="text-teal-300 text-xs mt-2">Needs restock</p></div>
                <div className="bg-[#121212a] p-5 rounded-2xl border border-white/10"><p className="text-sm text-gray-400">Inventory Value</p><p className="text-3xl font-bold mt-2">42.3k</p><p className="text-teal-300 text-xs mt-2">8.2% from last month</p></div>
            </div>
            <ProductTable />
        </div>
    )
}