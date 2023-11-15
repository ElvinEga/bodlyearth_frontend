import React from "react";

interface ChatMessage {
  type: "user" | "bot";
  message: string;
}

const ChatLogItem: React.FC<ChatMessage> = ({ type, message }) => {
  if (type === "user") {
    return (
      <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
        <span className="flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-600">
          <span className="text-sm font-medium text-white leading-none">
            <i className="bi bi-person text-white  text-lg"></i>
          </span>
        </span>
        <p className="leading-relaxed">
          <span className="block font-bold text-gray-700">You </span>
          {message}
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
        <span className="flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-blue-600">
          <span className="text-sm font-medium text-white leading-none">
            <i className="bi bi-robot text-white  text-lg"></i>
          </span>
        </span>

        <p className="leading-relaxed">
          <span className="block font-bold text-gray-700">AI </span>
          {message}
        </p>
      </div>
    );
  }
};

export default ChatLogItem;
