async function sendQuery() {
    const queryInput = document.getElementById("query").value;

    if (!queryInput.trim()) {
        alert("Please enter a query!");
        return;
    }

    const responseSection = document.getElementById("response-section");
    responseSection.style.display = "block";

    try {
        const response = await fetch("http://127.0.0.1:5000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query: queryInput })
        });

        const data = await response.json();

        if (response.ok) {
            // Display text response
            document.getElementById("text-response").innerText = data.text_response;

            // Play the audio response
            const audioPlayer = document.getElementById("audio-player");
            if (data.audio_file) {
                audioPlayer.src = `http://127.0.0.1:5000${data.audio_file}`;
                audioPlayer.style.display = "block";
                audioPlayer.play();
            } else {
                audioPlayer.style.display = "none";
            }
            // if (data.audio_file) {
            //     audioPlayer.src = `http://127.0.0.1:5000/static/${data.audio_file}`;
            //     audioPlayer.style.display = "block";
            //     audioPlayer.play();
            // } else {
            //     audioPlayer.style.display = "none";
            // }

            // Display YouTube videos
            const videoList = document.getElementById("video-list");
            videoList.innerHTML = "";
            data.youtube_videos.forEach(video => {
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
}
