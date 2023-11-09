import Image from "next/image";
import Link from "next/link";

export default function Tenis() {
  return (
    <div>
        <h1>TÊNIS</h1>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deleniti suscipit laudantium perspiciatis, minus provident, laboriosam eius repudiandae incidunt itaque eum temporibus, illum tempore reprehenderit voluptate voluptates quas. Architecto, ea.</p>
            <p> <Link href="/">Voltar...</Link> </p>
            <figure>
              <Image src="/img/converse-640×376.png" alt="Tênis" width={320} height={188}/>
            </figure>
        </div>
    </div>
  )
}
