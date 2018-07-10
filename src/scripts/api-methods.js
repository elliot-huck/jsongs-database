// This module contains the methods for accessing the API
// Author: Elliot Huck

// Required by: load-songs

const apiMethods = {
  getSongs: () => {
    return $.ajax("http://localhost:3000/songs?_expand=artist&_expand=album");
  }

};

module.exports = apiMethods;