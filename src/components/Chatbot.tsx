import { useState } from "react";
import ChatLogItem from "./chat/ChatLogItem";
import TypingAnimation from "./chat/TypingAnimation";
import axiosChat from "../api/axiosChat";
import { ChatCompletion } from "../data/chatData";
interface ChatMessage {
  type: "user" | "bot";
  message: string;
}

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };

  const sendMessage = (message: string) => {
    const URL = "/completions";

    const data = {
      model: "openai/gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    };

    setIsLoading(true);

    axiosChat<ChatCompletion>({ method: "POST", url: URL, data: data })
      .then((response) => {
        console.log(response);
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.choices[0].message.content },
        ]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };
  return (
    <>
      {/* component */}
      <div>
        <button
          id="chatbot"
          className={`fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium border rounded-full w-16 h-16 bg-green-600 hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900 ${
            isChatOpen ? "chat-open" : "chat-closed"
          }`}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={isChatOpen}
          onClick={toggleChat}
        >
          <svg
            xmlns=" http://www.w3.org/2000/svg"
            width={30}
            height={40}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white block border-gray-200 align-middle"
          >
            <path
              d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
              className="border-gray-200"
            ></path>
          </svg>
        </button>
        {isChatOpen && (
          <div
            id="hs-chatbot-container"
            className={`fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px] z-50 ${
              isChatOpen ? "chat-open" : "chat-closed"
            }`}
          >
            {/* Heading */}
            <div className="flex flex-col space-y-1.5 pb-6 mb-3  border-b">
              <h2 className="font-semibold text-lg tracking-tight">
                AgriFinancial Guide
              </h2>
              <p className="text-sm text-[#6b7280] leading-3">
                Your climate smart agriculture guide
              </p>
            </div>
            {/* Chat Container */}
            <div
              id="chat-container"
              className="pr-4 h-[474px]"
              style={{
                minWidth: "100%",
                display: "table",
                overflowY: "scroll",
              }}
            >
              {chatLog.map((message, index) => (
                <ChatLogItem
                  key={index}
                  type={message.type}
                  message={message.message}
                />
              ))}
              {isLoading && (
                <div key={chatLog.length} className="flex justify-start">
                  <div className="bg-gray-200 rounded-lg p-4 text-white max-w-sm">
                    <TypingAnimation />
                  </div>
                </div>
              )}
            </div>
            {/* Input box  */}
            <div className="flex items-center pt-0">
              <form
                className="flex items-center justify-center w-full space-x-2"
                onSubmit={handleSubmit}
              >
                <input
                  className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                  placeholder="Type your message"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatBot;
