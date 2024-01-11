const inputBox = document.getElementById("input-box");
let pictureField = document.getElementById("image-field");

 

const birdPicture = document.createElement("img")

 

birdPicture.src = "static-dancing-bird.jpg";

 

pictureField.appendChild(birdPicture);

 

$(document).ready(function () {
  const inputEvent = 'oninput' in window ? 'input' : 'keyup';
  $('#input-box').on(inputEvent, function (event) {
    const input = event.originalEvent.data.slice(-1);
    GifMoves(input)
  })
});

 

function GifMoves(data) {
  switch (data) {
    case ' ':
      changePicture();
      break;

 

    case 'e':
      changePicture();
      break;

 

    case 'E':
      changePicture();
      break;

 

    case 'i':
      changePicture();
      break;

 

    case 'I':
      changePicture();
      break;
  }
}

 

function changePicture() {
  birdPicture.src = "dancingbird-without-loop.gif";
}