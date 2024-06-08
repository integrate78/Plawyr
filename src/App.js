import React from "react";
import AudioPlayer from "./AudioPlayer";

const AUDIO_FILE = "./assets/audio.mp3";

function App() {
  return (
    <div className="container">      
      <AudioPlayer audioSrc={AUDIO_FILE} />
    </div>
  );
}

export default App;
