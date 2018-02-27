var playlist = { artistName : "songTitle"};

function updatePlaylist (playlist,artistName,songTitle){
  return Object.asign({},playlist, {[artistName]: songTitle})
  
}