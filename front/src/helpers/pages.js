import clientes from '../icons/clientes.svg';
import proveedores from '../icons/proveedores.svg';
import almacen from '../icons/almacen.svg';
import insumos from '../icons/insumos.svg';
import ventas from '../icons/ventas.svg';

export const pages = [
    {
        name: 'Proveedores', link: "/proveedores", img: proveedores,
        dropdown: [{ name: 'Añadir Proveedor', link: "/addproveedor" },
        { name: 'Listado de Proveedores', link: "/proveedores" },
        { name: 'Listado de Bancos', link: "/listadobancos" },
        { name: 'Listado de Notas', link: "/listadonotas" }]
    },
    {
        name: 'Clientes', link: "/clientes", img: clientes,
        dropdown: [{ name: 'Listado de Clientes', link: "/clientes" },
        { name: 'Listado de Bancos', link: "/listadobancos" },
        { name: 'Listado de Notas', link: "/listadonotas" }]
    },
    {
        name: 'Almacén', link: "/almacen", img: almacen,
        dropdown: [{ name: 'Listado de Almacén', link: "/almacen" },
        { name: 'Listado de Bancos', link: "/listadobancos" },
        { name: 'Listado de Notas', link: "/listadonotas" }]
    },
    {
        name: 'Insumos', link: "/insumos", img: insumos,
        dropdown: [{ name: 'Listado de Insumos', link: "/insumos" },
        { name: 'Listado de Bancos', link: "/listadobancos" },
        { name: 'Listado de Notas', link: "/listadonotas" }]
    },
    {
        name: 'Ventas', link: "/ventas", img: ventas,
        dropdown: [{ name: 'Listado de Ventas', link: "/ventas" },
        { name: 'Listado de Notas', link: "/listadonotas" }]
    }
]