import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyD_oKms5SqcCrdv8KHNikxSBpdVghNkT40");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default function ChatBot() {
    const [text, setText] = useState("");
    const [output, setOutput] = useState("");

    const handleSubmit = async () => {
        if (!text) return alert("Please enter a prompt!");

        try {
            const result = await model.generateContent(text);
            const response = await result.response;
            const finalText = response.text();

            setOutput(finalText || "No response received.");
        } catch (error) {
            console.error("Error fetching response:", error);
            setOutput("Error fetching response.");
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
                    placeholder="Enter your prompt..."
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
        </div>
    );
}


