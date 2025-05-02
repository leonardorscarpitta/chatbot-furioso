# Chat Bot Furioso - Back End
- Esse projeto é o back end que foi desenvolvido como um challenge para Estagiário de Engenharia de Software da FURIA, totalmente feito em Python + FlaskAPI e com o deploy realizado na plataforma Render.

## Manual de Instalação (Rodar Localmente para testes)
> [!NOTE]
> Você deve ter o [Python](https://www.python.org/downloads/) instalado na máquina (caso use linux, ele já vem instalado por padrão).
1. Realize o clone do projeto.
```
git clone git@github.com:leonardorscarpitta/chatbot-furioso-backend.git
```
2. Navegue até o diretório do projeto.
```bash
cd chatbot-furioso-backend
```
3. Realize a instalação das bibliotecas necessárias (se preferir crie um [Ambiente Virtual](README### Criação de um ambiente virtual com python) - para que os arquivos não sejam instalados diretamente em sua máquina).
```bash
pip install requirements.txt
```

### Criação de um ambiente virtual com python (venv)
- Criação do ambiente virtual
```bash
python -m venv <nome_do_diretório>
```
- Ativação do ambiente virtual
```bash
# Windows
source <nome_do_diretorio>/Scripts/activate
# Linux
source <nome_do_diretorio>/bin/activate
```
📌 E por fim você já pode realizar a instalação das bibliotecas necessárias.
4. Realize a configuração do arquivo `.env` com as variáveis de Keys.
```env
OPENAI_API_KEY=""       # Chave da API do OpenAI
GOOGLE_API_KEY=""       # Chave da API do Google
GOOGLE_CSE_ID=""        # ID do mecanismo de pesquisa personalizado do Google
PORT=5000               # Porta para o servidor Backend (padrão: 5000)
```

## Estrutura do Projeto
### Métodos da API

| MÉTODO | DESCRIÇÃO |
|--------|-----------|
| **sanitize_user_input(message)** | Remove tentativas de "prompt injection" (instruções maliciosas para manipular o comportamento do chatbot); Limita o tamanho da mensagem do usuário a 200 caracteres; retorna uma mensagem sanitizada. |
| **should_search(message)** | Determina se a mensagem do usuário requer informações atualizadas; Verifica se a mensagem contém palavras-chave relacionadas a CS2/FURIA e se é uma pergunta relevante; Retorna True se for necessário realizar uma busca. |
| **create_search_query(message)** | Cria uma query otimizada para busca com base na mensagem do usuário; Remove palavras comuns irrelevantes e adiciona termos como "furia" e "cs2" se não estiverem presentes; Retorna a query final. |
| **search_with_google_api(query, num_results=3)** | Realiza uma pesquisa usando a API do Google Custom Search; Implementa controle de limite de requisições por minuto e por dia; Verifica o cache para evitar buscas repetidas; Retorna os resultados da pesquisa ou uma mensagem de erro. |
| **format_search_results(results)** | Formata os resultados da pesquisa para serem incluídos no prompt da IA; Retorna um texto formatado com os títulos e trechos dos resultados. |
| **rate_limit_decorator(f)** | Um decorador para aplicar limites de requisições por IP e sessão; Verifica limites por minuto; por dia e o número de sessões concorrentes; Retorna uma mensagem de erro se os limites forem excedidos. |
| **cleanup_inactive_sessions()** | Remove sessões inativas (sem atividade por mais de 30 minutos) para economizar memória; Atualiza os mapeamentos de IPs e sessões. |
| **get_ai_response(user_message, session_id)** | Processa a mensagem do usuário e retorna uma resposta da IA; Sanitiza a entrada do usuário; Verifica se é necessário buscar informações atualizadas; Monta o histórico da conversa e envia uma requisição para a API da OpenAI; Adiciona a resposta da IA ao histórico e retorna a resposta. |

### Endpoints da API

| HTTP       |     URL      |       DESCRIÇÃO         |
| ---------- | ------------ | ----------------------- |
| `POST`   | _/api/chat_    | Endpoint principal para o chatbot; recebe uma mensagem do usuário e um session_id; Retorna a resposta da IA em formato JSON. |
| `POST`   | _/api/reset_  | Endpoint para reiniciar uma conversa; remove o histórico da conversa associado ao session_id. |
| `POST`   | _/api/clear_cache_  | Endpoint administrativo para limpar o cache de pesquisa; requer autenticação simples com uma chave de administrador. |
| `GET`    | _/api/health_ | Endpoint para verificar o status do serviço; retorna informações como o número de sessões ativas; se a busca está habilitada e o tempo de atividade. |
| `GET`    | _/api/search_stats_ | Endpoint administrativo para exibir estatísticas de pesquisa; retorna informações como o número de buscas realizadas e o tamanho do cache; requer autenticação simples com uma chave de administrador. |

