import React, { useMemo, useState } from 'react';
import { FiBox } from 'react-icons/fi';
import { products as initialProducts } from '../utils/sampleData';

const Products = () => {
  const [products] = useState(initialProducts);
  const lowStock = useMemo(() => products.filter((item) => item.stock < 20).length, [products]);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-600 p-3 text-white">
              <FiBox className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Products</h3>
              <p className="text-sm text-slate-500">Track stock and inventory</p>
            </div>
          </div>
          <div className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">{lowStock} low stock</div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-slate-900">{product.name}</h4>
              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">{product.category}</span>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>Price: {product.price}</p>
              <p>Stock: {product.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
