import CardLineUp from "./CardLineUp";

export default function LineUp() {
  return (
    <section className="flex flex-col gap-y-4 jusity-center items-center">
      <h3 className="text-white text-2xl uppercase font-bold">Line UP dos Furiosos</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 flex-col gap-4 items-center justify-center">

        <CardLineUp nacionality="https://img.icons8.com/color/48/brazil.png" playerName="FalleN" playerFunction="igl | awper" playerImg="https://img-cdn.hltv.org/playerbodyshot/Wf26SO_o8nvnsLh0AqZXc5.png?ixlib=java-2.1.0&w=400&s=36b7189a4ae7b020d0acb087fd44777a" altText="imagem do jogador fallen da furia" description={`Após a saída de Andrei "arT" Piovezan, FalleN reassumiu a função de capitão da equipe, liderando as estratégias e desempenhando o papel de AWPER.`} birthDate="30/05/1991"/>

        <CardLineUp nacionality="https://img.icons8.com/color/48/brazil.png" playerName="yuurih" playerFunction="rifler" playerImg="https://img-cdn.hltv.org/playerbodyshot/i6UGhkYxrhutAOmWZT0-8O.png?ixlib=java-2.1.0&w=400&s=2cd696f6ff4baf5680a43d537214b6eb" altText="imagem do jogador yuurih da furia" description={`Com uma longa trajetória na FURIA, yuurih mantém seu papel de rifler, contribuindo significativamente para o desempenho da equipe.`} birthDate="22/12/1999"/>

        <CardLineUp nacionality="https://img.icons8.com/color/48/brazil.png" playerName="KSCERATO" playerFunction="rifler" playerImg="https://img-cdn.hltv.org/playerbodyshot/U6t0j2bJDKUR3mTI8rIqv7.png?ixlib=java-2.1.0&w=400&s=b5257c378b8122f415f21985855e95ca" altText="imagem do jogador kscerato da furia" description={`Reconhecido por sua consistência e habilidade em situações de clutch, KSCERATO continua sendo uma peça fundamental na equipe.`} birthDate="12/09/1999"/>

        <CardLineUp nacionality="https://img.icons8.com/color/48/latvia.png" playerName="YEKINDAR" playerFunction="entry fragger" playerImg="https://img-cdn.hltv.org/playerbodyshot/rRclDPBXIMxFv2fv0dV0J0.png?ixlib=java-2.1.0&w=400&s=2b0f6209ca40efa081852b9d1d8e01c1" altText="imagem do jogador yekindar da furia" description={`YEKINDAR é um rifler letão agressivo, ex-Team Liquid e Virtus.pro, conhecido por abrir espaços e jogar como entry fragger com alta precisão e leitura de jogo.`} birthDate="04/12/1999"/>

        <CardLineUp nacionality="https://img.icons8.com/color/48/kazakhstan.png" playerName="molodoy" playerFunction="rifler" playerImg="https://img-cdn.hltv.org/playerbodyshot/qNyAd_xVHTTmbCAKPx-jPk.png?ixlib=java-2.1.0&w=400&s=b128ede878e462107c70590202b14139" altText="imagem do jogador fallen da furia" description={`molodoy é oriundo do Cazaquistão, país natal de campeões mundiais como Abay HObbit e Qikert . Os primeiros passos no competitivo foram dados quando tinha apenas 15 anos.`} birthDate="10/01/2005"/>

      </div>
    </section>
  )
}