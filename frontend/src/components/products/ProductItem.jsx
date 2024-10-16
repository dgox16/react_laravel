import {Link} from "react-router-dom";

export const ProductItem = ({product, deleteProduct}) => {
    return (
        <div className="bg-zinc-900 mb-3 p-4 rounded-lg flex justify-between hover:scale-[1.01] transition">
            <div>
                <h1 className="text-2xl font-semibold text-zinc-200">
                    {product.name}
                </h1>
                <h2 className="text-lg text-zinc-300">
                    {product.description}
                </h2>
                <span className="text-sm text-zinc-300">
                    {"$" + product.price}
                </span>
            </div>
            <div className="flex flex-col items-end">
                <Link
                    className="bg-yellow-200 mb-3 px-3 py-2 rounded-lg font-semibold hover:scale-105 transition text-yellow-800"
                    to={`/products/${product.id}`}
                >
                    Update Product
                </Link>
                <button
                    className="bg-red-200 px-3 py-2 rounded-lg font-semibold hover:scale-105 transition text-red-800"
                    onClick={() => deleteProduct(product.id)}
                >
                    Delete Product
                </button>
            </div>
        </div>
    )
}