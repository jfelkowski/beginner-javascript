const video = document.querySelector('.webcam');
const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');
const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const faceDetector = new FaceDetector();
const optionsInputs = document.querySelectorAll('.controls input[type="range"]');

const options = {
  SIZE: 10,
  SCALE: 1.35,
};

function handleOption(event) {
  const { value, name } = event.currentTarget;
  options[name] = parseFloat(value);
}

optionsInputs.forEach(input => input.addEventListener('input', handleOption));

// write a function that will populate the users video
async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();
  // size the canvases to be the same size as the video
  console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  // ask the browser when the next animation frame is, and tell it to run detect for us
  faces.forEach(drawFace);
  faces.forEach(censor);
  requestAnimationFrame(detect);
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#ffc600';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // draw the small face
  faceCtx.drawImage(
  // 5 src args
    video, /* where does the source come from? */
    face.x, /* where do we start the src pull from? */
    face.y, /* where do we start the src pull from? */
    face.width, /* how wide and high? */
    face.height, /* how wide and high? */
    // 4 draw args
    face.x, /* where do we start drawing the x and y */
    face.y, /* where do we start drawing the x and y */
    options.SIZE, /* how wide and high to draw to? */
    options.SIZE, /* how wide and high to draw to? */
  );
  
  // draw the small face back on, but scale up

  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  faceCtx.drawImage(
    faceCanvas, /* where does the source come from? */
    face.x, /* where do we start the src pull from? */
    face.y,
    options.SIZE, /* how wide and high to pull but this time on smaller canvas of course */
    options.SIZE,
    // drawing args
    face.x - (width - face.width) / 2, /* where do we start drawing the x and y */
    face.y - (height - face.height) / 2, /* where do we start drawing the x and y */
    width, /* how wide and hide to draw  */
    height,
  );
}

populateVideo().then(detect);
