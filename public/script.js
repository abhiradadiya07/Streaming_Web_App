const previewVideo = document.getElementById("preview-video");
const startButton = document.getElementById("start-btn");

const state = { media: null };

startButton.addEventListener("click", () => {
  //Its a inbuilt media recorder of browser :  MediaRecorder
  const mediaRecorder = new MediaRecorder(state.media, {
    audioBitsPerSecond: 128000,
    videoBitsPerSecond: 2500000,
    framerate: 25,
  });
  mediaRecorder.ondataavailable = (ev) => {
    console.log("Binary Stream Available", ev.data);
  };
});

window.addEventListener("load", async (e) => {
  const media = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  state.media = media;
  previewVideo.srcObject = media;
});
