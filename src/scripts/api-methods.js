// This module contains the methods for accessing the API
// Author: Elliot Huck

// Required by: load-songs

const apiMethods = {
  getSongs: () => {
    return $.ajax("http://localhost:3000/songs?_expand=artist&_expand=album");
  },
  check: (table, name) => {
    return $.ajax(`http://localhost:3000/${table}?name_like=${name}`);
  },
  createArtist: (name) => {
    return $.ajax({
      url: `http://localhost:3000/artists`,
      type: "POST",
      data: {
        name: name
      }
    });
  }

};

module.exports = apiMethods;