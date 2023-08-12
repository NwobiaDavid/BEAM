import './App.css';
import Heropage from './components/Heropage';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Options from './components/Options';
import ShopByCategories from './components/categories/ShopByCategories';

function App() {
  return (
    <>
      <div className="px-[10%]">
        <Header />
        <Navbar />
      </div>
      <Categories />
      <div className='px-[10%] mt-6'>
        <Heropage />
        <Options />
        <ShopByCategories />
      </div>
    </>
  );
}

export default App;
