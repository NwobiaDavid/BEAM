import { BiLogoWhatsapp } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";

export default function Header() {
  return (
    <div className="flex py-3 border-b-2 text-sm text-gray-800 border-b-gray-00">
      <h1 className="flex items-center"><TbMailFilled className="text-red-500 mr-1" /> Email: dnwobia@gmail.com</h1>
      <h1 className="ml-4 items-center flex "><BsTelephoneFill className="text-red-500 mr-1" /> Hotline:(+234)9153137550</h1>
      <h1 className="ml-4 flex items-center capitalize"><BiLogoWhatsapp className="text-red-500 mr-1" /> chat with us on whatsapp</h1>
    </div>
  )
}
