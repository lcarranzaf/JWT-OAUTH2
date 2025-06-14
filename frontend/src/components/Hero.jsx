const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-6 text-center md:text-left md:flex md:items-center md:justify-between">
      <div className="max-w-xl mx-auto md:mx-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">La mejor tecnología a tu alcance</h1>
        <p className="mb-6 text-lg">Descubre los últimos smartphones, laptops y gadgets con los mejores precios del mercado.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-blue-100 transition">Ver Ofertas</button>
          <button className="border border-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">Explorar Productos</button>
        </div>
      </div>
      <div className="hidden md:block w-96 h-64 bg-gray-200 rounded-xl ml-10 shadow-lg"></div>
    </section>
  );
};

export default Hero;