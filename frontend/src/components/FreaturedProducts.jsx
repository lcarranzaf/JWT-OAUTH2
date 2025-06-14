const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-2">Productos Destacados</h2>
      <p className="text-center text-gray-600 mb-6">Los productos más populares y mejor valorados</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {[1, 2, 3, 4].map((_, idx) => (
          <div key={idx} className="bg-white p-4 rounded-lg shadow text-center">
            <div className="h-32 bg-gray-200 mb-4 rounded"></div>
            <h3 className="font-semibold text-lg mb-1">Producto {idx + 1}</h3>
            <p className="text-blue-600 font-bold mb-2">$1.000.000</p>
            <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Agregar al Carrito</button>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition">Ver Todos los Productos</button>
      </div>
    </section>
  );
};

export default FeaturedProducts;