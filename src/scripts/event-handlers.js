// This module adds all the event handlers to the page; it runs after all the songs are loaded
// Author: Elliot Huck


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