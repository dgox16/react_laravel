export const ProductItem = ({product, deleteProduct}) => {
    const handleDelete = () => {
        deleteProduct(product.id);
    }

    return (
        <div className="bg-gray-100 my-3 p-4 rounded-lg flex justify-between">
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
                <button
                    className="bg-yellow-200 mb-3 px-3 py-2 rounded-lg font-semibold hover:scale-105 transition text-yellow-800"
                >
                    Update Product
                </button>
                <button
                    className="bg-red-200 px-3 py-2 rounded-lg font-semibold hover:scale-105 transition text-red-800"
                    onClick={handleDelete}
                >
                    Delete Product
                </button>

            </div>
        </div>
    )
}