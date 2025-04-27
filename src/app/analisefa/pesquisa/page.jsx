export default function Pesquisa() {
  let inputStyle = `
    w-full bg-gray-700 rounded-full px-4 py-2 text-white placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-yellow-400
  `;

  return (
    <main className="flex items-center justify-center p-8">
      <section className="bg-gray-800 rounded-2xl p-8 w-full max-w-md shadow-lg">
        {/* Título */}
        <h1 className="text-2xl font-bold text-center text-white mb-8">
          PESQUISA - FÚRIA
        </h1>

        {/* Formulário */}
        <form className="flex flex-col gap-4 text-gray-200">
          
          {/* Campos de texto */}
          <input type="text" placeholder="Nome Completo" className={inputStyle} />
          <input type="email" placeholder="Email" className={inputStyle} />
          <input type="number" min={6} max={99} placeholder="Idade" className={inputStyle} />
          
          {/* Select Estado */}
          <select className={inputStyle}>
            <option>Estado onde reside</option>
            <option>Acre</option>
              <option>Alagoas</option>
              <option>Amapá</option>
              <option>Amazonas</option>
              <option>Bahia</option>
              <option>Ceará</option>
              <option>Distrito Federal</option>
              <option>Espírito Santo</option>
              <option>Goiás</option>
              <option>Maranhão</option>
              <option>Mato Grosso</option>
              <option>Mato Grosso do Sul</option>
              <option>Minas Gerais</option>
              <option>Pará</option>
              <option>Paraíba</option>
              <option>Paraná</option>
              <option>Pernambuco</option>
              <option>Piauí</option>
              <option>Rio de Janeiro</option>
              <option>Rio Grande do Norte</option>
              <option>Rio Grande do Sul</option>
              <option>Rondônia</option>
              <option>Roraima</option>
              <option>Santa Catarina</option>
              <option>São Paulo</option>
              <option>Sergipe</option>
              <option>Tocantins</option>
          </select>

          {/* Select Gênero */}
          <select className={inputStyle}>
            <option>Gênero</option>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Não Binário</option>
            <option>Prefiro não dizer</option>
          </select>

          {/* Gasto com produtos */}
          <input type="number" step="0.01" name="value" placeholder="R$ Valor gasto com produtos" className={inputStyle} />

          {/* Interesses - Jogos */}
          <div className="flex flex-col gap-2">
            <label>Selecione os jogos que você tem interesse:</label>
            <div className="flex flex-wrap gap-4">
              <label><input type="checkbox" /> CS2</label>
              <label><input type="checkbox" /> Rocket League</label>
              <label><input type="checkbox" /> Valorant</label>
              <label><input type="checkbox" /> LoL</label>
            </div>
          </div>

          {/* Quantidade de eventos */}
          <select className={inputStyle}>
            <option>Quantos eventos da Fúria você já participou?</option>
            <option>0</option>
            <option>1-3</option>
            <option>4-6</option>
            <option>7+</option>
          </select>

          {/* Redes sociais */}
          <div className="flex flex-col gap-2">
            <label>Selecione as redes sociais em que acompanha a Fúria:</label>
            <div className="flex flex-wrap gap-4">
              <label><input type="checkbox" /> YouTube</label>
              <label><input type="checkbox" /> Twitch</label>
              <label><input type="checkbox" /> Instagram</label>
              <label><input type="checkbox" /> X</label>
            </div>
          </div>

          {/* Botão */}
          <button className="hover:opacity-80 cursor-pointer bg-[#906C24] mt-6 text-white font-bold py-2 rounded-full hover:bg-[#906C24] transition-all flex items-center justify-center gap-2">
            ENVIAR QUESTIONÁRIO
          </button>

        </form>
      </section>
    </main>
  );
}
