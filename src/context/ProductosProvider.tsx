import { useEffect, useState } from "react";
import { ProductosContext } from "./ProductosContext"
// import { Producto } from "../interfaces/Producto";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProductosProvider = ({ children }: any) => {


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [productos, setProductos] = useState<any[]>([]);
    const fetchProductos = async () => {
        const resp = await fetch('https://fakestoreapi.com/products');
        const data = await resp.json();
        setProductos(data);
    }

    useEffect(() => {
        fetchProductos();
    }, []);
    
    return (
        <ProductosContext.Provider value = {{productos}}>
            {children}
        </ProductosContext.Provider>
    )
}
