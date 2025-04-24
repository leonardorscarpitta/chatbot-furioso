import LoadingAnimation from "@/utils/LoadingAnimation";
import Image from "next/image";
import Link from "next/link";

export default function Main() {

  return (
    <main className="flex flex-col gap rounded-[16px] gap-y-15 justify-center items-center">
      <LoadingAnimation />
      <section className="flex flex-col items-center">
        <h3 className="text-6xl uppercase font-extrabold text-white">Construindo Juntos</h3>
        <h3 className="text-6xl uppercase font-extrabold text-[#adadad]">O Futuro do ESports</h3>
      </section>
      <Image alt="torcedor da furia com bandeira do brasil no campeonato em frente a logo da furia esports" className="rounded-lg shadow-[0px_0px_50px_-5px_#adadad]" width={640} height={512} src="https://pley.gg/wp-content/uploads/2024/12/teamsFuriafuria_ed6lhn-9.jpg" />
      <p className="text-white text-2xl">
        Converse com nosso chat Bot <Link className="underline text-[#eee] hover:opacity-80 transition" href="/chatbot">clicando aqui</Link> para conversar com um player secreto da Furia!
      </p>
    </main>
  )
}