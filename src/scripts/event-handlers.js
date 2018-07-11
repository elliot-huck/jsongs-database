// This module adds all the event handlers to the page; it runs after all the songs are loaded
// Author: Elliot Huck

const api = require("./api-methods");

const allEventHandlers = () => {
  console.log("Event handlers running...");

  const editSong = (cardId) => {
    const editId = parseInt(cardId.split("-")[1]);
    console.log(`Editing song #${editId}...`);

    const $allSpans = $(`#${cardId} span`);
    $allSpans.each((index, element) => {
      $(element).wrap(`<input type="text" value="${element.textContent}"></input>`);
    });

    const $saveButton = $("<button>").text("Save");
    $saveButton.appendTo($(`#${cardId}`));

  // When $saveButton is clicked...
    // Get values for all the input fields
    $saveButton.click(event => {
      console.log("Clicked the save button");
      const $allInputs = $(`#${$($saveButton.parent()).attr("id")} input`);
      const allValues = [];
      $allInputs.each((index, element) => {
        allValues.push(element.value);
      });
      console.log(allValues);
      const editedTitle = allValues[0];
      const editedArtist = allValues[1];
      const editedAlbum = allValues[2];

      console.log(`
      New title: ${editedTitle}
      New artist: ${editedArtist}
      New album: ${editedAlbum}
      `);

      // If the artist doesn't exist, create it
      // THEN get the artist's id
      // THEN if the album doesn't exist, create it
      // THEN get the album id
      // THEN pass those, along with the new song title, into a POST
    });

  };

// Event listener for all song titles to edit songs
const $allSongTitles = $(".song > h3");
$allSongTitles.each((index, element) => {
  console.log(element);
  $(element).click(event => {
    console.log("Header clicked");
    const $songCardId = $(event.currentTarget).parent().attr("id");
    editSong($songCardId);
  });
});

// Event listener for the New Song button

// Event listener for the Purchased checkbox

// Event listener for the Delete button

};

module.exports = allEventHandlers;