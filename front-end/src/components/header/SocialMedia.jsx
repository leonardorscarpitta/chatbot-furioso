import Image from "next/image";

export default function SocialMedia( props ) {
  const defaultSocialMediaSize = 45;

  return (
    <a href={props.href} target="_blank" rel="noopener">
      <Image className="bg-gray-900 p-2 rounded-full hover:opacity-70 transition-all" alt={`ícone da rede social {props.name}`} width={defaultSocialMediaSize} height={defaultSocialMediaSize} src={props.src} />
    </a>
  )
}