import React, { useState, useEffect, useRef } from 'react';
import './chat.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState('');
  const [showNameInput, setShowNameInput] = useState(true);
  const messagesEndRef = useRef(null);

  // Respuestas específicas para Zoom TV Canal 10
  const botResponses = {
    greeting: `¡Hola${userName ? ` ${userName}` : ''}! Soy el asistente de Zoom TV Canal 10. ¿En qué puedo ayudarte hoy?`,
    default: [
      "Puedo ayudarte con información sobre programación, noticias y eventos de Zoom TV Canal 10.",
      "¿Quieres saber sobre nuestros programas en vivo o nuestra programación diaria?",
      "En Zoom TV Canal 10 nos especializamos en contenido local y entretenimiento familiar.",
      "Puedo darte información sobre cómo contactar a nuestra producción o participar en programas."
    ],
    programacion: "Nuestra programación incluye noticias a las 7 AM, 1 PM y 7 PM, telenovelas por las tardes y variedades los fines de semana. ¿Quieres detalles de algún programa en particular?",
    contacto: "Puedes contactarnos al teléfono 555-1234, por WhatsApp al 555-5678 o visitar nuestro sitio web www.zoomtvcanal10.com",
    publicidad: "Para información sobre publicidad, escribe a publicidad@zoomtvcanal10.com o llama al 555-9012 de lunes a viernes de 9 AM a 5 PM.",
    reportero: "¿Tienes una noticia que reportar? Envíala a reportero@zoomtvcanal10.com con fotos o videos y tus datos de contacto.",
    horarios: "Transmitimos las 24 horas. Programación estelar de 7 PM a 10 PM y repeticiones de programas populares en la madrugada."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0 && !showNameInput) {
      // Mostrar mensaje de bienvenida cuando se abre el chat
      setTimeout(() => {
        setMessages([{ text: botResponses.greeting, sender: 'bot' }]);
      }, 500);
    }
  }, [isOpen, showNameInput]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() !== '') {
      setShowNameInput(false);
      setMessages([{ text: `¡Hola ${userName}! Soy el asistente de Zoom TV Canal 10. ¿En qué puedo ayudarte hoy?`, sender: 'bot' }]);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Agregar mensaje del usuario
    const userMessage = { text: inputValue, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Procesar la respuesta del bot
    setTimeout(() => {
      let botResponse = '';
      const userText = inputValue.toLowerCase();

      if (userText.includes('programación') || userText.includes('programacion') || userText.includes('horario')) {
        botResponse = botResponses.programacion;
      } else if (userText.includes('contacto') || userText.includes('llamar') || userText.includes('teléfono')) {
        botResponse = botResponses.contacto;
      } else if (userText.includes('publicidad') || userText.includes('anuncio')) {
        botResponse = botResponses.publicidad;
      } else if (userText.includes('reportero') || userText.includes('noticia')) {
        botResponse = botResponses.reportero;
      } else if (userText.includes('horario') || userText.includes('transmisión')) {
        botResponse = botResponses.horarios;
      } else {
        const randomDefault = botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
        botResponse = randomDefault;
      }

      const botMessage = { text: botResponse, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Retraso variable para parecer más natural
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0 && !showNameInput) {
      // Mostrar mensaje de bienvenida solo si no hay mensajes previos
      setTimeout(() => {
        setMessages([{ text: botResponses.greeting, sender: 'bot' }]);
      }, 300);
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button className="chatbot-toggle" onClick={toggleChat}>
        {isOpen ? (
          <span className="close-icon">×</span>
        ) : (
          <div className="chat-icon">
            <span className="tv-icon">📺</span>
            <span className="assistant-text">Zoom TV</span>
          </div>
        )}
      </button>
      
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="logo-container">
              <span className="tv-logo">📺</span>
              <h3>Zoom TV Canal 10</h3>
            </div>
            <p>Asistente Virtual</p>
          </div>
          
          <div className="chatbot-messages">
            {showNameInput ? (
              <div className="name-input-container">
                <div className="bot-message">
                  <p>¡Bienvenido al asistente de Zoom TV Canal 10! ¿Cuál es tu nombre?</p>
                </div>
                <form onSubmit={handleNameSubmit} className="name-form">
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Escribe tu nombre..."
                    autoFocus
                  />
                  <button type="submit">Continuar</button>
                </form>
              </div>
            ) : messages.length === 0 ? (
              <div className="welcome-message">
                <p>{botResponses.greeting}</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.sender === 'bot' && <span className="bot-avatar">📺</span>}
                  <div className="message-content">
                    {message.text}
                    {message.sender === 'bot' && (
                      <div className="message-time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    )}
                  </div>
                </div>
              ))
            )}
            
            {isTyping && (
              <div className="message bot">
                <span className="bot-avatar">📺</span>
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {!showNameInput && (
            <form onSubmit={handleSendMessage} className="chatbot-input">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu mensaje..."
                autoFocus
              />
              <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot; 