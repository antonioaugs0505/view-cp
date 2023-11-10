import Link from "next/link";
import { FaSocks, FaTasks, FaTshirt, FaUserCircle} from "react-icons/fa";
import { PiPantsFill, PiSneakerFill} from "react-icons/pi";

export default function Cabecalho() {
  return (
    <div>
  <header className="bg-purple-800 text-white p-4">
    <nav className="flex justify-around text-xl">
      <p className="flex items-center hover:text-purple-600 ">
        <FaUserCircle className="mr-2"  />  
        <Link href="/login">LOGIN</Link> 
      </p> 
      <p className="flex items-center hover:text-purple-600 ">
      <PiPantsFill className="mr-2" /> 
        <Link href="/produtos/calca">CALÇA</Link>
      </p>
      <p className="flex items-center hover:text-purple-600">
        <FaTshirt className="mr-2" /> 
        <Link href="/produtos/camisa">CAMISA</Link>
      </p>
      <p className="flex items-center hover:text-purple-600">
        <FaSocks className="mr-2" /> 
        <Link href="/produtos/meia">MEIA</Link>
      </p>
      <p className="flex items-center hover:text-purple-600">
        <PiSneakerFill className="mr-2" /> 
        <Link href="/produtos/tenis">TÊNIS</Link>
      </p>
      <p className="flex items-center hover:text-purple-600">
        <FaTasks className="mr-2" /> 
        <Link href="/cp">CHECKPOINT</Link>
      </p>
    </nav>
  </header>
</div>
  );
}
