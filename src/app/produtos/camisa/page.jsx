import Image from "next/image";
import Link from "next/link";

export default function Tenis() {
  return (
<div class="flex items-center justify-center min-h-screen bg-purple-600">
    <div class="text-center text-white p-8 rounded-lg">
        <h1 class="text-3xl font-bold mb-4">PARAISO DAS CAMISAS</h1>
        <p class="mb-4">Bem-vindo ao Paraíso das camisas, onde o conforto e estilo se encontram em perfeita harmonia. Nossa missão é proporcionar a você uma experiência única ao escolher suas roupas, especialmente quando se trata de camisas que se encaixam perfeitamente no seu estilo de vida.</p>
        <h2 class="text-xl font-bold mb-8">DE TODOS OS TAMANHOS</h2>
        <figure class="mb-4">
            <img src="/img/camisa.png" alt="Camisa" class="w-64 h-auto mx-auto mb-8" />
        </figure>
        <p class="mb-4"><a href="/" class=" bg-purple-700 border-4 rounded-3xl border-purple-800 px-5 py-2 m-8 hover:bg-purple-800">VOLTAR</a></p>
    </div>
</div>
  )
}
