import Image from "next/image";
import SocialIcons from "./SocialIcons";
import HamburgerMenu from "./Menu";

export default function Header() {
  const defaultImgSize = 50;

  return (
    <header className="flex justify-around items-center py-4">
      <Image width={defaultImgSize} height={defaultImgSize} alt="Logo da Furia ESports, equipe de jogos online" src="https://liquipedia.net/commons/images/a/ad/FURIA_Esports_full_darkmode.png" />
      <div className="flex justify-center items-center gap-x-4">
        <SocialIcons />
        <HamburgerMenu />
      </div>
    </header>
  )
}