"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FiMessageCircle, FiX } from "react-icons/fi";

export default function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleToggle = () => setOpen((prev) => !prev);
  const handleSendMessage = (message: string) => {
    console.log("User message:", message);
  };

  const ChatHeader = ({ onClose }: { onClose: () => void }) => (
    <div className="flex items-center space-x-3 p-4 border-b border-slate-700">
      <span className="font-bold">Trợ lý AI của tôi</span>
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="ml-auto p-1 hover:bg-slate-700 rounded"
      >
        <FiX size={20} />
      </Button>
    </div>
  );

  const ChatBody = () => {
    const [input, setInput] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (input.trim()) {
        handleSendMessage(input);
        setInput("");
      }
    };

    return (
      <form
        onSubmit={onSubmit}
        className="flex-1 flex flex-col p-4 justify-end overflow-y-auto"
      >
        <div className="flex-1 overflow-y-auto mb-2">
          <p className="text-sm text-slate-300">
            Xin chào! Tôi có thể giúp gì cho bạn?
          </p>
        </div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập tin nhắn..."
            className="w-full p-2 rounded bg-slate-800 text-white focus:outline-none"
          />
        </div>
      </form>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {open && (
        <div className="w-80 h-96 bg-slate-900 text-white rounded-xl shadow-lg flex flex-col overflow-hidden mb-2">
          <ChatHeader onClose={handleClose} />
          <ChatBody />
        </div>
      )}

      <button
        onClick={handleToggle}
        className="bg-cyan-500 hover:bg-cyan-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FiMessageCircle size={24} />
      </button>
    </div>
  );
}
