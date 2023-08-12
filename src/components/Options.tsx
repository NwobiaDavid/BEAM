import { RxRocket } from "react-icons/rx";
import { FaSackDollar } from "react-icons/fa6";

export default function Options() {
    
  return (
    <div className="flex">
        <a href="http://" className="flex justify-center items-center">
            <RxRocket />
            <div>
                <h2>free shipping</h2>
                <p>across west africa</p>
            </div>
        </a>
        <a href="http://" className="flex justify-center items-center">
            <FaSackDollar />
            <div>
                <h2>free shipping</h2>
                <p>across west africa</p>
            </div>
        </a>
    </div>
  )
}
