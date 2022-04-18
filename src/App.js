import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title:"Dil ibadat",
      artist:"KK",
      img_src:"./images/kk.jpg",
      src:"./music/Dil-ibadat.mp3"

    },
    {
      title:"Sawali si raat",
      artist:"Arijit singh",
      img_src:"./images/arijit.jpg",
      src:"./music/sawali-si-raat.mp3"
    },
    {
      title:"Ik tu hai",
      artist:"Jubin Nautiyal",
      img_src:"./images/jubin.jpg",
      src:"./music/ik-tu-hai.mp3"
    },
    {
      title:"Tera hone laga hoon",
      artist:"Atif Aslam",
      img_src:"./images/atif.jpg",
      src:"./music/tera-hone.mp3"
    },
    {
      title:"Rehnuma",
      artist:"Shreya Ghosal",
      img_src:"./images/shreya.jpg",
      src:"./music/rehnuma.mp3"
    },
    {
      title:"Halka halka",
      artist:"Sunidhi chauhan",
      img_src:"./images/sunidhi.jpg",
      src:"./music/halka-halka.mp3"
    },
    {
      title:"Hai dil ye mera",
      artist:"Arijit singh",
      img_src:"./images/arijit.jpg",
      src:"./music/hai-dil.mp3"
    },
    {
      title:"Chura liya",
      artist:"Sachet & Parampara",
      img_src:"./images/sachet.jpg",
      src:"./music/chura-liya.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
