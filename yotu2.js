
// Handle form submission to add new video ID
document.getElementById("video-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const videoId = document.getElementById("video-id").value;
  if (videoId) {
    videoIds.push(videoId); // Add new video ID to the array
    displayVideos(); // Update the video list
  } else {
    alert("Video ID is required!");
  }
});
