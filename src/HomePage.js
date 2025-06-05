import React, { useRef, useState } from "react";

const HomePage = ({ username }) => {
  const mixedForYou = [
    { id: 1, title: "Mix 1", img: "orange.jpg", audio: "song1.mp3" },
    { id: 2, title: "Mix 2", img: "perfect.jpg", audio: "song.mp3.mp3" },
    { id: 3, title: "Mix 3", img: "img1.jfif", audio: "song.mp3.mp3" },
    { id: 4, title: "Mix 4", img: "img2.jpg", audio: "song.mp3.mp3" },
    { id: 5, title: "Mix 5", img: "img3.jpg", audio: "song.mp3.mp3" },
        { id: 6, title: "Mix 6", img: "img4.jpg", audio: "song.mp3.mp3" },
  ];

  const favoriteArtists = [
    { id: 1, name: "Taylor Swift", img: "taylorswift.jfif" },
    { id: 2, name: "Arijit Singh", img: "ajsingh.webp" },
    { id: 3, name: "Dua Lipa", img: "art1.jfif" },
    { id: 4, name: "Dua Lipa", img: "alb2.jpg" },
    { id: 5, name: "Dua Lipa", img: "art3.jfif" },
    { id: 6, name: "Dua Lipa", img: "dualipa.jfif" },
  ];

  const recentHits = [
    { id: 1, title: "Hit 1", img: "espresso.jpg" },
    { id: 2, title: "Hit 2", img: "concert.webp" },
    { id: 3, title: "Hit 3", img: "taylorswift.jfif" },
  ];

  const audioRef = useRef(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (audioFile) => {
    if (audioRef.current) {
      if (currentAudio === audioFile) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play();
          setIsPlaying(true);
        }
      } else {
        audioRef.current.src = `/${audioFile}`;
        audioRef.current.play();
        setCurrentAudio(audioFile);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="home-container"  >
      <h1 className="home-title">Welcome {username}!</h1>

      
      <div className="section">
        <h2>🎧 Mixed for You</h2>
        <div className="card-row" >
          {mixedForYou.map((item) => (
            <div key={item.id} className="card" >
              <img
                src={item.img}
                alt={item.title}
               
              />
              <p>{item.title}</p>
              <button
                onClick={() => handlePlayPause(item.audio)}
                
              >
                {currentAudio === item.audio && isPlaying ? "Pause" : "Play"}
              </button>
            </div>
          ))}
        </div>
      </div>

     
      <div className="section">
        <h2>🌟 Your Favorite Artists</h2>
        <div className="card-row" >
          {favoriteArtists.map((artist) => (
            <div key={artist.id} className="card" >
              <img
                src={artist.img}
                alt={artist.name}
                
              />
              <p>{artist.name}</p>
            </div>
          ))}
        </div>
      </div>

      

      
      <div className="section">
        <h2>🔥 Recent Hits</h2>
        <div className="card-row" >
          {recentHits.map((hit) => (
            <div key={hit.id} className="card" >
              <img
                src={hit.img}
                alt={hit.title}
               
              />
              <p>{hit.title}</p>
            </div>
          ))}
        </div>
      </div>


      <audio ref={audioRef} style={{ display: "none" }} />
    </div>
  );
};

export default HomePage;
