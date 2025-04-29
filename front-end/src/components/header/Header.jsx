import Image from "next/image";
import NavBar from "./NavBar";
import SocialIcons from "./SocialIcons";

export default function Header() {
  return (
    <header className="flex justify-around items-center py-4">
      <Image width={defaultImgSize} height={defaultImgSize} alt="Logo da Furia ESports, equipe de jogos online" src="https://liquipedia.net/commons/images/a/ad/FURIA_Esports_full_darkmode.png" />
      <NavBar />
      <SocialIcons />
    </header>
  )
}