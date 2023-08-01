import './App.css';
import Heropage from './components/Heropage';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <div className="px-[10%]">
        <Header />
        <Navbar />
      </div>
      <Categories />
      <Heropage />
    </>
  );
}

export default App;
