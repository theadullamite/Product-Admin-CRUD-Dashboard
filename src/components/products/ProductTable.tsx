import { createColumnHelper, flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table'
import { useProductStore, Product } from '../../store/useProductStore'

const columnHelper = createColumnHelper<Product>()

const columns = [
    columnHelper.accessor('name', { header: 'PRODUCT', cell: info => <div><p className="font-semibold text-white">{info.getValue()}</p><p className="text-xs text-gray-400">{info.row.original.category}</p></div> }),
    columnHelper.accessor('sku', { header: 'SKU' }),
    columnHelper.accessor('category', { header: 'CATEGORY' }),
    columnHelper.accessor('stock', { header: 'STOCK', cell: info => <span className="font-bold">{info.getValue()}</span> }),
    columnHelper.accessor('price', { header: 'PRICE', cell: info => `$${info.getValue().toFixed(2)}` }),
    columnHelper.accessor('status', {
        header: 'STATUS',
        cell: info => {
            const v = info.getValue()
            const styles = {
                'In Stock': 'bg-teal-500/15 text-teal-300 border-teal-500/30',
                'Low Stock': 'bg-amber-500/15 text-amber-300 border-amber-500/30',
                'Out of Stock': 'bg-red-500/15 text-red-300 border-red-500/30',
                'Discontinued': 'bg-zinc-500/15 text-zinc-400 border-zinc-500/30',
            }[v]
            return <span className={`px-2.5 py-1 rounded-full text-xs border font-medium ${styles}`}>* {v}</span>
        }
    }),
]

export default function ProductTable() {
    const { products, search } = useProductStore()
    const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase()))

    const table = useReactTable({ data: filtered, columns, getCoreRowModel: getCoreRowModel() })

    return (
        <div className="w-full overflow-x-auto rounded-2xl border border-white/10 bg-[#12121a]">
            <table className='w-full min-w-800 text-sm'>
                <thead className='bg-white/0.04 text-gray-400'>
                    <tr>{table.getHeaderGroups()[0].headers.map(h => <th key={h.id} className='p-4 text-left font-medium'>{flexRender(h.column.columnDef.header, h.getContext())}</th>)}</tr>
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className='border-t border-white/5 hover:bg-white/0.03 transition'>
                            {row.getVisibleCells().map(cell => <td key={cell.id} className='p-4'>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='p-4 flex justify-between items-center text-sm text-gray-400 border-t border-white/5'>
                <span>Showing {filtered.length} of {products.length} products</span>
                <div className='flex gap-2'><button className='px-3 py-1 rounded-lg bg-white/10'>Previous</button><button className='px-3 py-1 rounded-lg bg-[#00e5cc] text-black'>1</button><button className='px-3 py-1 rounded-lg bg-white/10'>Next</button></div>
            </div>
        </div>
    )
}