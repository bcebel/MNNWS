// Sample video IDs
const videoIds = [
  "HL2mRKTVutM",
  "56WBs0A4Kng",
  "IkmLXvBfVv0",
  "HSJOF4ulYG8",
  "Dx5qFachd3A",
];

async function displayVideos() {
  const videoList = document.getElementById("video-list");
  videoList.innerHTML = ""; // Clear existing videos

  videoIds.forEach((videoId) => {
    const ampYouTube = document.createElement("amp-youtube");
    ampYouTube.setAttribute("width", "480");
    ampYouTube.setAttribute("height", "270");
    ampYouTube.setAttribute("layout", "responsive");
    ampYouTube.setAttribute("data-videoid", videoId);
    videoList.appendChild(ampYouTube);
  });
}

// Load and display videos on page load
window.addEventListener("DOMContentLoaded", displayVideos);


