

import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import { marked } from "marked";

export default function ChatBot() {
  const [text, setText] = useState("");
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to the bottom whenever conversation updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  const handleSubmit = async () => {
    if (!text.trim()) {
      alert("Please enter a query!");
      return;
    }
    // Add user's message to conversation
    setConversation((prev) => [...prev, { sender: "user", text }]);
    const userQuery = text;
    setText("");
    setLoading(true);
    
    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userQuery }),
      });
      const data = await response.json();
      
      let botText = data.text_response || "No response received.";
      // Convert Markdown to HTML using marked
      const parsedText = marked(botText);
      // Append bot's response to conversation
      setConversation((prev) => [...prev, { sender: "bot", text: parsedText }]);

      // Handle audio response
      const audioPlayer = document.getElementById("audio-player");
      if (data.audio_file) {
        audioPlayer.src = `http://127.0.0.1:5000${data.audio_file}`;
        audioPlayer.style.display = "block";
        audioPlayer.play();
      } else {
        audioPlayer.style.display = "none";
      }

      // Handle YouTube videos (appending as additional bot message)
      if (data.youtube_videos && data.youtube_videos.length > 0) {
        const videosHtml = data.youtube_videos
          .map(
            (video) =>
              `<a class="link link-info" href="${video.url}" target="_blank">${video.title}</a>`
          )
          .join("<br/>");
        setConversation((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `<strong>YouTube Videos:</strong><br/>${videosHtml}`,
          },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-base-100 text-base-content">
      <Navbar />

      {/* Main Chat Area */}
      <div className="flex-1 overflow-y-auto px-6 pt-6 space-y-4">
        {conversation.length > 0 ? (
          conversation.map((msg, index) => (
            <div
              key={index}
              className={`chat ${msg.sender === "bot" ? "chat-start" : "chat-end"}`}
            >
              <div
                className="chat-bubble max-w-lg"
                dangerouslySetInnerHTML={{ __html: msg.text }}
              ></div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-lg opacity-60">
              Start a conversation 👇
            </p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div
        className={`p-4 ${
          conversation.length === 0
            ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
            : "border-t border-base-300"
        }`}
      >
        <div className="flex justify-center">
          <div className="flex space-x-2 w-[50vw]">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Enter your query..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
            <button
              onClick={handleSubmit}
              className={`btn btn-primary ${loading ? "loading" : ""}`}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Hidden Audio Player */}
      <audio id="audio-player" controls style={{ display: "none" }}></audio>
    </div>
  );
}
