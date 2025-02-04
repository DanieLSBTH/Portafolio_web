import React, { useState, useRef, useEffect } from 'react';
import '../Css/ChatBotExample.css';
import agentIcon from '../Images/backgrounds/lobo.png';
import userIcon from '../Images/backgrounds/user-icon.png';
import sendIcon from '../Images/backgrounds/send-icon.png';
import closeIcon from '../Images/backgrounds/close-icon.png';
import ReactPlayer from 'react-player/youtube';

const ChatBotExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: '¡Hola! Soy WolBot 🤖. ¿Cómo te llamas?', isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const messageContainerRef = useRef(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const mostrarMensajeConTyping = async (mensaje, delay = 1000) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, delay));
    setIsTyping(false);
    setMessages(prevMessages => [...prevMessages, { text: mensaje, isBot: true }]);
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = input.trim().toLowerCase();
      const newMessages = [...messages, { text: input, isBot: false }];
      
      setMessages(newMessages);
      setInput('');

      if (!userName) {
        setUserName(userMessage);
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prevMessages => [
            ...prevMessages,
            { text: `Mucho gusto, ${userMessage}! 🤭 puedo mostrarte los videos de los siguientes sistemas.`, isBot: true }
          ]);
          setShowOptions(true);
          mostrarOpciones();
        }, 1000);
      } else if (showOptions) {
        if (/^\d+$/.test(userMessage)) {
          const optionNumber = parseInt(userMessage);
          if (optionNumber >= 1 && optionNumber <= 3) {
            setSelectedOption(optionNumber);
            await mostrarMensajeConTyping(`Has seleccionado la opción ${optionNumber}.`);
            mostrarVideo(optionNumber);
          } else {
            await mostrarMensajeConTyping('Por favor, ingresa un número válido entre 1 y 3. 🫤');
          }
        } else if (esFraseComun(userMessage)) {
          await mostrarMensajeConTyping(respuestaAFraseComun(userMessage));
        } else {
          await mostrarMensajeConTyping('No estoy conectado a mi servidor 🥲, por lo que estoy limitado. Puedes ingresar un número entre 1 y 3 para seleccionar una opción. 🙄');
        }
      }
    }
  };

  const mostrarOpciones = async () => {
    await mostrarMensajeConTyping('Aquí tienes algunas opciones 👀:');
    await mostrarMensajeConTyping('1. Sistema web banco de leche');
    await mostrarMensajeConTyping('2. Sistema farmacia en linea');
    await mostrarMensajeConTyping('3. Sistema recursos humanos');
    await mostrarMensajeConTyping('Por favor, ingresa el número de la opción que te interesa.');
  };

  const mostrarVideo = async (optionNumber) => {
    const videos = [
      'https://www.youtube.com/watch?v=frYaXErqZOU', // Ejemplo de video 1
      'https://www.youtube.com/watch?v=SIt9t6arZKs', // Ejemplo de video 2
      'https://www.youtube.com/watch?v=d5qqSvKxwkI'  // Ejemplo de video 3
    ];

    const videoUrl = videos[optionNumber - 1];
    setMessages(prevMessages => [
      ...prevMessages,
      { text: `Aquí tienes el video de la opción ${optionNumber}:`, enlace: videoUrl, isBot: true }
    ]);
  };

  const esFraseComun = (mensaje) => {
    const frasesComunes = ['hola', 'como estas', 'que tal', 'buenos dias', 'buenas tardes', 'buenas noches', 'a ver'];
    return frasesComunes.includes(mensaje);
  };

  const respuestaAFraseComun = (mensaje) => {
    switch (mensaje) {
      case 'hola':
        return '¡Hola! ¿En qué puedo ayudarte?';
      case 'como estas':
        return 'Estoy bien, gracias por preguntar. ¿Y tú?';
      case 'que tal':
        return 'Todo bien por aquí. ¿En qué puedo ayudarte?';
      case 'buenos dias':
        return '¡Buenos días! ¿En qué puedo ayudarte hoy?';
      case 'buenas tardes':
        return '¡Buenas tardes! ¿En qué puedo ayudarte?';
      case 'buenas noches':
        return '¡Buenas noches! Espero que hayas tenido un buen día. ¿En qué puedo ayudarte?';
      case 'a ver':
        return 'Claro, aquí tienes las opciones nuevamente:';
      default:
        return 'No entiendo lo que dices. ¿Puedes ser más específico?';
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>
      {isOpen && (
        <div className="chatbox">
          <div className="chatbox-header">
            <span>Chatbot</span>
            <img
              src={closeIcon}
              alt="Close"
              className="close-icon"
              onClick={handleClose}
            />
          </div>
          <div className="message-container" ref={messageContainerRef} aria-live="polite">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.isBot ? 'bot' : 'user'}`}>
                {message.isBot ? (
                  <>
                    <img src={agentIcon} alt="Agent" className="message-icon" />
                    <div className="message-bubble bot-bubble">
                      {message.text}
                      {message.enlace && (
                        <>
                          <a href={message.enlace} target="_blank" rel="noopener noreferrer">
                            {message.enlace}
                          </a>
                          {message.enlace.includes('youtube.com') && (
                            <div className="video-container">
                              <ReactPlayer 
                                url={message.enlace} 
                                controls={true} 
                                width="100%" 
                                height="200px"
                                light={true} // Muestra la vista previa (thumbnail)
                                playIcon={
                                  <button style={{
                                    backgroundColor: 'rgba(0,0,0,0.6)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '64px',
                                    height: '64px',
                                    cursor: 'pointer'
                                  }}>
                                    ▶
                                  </button>
                                }
                                config={{
                                  youtube: {
                                    playerVars: { origin: window.location.origin }
                                  }
                                }}
                              />
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="message-bubble user-bubble">{message.text}</div>
                    <img src={userIcon} alt="User" className="message-icon" />
                  </>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            )}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Escriba el mensaje..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <img
              src={sendIcon}
              alt="Send"
              className="send-icon"
              onClick={handleSend}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBotExample;