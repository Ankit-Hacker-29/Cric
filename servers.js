// 🚀 List of Streaming Servers
const servers = [
    { name: "Server 1", url: "https://starsportseng.pagwes.dev/index.m3u8" },
    { name: "Server 2", url: "https://starsportshindi-2oe.pages.dev/index.m3u8" },
    { name: "Server 3", url: "https://astrocrickt.pages.dev/index.m3u8" },
    { name: "Server 4", url: "https://ifram.embedxt.site/iframe/frame.php"},
    { name: "Server 5", url: "https://stream5.com/live.m3u8" },
    { name: "Server 6", url: "https://stream6.com/live.m3u8" },
    { name: "Server 7", url: "https://stream7.com/live.m3u8" }
];

const videoPlayer = document.getElementById("video-player");
const serverButtonsContainer = document.getElementById("server-buttons");
const errorMessage = document.getElementById("error-message");

let currentServerIndex = 0;

// 🎬 Function to Load Server Stream
function loadServer(index) {
    if (index >= servers.length) {
        errorMessage.style.display = "block";
        videoPlayer.style.display = "none";
        return;
    }

    errorMessage.style.display = "none";
    videoPlayer.style.display = "block";

    let server = servers[index];
    
    if (Hls.isSupported()) {
        let hls = new Hls();
        hls.loadSource(server.url);
        hls.attachMedia(videoPlayer);
        hls.on(Hls.Events.MANIFEST_PARSED, () => videoPlayer.play());
        hls.on(Hls.Events.ERROR, () => {
            console.error("❌ Error in stream, switching to next server...");
            loadServer(index + 1); // Auto-switch to next server if fails
        });
    } else if (videoPlayer.canPlayType("application/vnd.apple.mpegurl")) {
        videoPlayer.src = server.url;
        videoPlayer.play();
    } else {
        alert("Your browser does not support HLS streaming.");
    }

    // Update Active Button
    document.querySelectorAll(".server-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`server-${index}`).classList.add("active");
}

// 🎯 Function to Create Server Buttons
function createServerButtons() {
    serverButtonsContainer.innerHTML = "";
    servers.forEach((server, index) => {
        const button = document.createElement("button");
        button.className = "server-btn";
        button.textContent = server.name;
        button.id = `server-${index}`;
        button.addEventListener("click", () => loadServer(index));

        if (index === 0) {
            button.classList.add("active");
            loadServer(0); // Load first server by default
        }

        serverButtonsContainer.appendChild(button);
    });
}

createServerButtons();
