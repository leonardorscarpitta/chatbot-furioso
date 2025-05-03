"use client";

import { useState, useRef, useEffect } from 'react';
import { Send, RefreshCw, AlertTriangle, Users, FileQuestion } from 'lucide-react';
import LoadPage from '../loading';

export default function FuriaChatbot() {
  const btnStyle = "bg-black flex items-center gap-x-2 bg-white-600 hover:bg-white-700 text-white cursor-pointer border-2 border-gray-400 p-2 transition duration-150"
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sessionId, setSessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const API_URL = process.env.REACT_APP_IP; // URL do Back End
  const chatContainerRef = useRef(null);
  const initialMessage = "Fala aí! Aqui é mais um Fã da Fúria, sobre o que vamos conversar hoje? Só pode ser sobre CS hein!";

  // Função para dar uma breve explicação de como funciona o chat bot
  const howToUse = () => {
    // Simulação de envio de uma mensagem do usuário pedindo a lista de jogadores
    const userMessage = {
      id: Date.now(), // Uso de timestamp para garantir que o ID é unico
      content: "Como funciona esse chat bot?",
      sender: "user"
    };
    
    // Resposta com uma breve explicação do chat bot
    const botResponse = {
      id: Date.now() + 1, // Garante que o id é unico
      content: "Olá meu caro jogador! Esse chat bot foi desenvolvido utilizando uma ApiKey da OpenAI, então as respostas são limitadas, mas foi desenvolvido com carinho!",
      sender: "bot"
    };
    
    // Adiciona as mensagens à conversa
    setMessages(prev => [...prev, userMessage, botResponse]);
  };

  // Função para listar os jogadores da equipe FURIA
  const listFuriaPlayers = () => {
    // Simulação de envio de uma mensagem do usuário pedindo a lista de jogadores
    const userMessage = {
      id: Date.now(), // Using timestamp for unique IDs
      content: "Quem são os jogadores da FURIA?",
      sender: "user"
    };
    
    // Resposta pré-definida com a lista de jogadores
    const botResponse = {
      id: Date.now() + 1, // Garante que o id é unico
      content: "Aqui está o atual lineup da FURIA CS2:\n\n• FalleN\n• yuurih\n• YEKINDAR\n• KSCERATO\n• molodoy\n• Coach: sidde",
      sender: "bot"
    };
    
    // Adiciona as mensagens à conversa
    setMessages(prev => [...prev, userMessage, botResponse]);
  };
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: (
        <div className="flex flex-col space-y-2">
          {/* Mensagem Inicial */}
          <span className="text-base">{initialMessage}</span>
          <div className="flex gap-x-2">
            <button 
              onClick={howToUse}
              className={btnStyle}
              title="Como usar"
            >
              <FileQuestion size={20} />
                <span className="text-xs">Ajuda</span>
            </button>
            <button 
              onClick={listFuriaPlayers}
              className={btnStyle}
              title="Listar jogadores da FURIA"
            >
              <Users size={20} />
                <span className="text-xs">LineUP</span>
            </button>
          </div>
        </div>
      ),
      sender: "bot"
    }
  ]);
  
  // Automaticamente descer a tela quando identificar o limite de mensagens
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, error, isLoading]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "" || isLoading) return;
    
    // Limpar erros anteriores
    setError(null);
    
    // Adicionar a mensagem do usuário
    const userMessage = {
      id: Date.now(), // Uso de timestamp para ID unico
      content: inputMessage,
      sender: "user"
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    
    try {
      // Chamar a API
      const response = await fetch(`http://localhost:5000/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          session_id: sessionId
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        // Tratar limites de mensagens
        if (response.status === 429) {
          setError({
            type: "rate_limit",
            message: data.message || "Você está enviando mensagens muito rápido. Aguarde um momento."
          });
          return;
        }
        
        throw new Error(data.message || 'Falha na comunicação com o servidor');
      }
      
      // Adicionar respostas do bot
      const botResponse = {
        id: Date.now() + 1, // Uso de timestamp para ID unico
        content: data.message,
        sender: "bot"
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Erro:', error);
      
      // Definir o estado de erro
      setError({
        type: "general",
        message: error.message || "Ocorreu um erro na comunicação com o servidor."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };
  
  const resetConversation = async () => {
    // Resetar conversação com o backend
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`http://localhost:5000/api/reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId
        }),
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Não foi possível reiniciar a conversa");
      }
      
      // Gerar um novo ID para a sessão
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      setSessionId(newSessionId);
      
      // Resetar mensagens
      setMessages([
        { 
          id: 1, 
          content: initialMessage, 
          sender: "bot" 
        }
      ]);
    } catch (error) {
      console.error('Erro ao resetar conversa:', error);
      setError({
        type: "reset",
        message: error.message || "Não foi possível reiniciar a conversa."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoadPage>
      <main 
        style = {{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }} 
      className="flex flex-col w-[80%] self-center h-[calc(100vh-172.75px)] text-gray-100">
        {/* Header */}
        <section className="bg-black border-b border-white-600 py-4 px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <span className="text-white-500 font-bold text-base">FURIA</span>
              <span className="text-gray-200 font-medium text-base ml-2">CHATBOT</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={resetConversation}
              className="text-gray-300 hover:text-white-500 flex items-center"
              title="Nova conversa"
              disabled={isLoading}
            >
              <RefreshCw size={18} className={isLoading ? "animate-spin" : ""} />
            </button>
          </div>
        </section>

        {/* Chat */}
        <section 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto px-4 py-6 space-y-4"
        >
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg px-4 py-2 ${
                  message.sender === "user" 
                    ? "bg-gray-600 text-white" 
                    : "bg-gray-800 text-white border-l-4 border-white-600"
                }`}
              >
                {/* Verifica se é string ou JSX */}
                {typeof message.content === "string" ? (
                  <span className="whitespace-pre-line">{message.content}</span>
                ) : (
                  message.content
                )}
              </div>
            </div>
          ))}
          
          {/* Mensagem de erro */}
          {error && (
            <div className="flex justify-center my-2">
              <div className="bg-red-900 border border-red-700 rounded-lg px-4 py-2 flex items-center text-white max-w-md">
                <AlertTriangle size={18} className="mr-2 text-white-400" />
                <p>404: Erro de Conexão com o Servidor!</p>
              </div>
            </div>
          )}
          
          {/* Indicador de carregando */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-gray-100 border-l-4 border-white-600 rounded-lg px-4 py-2 flex items-center">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-white-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-white-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-white-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
        </section>
        
        {/* Input */}
        <section className="border-t border-gray-800 bg-gray-900 p-4">
            <div className="flex-1 bg-gray-800 rounded-full border border-gray-700 flex items-center px-4 py-2">
              <input
                type="text"
                placeholder="Mande sua mensagem..."
                className="text-xs flex-1 bg-transparent focus:outline-none text-gray-200"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
              />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading || inputMessage.trim() === ""}
              className={`${
                isLoading || inputMessage.trim() === "" 
                  ? "bg-gray-700 text-gray-500 cursor-not-allowed" 
                  : "bg-white-600 hover:bg-white-700 text-white cursor-pointer"
              } rounded-full p-2 transition duration-150`}
            >
              <Send size={20} />
            </button>
          </div>
        </section>
      </main>
    </LoadPage>
  );
}