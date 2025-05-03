import Link from "next/link";
import Image from "next/image";

export default function BtnLink() {
  let btnStyle = "flex items-center gap-x-1 text-xs text-center uppercase p-4 bg-[#906C24] text-white font-bold rounded-lg hover:opacity-80 transition hover:bg-gradient-to-b hover:from-[#FCE240] hover:to-[#906C24]";

  return (
    <div className="sm:flex-row flex flex-col gap-4">
      <Link href="/chatbot" className={btnStyle}><Image src="https://liquipedia.net/commons/images/thumb/d/da/Counter-Strike_2_default_darkmode.png/47px-Counter-Strike_2_default_darkmode.png" alt="icone de um robô" width={30} height={30} />Converse com um jogador</Link>
      <Link href="/analisefa" className={btnStyle}><Image src="https://img.icons8.com/dotty/80/FFFFFF/graph.png" alt="icone de um robô" width={30} height={30} />Preencha seu perfil do Fã</Link>
    </div>
  )
}