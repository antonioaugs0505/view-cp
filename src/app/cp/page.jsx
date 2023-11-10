import Link from "next/link";
import { FaTable, FaUser } from "react-icons/fa";

export default function CPage(){

    return(
        
<div className="bg-purple-600 flex items-center justify-center h-screen">
  <div className=" flex text-white text-center mb-2">
    <p className="flex items-center border-4 rounded-3xl border-purple-800 px-5 py-2 m-5 hover:bg-purple-700">
      <FaTable className="mr-5" />
      <Link href="/cp/user/lista">VIEW DO GET-ALL</Link>
    </p>

    <p className="flex items-center border-4 rounded-3xl border-purple-800 px-5 py-2 m-5 hover:bg-purple-00">
      <FaUser className="mr-5" />
      <Link href="/cp/user/detalhe/">VIEW DO GET-BY-ID</Link>
    </p>
  </div>
</div>

    )
}