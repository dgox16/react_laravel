import {ProductItem} from "./ProductItem.jsx";

export const ProductList = ({products}) => {
    return (
        <div>
            <div className="mt-4">
                <button
                    className="bg-yellow-200 mb-3 px-3 py-2 rounded-lg font-semibold hover:scale-105 transition text-yellow-800"
                >New Product
                </button>
            </div>
            {
                products.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))
            }
        </div>

    )
}