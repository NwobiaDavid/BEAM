import { AiFillHome } from "react-icons/ai";


export default function Categories() {
    


  return (
    <div className="p-[9px] capitalize text-white flex justify-center items-center bg-black">
      <div className="flex w-[80%] items-center">
        <a href="" className="hover:text-red-500 duration-200">
            <AiFillHome />
        </a>
        <a className="ml-3 px-6 py-0.5  duration-150 hover:text-red-500"  href="http://">men</a>
        <a className="ml-3 px-6 py-0.5 duration-150 hover:text-red-500" href="http://">women</a>
        <a className="ml-3 px-6 py-0.5 duration-150 hover:text-red-500" href="http://">teens</a>
        <a className="ml-3 px-6 py-0.5  duration-150 hover:text-red-500" href="http://">toddlers</a>
        <a className="ml-20 px-6 py-0.5  duration-150 hover:text-red-500" href="http://">sell on BEAM</a>
      </div>
    </div>
  );
}
