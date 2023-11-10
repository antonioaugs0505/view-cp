import Link from "next/link";
import { FaTable, FaUser } from "react-icons/fa";

export default function CPage(){

    return(
        
<div className="flex items-center justify-center">
    <p className="text-center">
        <Link href="/cp/user/lista">VIEW DO GET-ALL <FaTable /></Link>
    </p>

    <p className="text-center">
        <Link href="/cp/user/detalhe/">VIEW DO GET-BY-ID <FaUser /></Link>
    </p>
</div>
    )
}