import Almacen from '../icons/Almacen';
import Clientes from '../icons/Clientes';
import Insumos from '../icons/Insumos';
import Proveedores from '../icons/Proveedores';
import Ventas from '../icons/Ventas';

export const pages = [
    {
        name: 'Proveedores', link: "/proveedores", img: <Proveedores />,
        dropdown: [
        { name: 'Añadir Proveedor', link: "/addproveedor" },
        { name: 'Listado de Proveedores', link: "/proveedoressss" },
        { name: 'Editar Proveedor', link: "/edit" },
        { name: 'Listado de Bancos', link: "/listadobancos" },
        { name: 'Listado de Notas', link: "/listadonotas" },
        { name: 'Listado de Observaciones', link: "/observaciones" }]
    },
    {
        name: 'Clientes', link: "/clientes", img: <Clientes />,
        dropdown: [{ name: 'Listado de Clientes', link: "/clientes" },
        { name: 'Añadir clientes', link: "/addclientes" },
        { name: 'Editar Clientes', link: "/editcliente" }]
    },
    {
        name: 'Almacén', link: "/almacen", img: <Almacen />,
        dropdown: [{ name: 'Añadir Almacen', link: "/addalmacen" },
        { name: 'Editar Almacen', link: "/editalmacen" },
        { name: 'Ver Proveedores', link: "/editarTablaProductoProveedor" },
        {name: 'Formulario Proveedor', link: "/añadirProveedor"},
        {name:'Tabla Categorias',link:'/categorias'}]
 
    },
    {
        name: 'Insumos', link: "/insumos", img: <Insumos />,
        dropdown: [{ name: 'Listado de Insumos', link: "/insumos" },
        { name: 'Listado de Bancos', link: "/listadobancos" },
        { name: 'Listado de Notas', link: "/listadonotas" }]
    },
    {
        name: 'Ventas', link: "/ventas", img: <Ventas />,
        dropdown: [{ name: 'Listado de Ventas', link: "/ventas" },
        { name: 'Listado de Notas', link: "/listadonotas" }]
    }
]