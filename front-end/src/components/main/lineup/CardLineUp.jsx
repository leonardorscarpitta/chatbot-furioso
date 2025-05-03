import Image from "next/image";

export default function CardLineUp( props ) {
  return (
    <div className="h-135 shadow-xl/20 text-white bg-gradient-to-b from-black to-gray-900 flex w-3xs flex-col gap-y-4 rounded-lg p-4">
      <h4 className="flex gap-x-1 items-center">
          <Image src={props.nacionality} alt={`imagem da bandeira em que o jogador ${props.playerName} nasceu`} width={20} height={20} />
          {props.playerName} 
        <small className="text-xs font-bold uppercase text-green-500">
          {props.playerFunction}
        </small></h4>
      <Image width={400} height={417} src={props.playerImg} alt={props.altText} />
      <p className="text-base font-bold">{props.birthDate}</p>
      <p>{props.description}</p>
    </div>
  )
}