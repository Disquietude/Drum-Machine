import boom from '../sounds/boom.wav';
import clap from '../sounds/clap.wav';
import hihat from '../sounds/hihat.wav';
import kick from '../sounds/kick.wav';
import openhat from '../sounds/openhat.wav';
import ride from '../sounds/ride.wav';
import snare from '../sounds/snare.wav';
import tink from '../sounds/tink.wav';
import tom from '../sounds/tom.wav';

const sounds = [
  {
    label: "Boom",
    //src: boom,
    src: "https://github.com/wesbos/JavaScript30/raw/master/01%20-%20JavaScript%20Drum%20Kit/sounds/boom.wav",
    key: "Q"
  },
  {
    label: "Clap",
    src: clap,
    key: "W"
  },
  {
    label: "Hi-Hat",
    src: hihat,
    key: "E"
  },
  {
    label: "Kick",
    src: kick,
    key: "A"
  },
  {
    label: "Open Hat",
    src: openhat,
    key: "S"
  },
  {
    label: "Ride",
    src: ride,
    key: "D"
  },
  {
    label: "Snare",
    src: snare,
    key: "Z"
  },
  {
    label: "Tink",
    src: tink,
    key: "X"
  },
  {
    label: "Tom",
    src: tom,
    key: "C"
  }
];

export default sounds;