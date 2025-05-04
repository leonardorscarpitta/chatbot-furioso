import UpMain from "./UpMain";
import BtnLink from "./BtnLink";
import LineUp from "./lineup/LineUp";

export default function Main() {
  return (
    <main className="flex flex-col gap rounded-[16px] gap-y-15 justify-center items-center m-[5%]">
      <UpMain />
      <img alt="furia - vencedores do elisa masters espo 2023" className="rounded-lg shadow-[0px_0px_50px_-5px_#adadad]" width={548} height={364} src="https://img-cdn.hltv.org/gallerypicture/wp-Rj5_WWb2ZmvOX5XDsb2.jpg?auto=compress&ixlib=java-2.1.0&m=%2Fm.png&mw=874&mx=162&my=3885&q=75&w=6563&s=ec418cdce86f9b0abde9ed42026ff58a" />
      <BtnLink />
      <LineUp />
    </main>
  )
}