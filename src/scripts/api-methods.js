// This module contains the methods for accessing the API
// Author: Elliot Huck

// Required by: load-songs

const apiMethods = {
  getSongs: () => {
    return $.ajax("http://localhost:3000/songs");
  },
  editSong: (editId, title, artist, album) => {
    return $.ajax({
      url: `http://localhost:3000/songs/${editId}`,
      type: "PUT",
      data: {
        title: title,
        artist: artist,
        album: album
      }
    });
  }

};

module.exports = apiMethods;