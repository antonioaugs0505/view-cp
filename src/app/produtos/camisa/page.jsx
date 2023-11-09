import Image from "next/image";
import Link from "next/link";

export default async function Camisa() {

  const response = await fetch("http://localhost:3000/api/vestuario/camisa")


  return (
    <div>
        <h1>CAMISA</h1>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deleniti suscipit laudantium perspiciatis, minus provident, laboriosam eius repudiandae incidunt itaque eum temporibus, illum tempore reprehenderit voluptate voluptates quas. Architecto, ea.</p>
            <p> <Link href="/">Voltar...</Link> </p>
        </div>
    </div>
  )
}
