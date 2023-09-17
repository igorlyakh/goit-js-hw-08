import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LS_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = () => {
  player
    .getCurrentTime()
    .then(seconds => {
      localStorage.setItem(LS_KEY, JSON.stringify(seconds));
    })
    .catch(error => console.log(error));
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(LS_KEY)));
