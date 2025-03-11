// Server URLs (Replace these with your actual working M3U8/iframe sources)
const servers = {
    1: "https://starsportseng.pages.dev/index.m3u8",
    2: "https://starsportshindi-2oe.pages.dev/index.m3u8",
    3: "https://astrocrickt.pages.dev/index.m3u8",
    4: "https://jcevents.akamaized.net/bpk-tv/JC_Sports18_1HD/JCHLS/hdntl=exp=1741585633~acl=%2f*~id=97ff5c734c6f4a3ea96b01cfd44846cc~data=hdntl~hmac=db0dbae6b8d53b386b4bc9848af7139235c4f2c36e1bc9ee44971a36249f2c20/JC_Sports18_1HD-audio_108038_eng=108000-video=3728000.m3u8",
    5: "https://vimeo.com/event/4976473/embed",
    6: "https://player.cricktv.site/jwplayer?dtv=https%3A%2F%2Fsuper.cricktv.site%2Fstream%2Fvkvsd185.okcdn.ru%2Fcmaf%2F7926758443751%2Fsig%2FHCTuJSQRydc%2Fexpires%2F1741540693590%2FsrcIp%2F3.8.236.30%2Furls%2F45.136.22.62%2FclientType%2F13%2FsrcAg%2FCHROME%2Fmid%2F9460007775207%2Fget%2Fhls_9460007775207.WJakZ1W7NFQ.m3u8&thumb=https%3A%2F%2Fi.mycdn.me%2FgetVideoPreview%3Fid%3D7926758443751%26idx%3D7%26type%3D39%26tkn%3D6gsOZDrXR65_Q7bKWRM_mz2R0O0%26fn%3Dvid_x",
    7: "https://ifram.embedxt.site/iframe/frame.php"
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
