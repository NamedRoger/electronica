import clientes from '../icons/clientes.svg';
import proveedores from '../icons/proveedores.svg';
import almacen from '../icons/almacen.svg';
import insumos from '../icons/insumos.svg';
import ventas from '../icons/ventas.svg';

export const pages = [
    {
        name: 'Proveedores', link: "/proveedores", img: proveedores,
        dropdown: [{ name: 'Añadir Proveedor', link: "/addproveedor" },
        { name: 'Listado de Proveedores', link: "/proveedoressss" },
        { name: 'Editar Proveedor', link: "/edit" },
        { name: 'Listado de Bancos', link: "/listadobancos" },
        { name: 'Listado de Notas', link: "/listadonotas" },
        { name: 'Listado de Observaciones', link: "/observaciones" }]
    },
    {
        name: 'Clientes', link: "/clientes", img: clientes,
        dropdown: [{ name: 'Listado de Clientes', link: "/clientes" },
        { name: 'Añadir clientes', link: "/addclientes" },
        { name: 'Editar Clientes', link: "/editcliente" }]
    },
    {
        name: 'Almacén', link: "/almacen", img: almacen,
        dropdown: [{ name: 'Añadir Almacen', link: "/addalmacen" },
        { name: 'Editar Almacen', link: "/editalmacen" },
        { name: 'Ver Proveedores', link: "/proveedoresalmacen" }]
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