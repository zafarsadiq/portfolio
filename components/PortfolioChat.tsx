'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import './PortfolioChat.css';

export default function PortfolioChat() {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n-portfolio-bot-meon.onrender.com/webhook/abe51811-db51-4ab9-91af-b6c5eb70f439/chat',
      initialMessages: [
        "Hi there! I'm Zafar's AI assistant.",
        "Ask me anything about Zafar's skills, projects & availability"
      ],
      i18n: {
        en: {
          title: "Chat with Zafar's AI Assistant",
          subtitle: "Ask about skills, projects & availability",
          inputPlaceholder: "Ask a question about Zafar...",
        }
      }
    });
  }, []);

  return null;
}

