import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

function AIChatbot({ onClose }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! 👋 I am FARM SYNC AI Assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')

  const botResponses = {
    weather: 'Based on your location, the weather forecast shows sunny conditions with 65% humidity tomorrow.',
    disease: 'Common crop diseases include powdery mildew, leaf spot, and rust. I recommend using neem oil spray.',
    fertilizer: 'For your soil type, I suggest using NPK 20:20:20 fertilizer. Apply 50kg per acre.',
    seeds: 'High-yield seed varieties suitable for your region are available in our marketplace.',
    default: 'That\'s a great question! I can help with weather, diseases, fertilizers, seeds, and more.'
  }

  const handleSendMessage = () => {
    if (!input.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages([...messages, userMessage])
    setInput('')

    setTimeout(() => {
      let response = botResponses.default
      const lowerInput = input.toLowerCase()
      if (lowerInput.includes('weather')) response = botResponses.weather
      else if (lowerInput.includes('disease')) response = botResponses.disease
      else if (lowerInput.includes('fertilizer')) response = botResponses.fertilizer
      else if (lowerInput.includes('seed')) response = botResponses.seeds

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: response,
          sender: 'bot',
          timestamp: new Date()
        }
      ])
    }, 500)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-4 right-4 w-96 h-96 bg-white rounded-lg shadow-2xl flex flex-col z-50 border-2 border-primary-300"
      >
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="font-bold flex items-center gap-2">
            <MessageCircle size={20} />
            FARM SYNC AI
          </h3>
          <button
            onClick={onClose}
            className="hover:bg-primary-700 p-1 rounded transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, x: msg.sender === 'user' ? 10 : -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-primary-600 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t-2 border-gray-200 p-3 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask something..."
            className="flex-1 px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 text-sm"
          />
          <button
            onClick={handleSendMessage}
            className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition"
          >
            <Send size={18} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default AIChatbot
