import { useEffect, useRef, useState } from "react";
import { HiOutlinePaperAirplane, HiOutlineXMark, HiOutlineSparkles } from "react-icons/hi2";
import { answerQuestion, suggestedQuestions } from "../data/assistant.js";

const WELCOME =
  "Hi — I am Anitha’s assistant. Ask me who she is, how she works, or about ORDINA, HarmonyHub, and MAT77. I will answer from her real portfolio, not generic filler.";

export default function Assistant({ open, onOpen, onClose }) {
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState(() => [
    { role: "assistant", text: WELCOME },
  ]);
  const listRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const node = listRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages, open, pending]);

  function ask(question) {
    const text = question.trim();
    if (!text || pending) return;
    setInput("");
    setMessages((current) => [...current, { role: "user", text }]);
    setPending(true);
    window.setTimeout(() => {
      const reply = answerQuestion(text);
      setMessages((current) => [...current, { role: "assistant", text: reply }]);
      setPending(false);
    }, 280);
  }

  function handleSubmit(event) {
    event.preventDefault();
    ask(input);
  }

  return (
    <>
      <button
        type="button"
        onClick={open ? onClose : onOpen}
        className="fixed z-[60] bottom-5 right-5 focus-ring flex items-center gap-2 pl-4 pr-3 py-3 rounded-full bg-green text-white shadow-lg hover:bg-greenDeep transition-colors"
        aria-expanded={open}
        aria-controls="anitha-assistant"
        aria-label={open ? "Close Anitha assistant" : "Open Anitha assistant"}
      >
        <HiOutlineSparkles className="w-5 h-5 text-gold" />
        <span className="text-sm font-medium pr-1 hidden sm:inline">{open ? "Close" : "Ask Anitha"}</span>
      </button>

      {open && (
        <section
          id="anitha-assistant"
          className="fixed z-[60] bottom-24 right-5 left-5 sm:left-auto sm:w-[26rem] bg-cream border border-line rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[min(34rem,70vh)]"
          aria-label="Anitha portfolio assistant"
        >
          <header className="bg-green px-5 py-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-gold text-xs font-medium mb-1">Portfolio assistant</p>
              <h2 className="font-display font-semibold text-white text-lg leading-tight">Talk with Anitha’s AI</h2>
              <p className="text-white/65 text-xs mt-1">Grounded in her real work and story.</p>
            </div>
            <button type="button" onClick={onClose} className="focus-ring text-white/80 hover:text-white" aria-label="Close assistant">
              <HiOutlineXMark className="w-6 h-6" />
            </button>
          </header>

          <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-cream">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <p
                  className={`max-w-[90%] whitespace-pre-wrap text-sm leading-relaxed rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-green text-white rounded-br-md"
                      : "bg-card text-ink rounded-bl-md border border-line"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
            {pending && (
              <p className="text-xs text-muted px-1">Thinking…</p>
            )}
          </div>

          <div className="px-4 pb-3 flex flex-wrap gap-2">
            {suggestedQuestions.map((question) => (
              <button
                key={question}
                type="button"
                onClick={() => ask(question)}
                className="focus-ring text-xs px-3 py-1.5 rounded-full bg-surface text-ink border border-line hover:border-gold hover:text-greenFg transition-colors"
              >
                {question}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-line p-3 flex items-center gap-2 bg-surface">
            <label className="sr-only" htmlFor="assistant-input">Ask about Anitha</label>
            <input
              id="assistant-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Who is Anitha?"
              autoComplete="off"
              className="flex-1 bg-cream border border-line rounded-full px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:outline-none focus:border-gold"
            />
            <button
              type="submit"
              disabled={pending || !input.trim()}
              className="focus-ring w-10 h-10 rounded-full bg-green text-white flex items-center justify-center hover:bg-greenDeep disabled:opacity-50"
              aria-label="Send question"
            >
              <HiOutlinePaperAirplane className="w-4 h-4" />
            </button>
          </form>
        </section>
      )}
    </>
  );
}
