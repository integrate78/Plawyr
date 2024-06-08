import React from "react";
import AudioPlayer from "./AudioPlayer";

const AUDIO_FILE = "./assets/audio.mp3";

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>Welcome to Playwr</h1>
      </div>
      
      <AudioPlayer audioSrc={AUDIO_FILE} />
    </div>
  );
}

export default App;
