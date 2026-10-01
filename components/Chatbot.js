'use client';

import { useState, useRef, useEffect } from 'react';

const GREETING =
  'Hi! I am Plastic Pal ♻️. Ask me about plastic waste, how it is made, or any of the six case studies: school plastic fees, the Great Pacific Garbage Patch, microplastics in soil, plastic roads, plastic bricks, or Plastoline.';

const SUGGESTIONS = [
  'What is microplastic?',
  'How are plastic roads made?',
  'Explain the GPGP',
  'How can my school reduce plastic?'
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'bot', text: GREETING }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const send = async (question) => {
    const q = (question ?? input).trim();
    if (!q || loading) return;

    setMessages((m) => [...m, { from: 'user', text: q }]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: q })
      });
      const data = await res.json();
      setMessages((m) => [...m, { from: 'bot', text: data.reply || 'No response.' }]);
    } catch {
      setMessages((m) => [
        ...m,
        { from: 'bot', text: 'Network error. Please check your connection and try again.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const showSuggestions = messages.length === 1 && !loading;

  return (
    <>
      <button
        className="chat-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chatbot' : 'Open chatbot'}
        aria-expanded={open}
      >
        {open ? '×' : '💬'}
      </button>

      {open && (
        <div className="chat-window" role="dialog" aria-label="Plastic Pal chatbot">
          <div className="chat-header">
            <span>Plastic Pal — ask me anything ♻️</span>
            <button onClick={() => setOpen(false)} aria-label="Close chatbot">
              ×
            </button>
          </div>

          <div className="chat-body" ref={bodyRef} aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                {m.text}
              </div>
            ))}
            {loading && <div className="msg bot">…thinking</div>}
          </div>

          {showSuggestions && (
            <div className="chat-suggestions">
              {SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="chat-input">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask about plastic waste…"
              aria-label="Your question"
              maxLength={800}
            />
            <button onClick={() => send()} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
