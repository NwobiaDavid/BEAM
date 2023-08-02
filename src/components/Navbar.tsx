import { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

export default function Navbar() {
  const [search, setSearch] = useState('');

  const balance: number = 0.0;

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearch(value);
  }

  useEffect(() => {
    axios
      .get('/api/searchterm')
      .then((res) => {
        setSearch(res.data);
        console.log('data retrieved');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex justify-between py-6">
      <div>
        <h1 className="uppercase font-bold text-5xl">beam</h1>
      </div>

      <div className="w-[40%]">
        <form action="POST" className="flex items-center relative">
          <input
            className="border-2 rounded-full outline-none px-3 p-2 w-full border-gray-200 "
            onChange={handleSearch}
            type="text"
            name="search"
            value={search}
            placeholder="Keyword here..."
          />
          <button
            type="submit"
            className="absolute left-[80%] w-[20%] rounded-e-full hover:bg-red-600 duration-200 bg-red-500 text-white h-full "
            name="search"
          >
            Search
          </button>
        </form>
      </div>

      <div>
        <div className="flex capitalize">
          <a href='#' className="flex items-center px-2 py-1 hover:shadow-sm">
            <AiOutlineUser size={35} />
            <div className='ml-1'>
              <p>my account</p>
              <p>Login/Register</p>
            </div>
          </a>

          <div className="ml-3 flex items-center px-2 py-1 hover:shadow-sm">
            <AiOutlineShoppingCart size={35} />
            <div className='ml-1'>
              <p>my cart</p>
              <p>${balance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
