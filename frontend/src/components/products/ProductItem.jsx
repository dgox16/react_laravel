import {Link} from "react-router-dom";

export const ProductItem = ({product, deleteProduct}) => {
    return (
        <div className="bg-gray-100 mb-3 p-4 rounded-lg flex justify-between">
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                    {product.name}
                </h1>
                <h2 className="text-lg text-gray-700">
                    {product.description}
                </h2>
                <span className="text-sm text-gray-700">
                    {"$" + product.price}
                </span>
            </div>
            <div className="flex flex-col items-center">
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