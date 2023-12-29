import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('/furniture.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProducts(data)
        })
    },[])
    return (
        <div className="mt-8">
           

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-24">
                {
                    products.map(product=><ProductCard
                    key={product.id}
                    singleProduct={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Shop;