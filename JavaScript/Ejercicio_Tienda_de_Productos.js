// Creamos un arreglo vacío llamado 'inventario'
const inventario = [];

// Agregamos productos al inventario con .push()
// Cada producto es un objeto con nombre, precio y categoría
inventario.push({ nombre: "Auriculares", precio: 1500, categoria: "Electrónica" });
inventario.push({ nombre: "Remera", precio: 2000, categoria: "Ropa" });
inventario.push({ nombre: "Auto eléctrico", precio: 150000, categoria: "Vehículos" });
inventario.push({ nombre: "Zapatillas", precio: 8000, categoria: "Calzado" });

// Mostramos todos los productos en consola con forEach
console.log("📦 Inventario completo:");
inventario.forEach((producto) => {
  console.log(producto);
});

// Filtramos los productos que pertenecen a la categoría "Electrónica"
const nuevo = inventario.filter((producto) => producto.categoria === "Electrónica");
console.log("🔌 Productos de la categoría Electrónica:", nuevo);

// Creamos un nuevo arreglo que solo contiene los nombres de los productos
const nuevoAr = inventario.map((producto) => {
  return producto.nombre; // Extraemos solo el nombre
});
console.log("📝 Nombres de productos:", nuevoAr);