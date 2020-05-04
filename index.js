const music = new Audio('assets/music.mp3');

const playMusic = () => {
  setTimeout(function(){ music.play() }, 5000);
}
