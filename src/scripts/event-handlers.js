// This module adds all the event handlers to the page; it runs after all the songs are loaded
// Author: Elliot Huck

const api = require("./api-methods");

const allEventHandlers = () => {
  console.log("Event handlers running...");

  /*
  This function will eventually let you edit songs when you click the title of the song and then save the edited song when you click the Save button that it appends to the song section.

  Currently, it runs every time you click the header  or any of its children, which is a bug; I want it to run only when you click the title the first time and not run again until after you've saved the edited song.

  Also, it doesn't actually edit the song in the database; all it does right now is get the input values and push them into an array that I'll hopefully be able to do something with in the future

  Finally, there's no way out of this code: once you start editing, you can't do anything else.
  */
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

      /*
      So, I actually tried to do this stuff, broke my code, and had to do a huge reset, so I'm going to ignore it for the time being until I can figure out a better way to do it...
          If the artist doesn't exist, create it
          THEN get the artist's id
          THEN if the album doesn't exist, create it
          THEN get the album id
          THEN pass those, along with the new song title, into a POST
      */
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