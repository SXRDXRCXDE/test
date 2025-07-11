import React, {useEffect, useState} from "react";
import {getProducts} from "../../api/products.js";

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    return(
        <div className={'w-full h-screen p-10'}>
            <div className={'w-full flex flex-col items-start'}>

                    {products.map((value, index)=><div className={'text-white/60 w-full h-12 flex items-center justify-around border border-white/30'}>
                        <div>{value.id}</div>
                        <div className={'line-clamp-1'}>{value.title}</div>
                        <div>{value.price}</div>
                        <div className={'line-clamp-1'}>{value.description}</div>
                        <div className={'line-clamp-1'}>{value.category}</div>
                        </div>
                        )}
            </div>
        </div>
    );
}