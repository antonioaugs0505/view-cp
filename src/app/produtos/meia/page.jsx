import Image from "next/image";
import Link from "next/link";

export default function Meia() {
  return (
    <div>
        <h1>MEIA</h1>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deleniti suscipit laudantium perspiciatis, minus provident, laboriosam eius repudiandae incidunt itaque eum temporibus, illum tempore reprehenderit voluptate voluptates quas. Architecto, ea.</p>
            <p> <Link href="/">Voltar...</Link> </p>
            <figure>
              <Image src="/img/socks-496×640.png" alt="Meia" width={249} height={320}/>
            </figure>
        </div>
    </div>
  )
}
