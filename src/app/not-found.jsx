import Image from "next/image";

export default function NotFound() {
  return (
<div className="bg-purple-600 flex flex-col items-center justify-center font-extrabold font-sans h-screen">
  <figure >
    <Image src="/img/giphy.gif" alt="404" width={500} height={400} />
  </figure>
</div>
  )
}
