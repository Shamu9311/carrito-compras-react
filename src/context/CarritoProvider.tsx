/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";
import { Action } from "../interfaces/Action";

const initialState: any = [];

export const CarritoProvider = ({ children }: any) => {


    const comprasReducer = (state = initialState, action: Action) => {
        switch (action.type) {
            case '[CARRITO] Agregar':
                return [ ...state, action.payload ]
            case '[CARRITO] Aumentar':
                return state.map((item : { id: string,  price: number; cantidad: number; }) => {
                    const cant = item.cantidad + 1;
                    if( item.id === action.payload ) return {...item, cantidad: cant }
                    return item;
                })
            case '[CARRITO] Disminuir':
                return state.map((item : { id: string,  price: number; cantidad: number; }) => {
                    const cant = item.cantidad - 1;
                    if( item.id === action.payload && item.cantidad > 1) return {...item, cantidad: cant }
                    return item;
                })
            case '[CARRITO] Eliminar':
                return state.filter( (compra: any) => compra.id !== action.payload)

            default:
                return state
        }
    }

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

    const agregarCompra = (compra: any) => {
        compra.cantidad = 1;
        const action: Action = {
            type: '[CARRITO] Agregar',
            payload: compra
        }
        dispatch(action);
    }
    const aumentarCantidad = (id: any) => {
        const action: Action = {
            type: '[CARRITO] Aumentar',
            payload: id
        }
        dispatch(action);
    }
    const disminuirCantidad = (id: any) => {
        const action: Action = {
            type: '[CARRITO] Disminuir',
            payload: id
        }
        dispatch(action);
    }
    const eliminarCompra = (id: any) => {
        const action: Action = {
            type: '[CARRITO] Eliminar',
            payload: id
        }
        dispatch(action);
    }

    

    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </CarritoContext.Provider>
    )
}
