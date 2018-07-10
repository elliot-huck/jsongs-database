// This module gets all the songs from the database and then prints a song card out to the DOM for each one
// Author: Elliot Huck

const api = require("./api-methods");
const songCard = require("./song-card");
// Required by: main

const loadAllSongs = () => {
  console.log("Loading all songs...");

  api.getSongs().then(allSongs => {
    allSongs.forEach(song => {
      const $songCard = songCard(song);
      $songCard.appendTo("#dashboard");
    });
  });

};

module.exports = loadAllSongs;