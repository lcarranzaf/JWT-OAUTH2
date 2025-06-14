const categories = [
  { name: 'Smartphones', color: 'blue' },
  { name: 'Laptops', color: 'green' },
  { name: 'Audio', color: 'purple' },
  { name: 'Gaming', color: 'red' },
  { name: 'Cámaras', color: 'yellow' },
  { name: 'Wearables', color: 'pink' },
];

const Categories = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Explora por Categorías</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`w-24 h-24 flex items-center justify-center bg-${cat.color}-100 text-${cat.color}-700 rounded-full font-semibold shadow-sm`}
          >
            {cat.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;