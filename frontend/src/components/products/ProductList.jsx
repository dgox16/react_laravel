import {ProductItem} from "./ProductItem.jsx";
import {Link} from "react-router-dom";

export const ProductList = ({products, deleteProduct}) => {
    return (
        <div>
            <div className="my-4">
                <Link
                    to={"/products/new"}
                    className="bg-blue-200 px-3 py-2 text-sm rounded-lg font-semibold hover:scale-105 transition text-blue-800"
                >New Product
                </Link>
            </div>
            {
                products.map((product) => (
                    <ProductItem key={product.id} product={product} deleteProduct={deleteProduct}/>
                ))
            }
        </div>

    )
}