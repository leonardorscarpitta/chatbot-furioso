import Image from "next/image";
import Link from "next/link";

export default function Header() {
  let defaultSize = 55;
  let navItemsStyle = "text-white font-extrabold uppercase text-2x hover:opacity-70 transition";

  return (
    <header className="flex justify-around items-center py-4">
      <Image width={defaultSize} height={defaultSize} alt="Logo da Furia ESports, equipe de jogos online" src="https://liquipedia.net/commons/images/a/ad/FURIA_Esports_full_darkmode.png" />
      <div className="flex items-center gap-x-10">
        <Link href="/" className={navItemsStyle}>Home</Link>
        <Link href="/chatbot" className={navItemsStyle}>ChatBot Furioso</Link>
        <Link href="/analisefa" className={navItemsStyle}>Análises do Fã</Link>
      </div>
    </header>
  )
}