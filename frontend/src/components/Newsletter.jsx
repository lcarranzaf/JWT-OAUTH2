const Newsletter = () => {
  return (
    <section className="bg-gray-900 text-white py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Mantente al día</h2>
      <p className="mb-6 text-gray-300">Suscríbete a nuestro newsletter y recibe las mejores ofertas y novedades directamente en tu email.</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
        <input type="email" placeholder="Tu email" className="px-4 py-2 rounded w-full sm:w-auto text-black" />
        <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition">Suscribirme</button>
      </div>
    </section>
  );
};

export default Newsletter;
