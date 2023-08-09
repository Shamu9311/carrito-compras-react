/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from '../components/Card';
import { useContext } from 'react';
import { ProductosContext } from "../context/ProductosContext";
import { Producto } from '../interfaces/Producto';
import { CarritoContext } from '../context/CarritoContext';


export const ComprasPage = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { productos }: any = useContext(ProductosContext);
    const { agregarCompra, eliminarCompra }: any = useContext(CarritoContext);

    const handleAgregar = (compra: any) =>{
        agregarCompra(compra);
    }
    const handleQuitar = (id: string) =>{
        eliminarCompra(id);
    }

    return (
        <>
            <h2>Compras: </h2>
            <hr />
            {productos.map((producto: Producto) => (
                <Card
                    key= {producto.id}
                    imagen = {producto.image}
                    titulo = {producto.title}
                    descripcion = {producto.description}
                    precio = {producto.price}
                    handleAgregar={() => handleAgregar(producto)}
                    handleQuitar= {() => handleQuitar(producto.id)}
                >
                </Card >
            ))}
        
    </>
  )
}
