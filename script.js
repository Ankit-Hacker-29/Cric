// Server URLs (Replace these with your actual working M3U8/iframe sources)
const servers = {
    1: "https://example.com/server1.m3u8",
    2: "https://example.com/server2.m3u8",
    3: "https://example.com/server3.m3u8",
    4: "https://example.com/server4.m3u8",
    5: "https://example.com/server5.m3u8",
    6: "https://example.com/server6.m3u8",
    7: "https://example.com/server7.m3u8"
};

// Initialize JW Player
function loadPlayer(serverUrl) {
    jwplayer("player").setup({
        file: serverUrl,
        width: "100%",
        height: "100%",
        aspectratio: "16:9",
        autostart: true,
        controls: true
    });
}

// Change Server Function
function changeServer(serverNumber) {
    if (servers[serverNumber]) {
        loadPlayer(servers[serverNumber]);
    } else {
        alert("Server not available!");
    }
}

// Reload Stream (Refresh Button)
function reloadStream() {
    let currentServer = jwplayer("player").getPlaylistItem();
    if (currentServer) {
        loadPlayer(currentServer.file);
    }
}

// Load Default Server (First One)
document.addEventListener("DOMContentLoaded", () => {
    loadPlayer(servers[1]); // Load Server 1 by default
});