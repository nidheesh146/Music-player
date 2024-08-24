document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  let currentTrackIndex = 0;

  const tracks = [
    { file: 'Lana_Del_Rey_-_Summertime_Sadness.mp3',name:'name: Summertime sadness',artist:'artist: Lana del rey'},
    { file: 'JP-Saxe-Julia-Michaels-If-The-World-Was-Ending.mp3',name:' name: if the world was ending',artist: 'artist: JP saxe' },
    {file:'22009_download_kaleo_way_down_we_go_ringtone_uncategorized.mp3',name:'name:Way down we go',artist:'artist:Kaleo'},

    // ...
  ];

  const audioPlayer = new Audio();

  // Play initial track
  audioPlayer.src = tracks[currentTrackIndex].file;
  audioPlayer.load();

  //update track info
  document.getElementById('track-name').innerText=tracks[currentTrackIndex].name;
  document.getElementById('track-artist').innerText=tracks[currentTrackIndex].artist;

  // Button event listeners
  document.getElementById('playButton').addEventListener('click', () => {
    audioPlayer.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
  });

  document.getElementById('pauseButton').addEventListener('click', () => {
    audioPlayer.pause();
  });

  document.getElementById('nextButton').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    console.log('next track inex',currentTrackIndex);
    audioPlayer.src = tracks[currentTrackIndex].file;
    audioPlayer.load();
    audioPlayer.play().catch((error) => {
      console.error('Error playing audio:', error);

    });
    //update 
    document.getElementById('track-name').innerText=tracks[currentTrackIndex].name;
    document.getElementById('track-artist').innerText=tracks[currentTrackIndex].artist;
  
  });

  document.getElementById('prevButton').addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    audioPlayer.src = tracks[currentTrackIndex].file;
    audioPlayer.load();
    audioPlayer.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
    //update
    document.getElementById('track-name').innerText=tracks[currentTrackIndex].name;
    document.getElementById('track-artist').innerText=tracks[currentTrackIndex].artist;
  
  });

  const seekSlider =  document.querySelector('.seek-slider');

  audioPlayer.addEventListener('timeupdate',()=>
  {
    seekSlider.value = (audioPlayer.currentTime/ audioPlayer.duration)*100;

    });
    seekSlider.addEventListener('input',() =>{
      audioPlayer.currentTime = (seekSlider.value/100)*audioPlayer.duration;
    });
    
  });
