import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

if (localStorage.getItem('videoplayer-current-time') === null) {
    console.log("dupa");
    localStorage.setItem('videoplayer-current-time', 0)
  };
  
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function saveTime(data) {
  const { seconds } = data;
  localStorage.setItem('videoplayer-current-time', seconds);
  return seconds.value;
  
}

function setTime() {  
  const currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  player.setCurrentTime(currentTime);
}

window.addEventListener('load', setTime, { once: true });
player.on('timeupdate', throttle(saveTime, 1000, { leading: false }));


