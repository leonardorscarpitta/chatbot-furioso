import Image from "next/image";
import Link from "next/link";

export default function Main() {
  let btnStyle = "uppercase p-4 bg-[#906C24] text-white font-bold rounded-lg hover:opacity-80 transition hover:bg-gradient-to-b hover:from-[#FCE240] hover:to-[#906C24]";

  return (
    <main className="flex flex-col gap rounded-[16px] gap-y-15 justify-center items-center m-[5%]">
      <section className="flex flex-col items-center">
        <h3 className="text-6xl uppercase font-extrabold text-white">Construindo Juntos</h3>
        <h3 className="text-6xl uppercase font-extrabold text-[#adadad]">O Futuro do ESports</h3>
      </section>
      <Image alt="torcedor da furia com bandeira do brasil no campeonato em frente a logo da furia esports" className="rounded-lg shadow-[0px_0px_50px_-5px_#adadad]" width={640} height={512} src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/3315649/large_e16c13ca11a88104cde6804ada716d03.png" />

      <div className="flex gap-x-8">
        <Link href="/chatbot" className={btnStyle}>Converse com um jogador de CS2</Link>
        <Link href="/analisefa" className={btnStyle}>Preencha seu perfil do Fã</Link>
      </div>
    </main>
  )
}