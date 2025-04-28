import Image from "next/image";
import Link from "next/link";

export default function FuriaAnalysis() {
  return (
    <main className="flex flex-col gap-y-16 items-center">
      <section className="flex flex-col items-center">
        <h3 className="text-6xl uppercase font-extrabold text-white">Entenda o que os Fãs</h3>
        <h3 className="text-6xl uppercase font-extrabold text-[#adadad]">Mais gostam na Furia ESports</h3>
        <p className="text-2xl uppercase font-extrabold text-white">Pesquisas realizadas utilizando os dados que são fornecidos pelos clientes!</p>
      </section>
      <Image className="rounded-lg" alt="imagem de um banner da furia esports" width={640} height={360} src="https://assets.fallenstore.com.br/lp/mousepad/furia/pro_furia_edition_grande/images/bg_mousepad_furia_edition.webp" />
      <section className="flex flex-col">
        <p className="self-center text-2xl uppercase font-extrabold text-white">Com o objetivo de mapear o perfil do torcedor da Fúria,</p>
        <p className="self-center text-2xl uppercase font-extrabold text-[#adadad]">Uma solução utilizando <strong>Ciência de Dados</strong> foi desenvolvida</p>
        <Link href="/analisefa/pesquisa" className="mt-4 p-4 bg-[#906C24] text-white font-bold rounded-lg hover:opacity-80 transition uppercase self-center">Participe da pesquisa</Link>
      </section>
    </main>
  )
}
