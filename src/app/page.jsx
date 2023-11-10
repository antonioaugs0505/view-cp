import Image from "next/image";

export default function Home(){

  return(
<div className="flex items-center justify-center bg-purple-600">
  <div className="text-white text-center">
    <h1 className="m-6 text-5xl">Home</h1>

    <div>
      <figure className="m-6">
        <Image src="/img/words-1797662_640.png" alt="Nuvem de palavras" width={640} height={464}/>
      </figure>
    </div>
  </div>
</div>

  )
}