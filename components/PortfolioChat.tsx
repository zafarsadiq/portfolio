'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import './PortfolioChat.css';

export default function PortfolioChat() {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://onrender.com',
      initialMessages: [
        "Hi there! I'm Zafar's AI assistant.",
        "Ask me anything about Zafar's skills, projects & availability"
      ],
      i18n: {
        en: {
          title: "Chat with Zafar's AI Assistant",
          subtitle: "Ask about skills, projects & availability",
          footer: "",
          getStarted: "New Conversation",
          inputPlaceholder: "Ask a question about Zafar...",
          closeButtonTooltip: "Close chat",
        }
      }
    });

    // Auto-open chat window 3 seconds after page load
    const timer = setTimeout(() => {
      const toggleBtn = document.querySelector<HTMLButtonElement>('.chat-window-toggle');
      const wrapper = document.querySelector('.chat-window-wrapper');

      if (toggleBtn && wrapper && !wrapper.classList.contains('chat-window-open')) {
        toggleBtn.click();
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
