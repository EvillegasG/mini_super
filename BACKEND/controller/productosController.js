let productos  = [
    {
        id: 1,
        nombre: "Arroz",
        precio: 1000,
        categoria: "Granos",
    },
    {
        id: 2,
        nombre: "Frijoles",
        precio: 1200,
        categoria: "Granos",
    },
    {
        id: 3,
        nombre: "Aceite",
        precio: 1500,
        categoria: "Líquidos",
    },
    {
        id: 4,
        nombre: "Azúcar",
        precio: 800,
        categoria: "Endulzantes",
    }
];


export const getProductos = (req, res) => {
    res.status(200).json(productos);
}   
