// Access the video element
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const captureButton = document.getElementById("capture");
const downloadLink = document.getElementById("download");

// Request access to the user's camera
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error("Error accessing camera:", err);
  });

// Capture photo on button click
captureButton.addEventListener("click", () => {
  const context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Draw video frame to canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert to image and set download link
  const imageData = canvas.toDataURL("image/png");
  downloadLink.href = imageData; // Link to download
  downloadLink.style.display = "block"; // Show download button
});
