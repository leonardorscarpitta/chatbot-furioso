import Header from "@/components/Header";
import LoadingAnimation from "@/utils/LoadingAnimation";

export default function FuriaAnalysis() {
  return (
    <>
      <LoadingAnimation />
      <section className="flex flex-col items-center">
        <h3 className="text-6xl uppercase font-extrabold text-white">Entenda o que os Fãs</h3>
        <h3 className="text-6xl uppercase font-extrabold text-[#adadad]">Mais gostam na Furia ESports</h3>
        <p className="text-2xl uppercase font-extrabold text-white">Pesquisas realizadas utilizando o <a href="https://www.youtube.com/@FURIAggCS" target="_blank">Canal do YouTube da Furia</a></p>
      </section>
      <p></p>
    </>
  )
}
