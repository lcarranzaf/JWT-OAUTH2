// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FreaturedProducts';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
        <Navbar/>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Newsletter />
        <Footer/>
    </div>
  );
};

export default Home;
