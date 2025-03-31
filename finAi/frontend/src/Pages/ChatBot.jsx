import { useState } from "react";

export default function ChatBot() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    if (!text.trim()) {
      alert("Please enter a query!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: text }),
      });

      const data = await response.json();

      if (response.ok) {
        setOutput(data.text_response || "No response received.");

        // Handle audio response
        const audioPlayer = document.getElementById("audio-player");
        if (data.audio_file) {
          audioPlayer.src = `http://127.0.0.1:5000${data.audio_file}`;
          audioPlayer.style.display = "block";
          audioPlayer.play();
        } else {
          audioPlayer.style.display = "none";
        }

        // Handle YouTube videos
        const videoList = document.getElementById("video-list");
        videoList.innerHTML = "";
        data.youtube_videos.forEach((video) => {
          const listItem = document.createElement("li");
          listItem.innerHTML = `<a href="${video.url}" target="_blank">${video.title}</a>`;
          videoList.appendChild(listItem);
        });
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="main">
        <input
          type="text"
          name="user-prompt"
          id="userPrompt"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your query..."
        />
        <button onClick={handleSubmit}>Go</button>
      </div>
      <div className="ans">
        <textarea
          name="finalAns"
          value={output}
          readOnly
          placeholder="Response will appear here..."
        />
      </div>
      <div>
        <audio id="audio-player" controls style={{ display: "none" }}></audio>
      </div>
      <div>
        <h3>YouTube Videos:</h3>
        <ul id="video-list"></ul>
      </div>
    </div>
  );
}
