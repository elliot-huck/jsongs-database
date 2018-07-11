// This module runs the actual program and also serves as my checklist for all the stuff I need to do
// Author: Elliot Huck

const loadAllSongs = require("./load-songs");
const addEventHandlers = require("./event-handlers");

loadAllSongs().then(resolve => {
  console.log("All songs loaded");
  addEventHandlers();
});



/*
1. User can enter a song
2. User can save songs to the database provided all inputs are filled

4. Each song needs a checkbox that can be used to mark it as "bought" in the database
5. User can click on song title to edit all fields of a song and hit Enter to save them to database
6. Each song needs a delete button that can be used to remove it from the DOM and the database
*/

/*
1. Given a user wants to enter a song
When the user performs a gesture on a "New Song" affordance
Then a form should be presented to the user in which the following information can be entered:
  a. Song Title
  b. Album
  c. Artist

2. Given a user has entered in all field values for storing a new song
When the user performs a gesture on the "Save Song" affordance
Then the song should be saved in the database

3. Given the database contains saved songs
When a user visits the dashboard
Then all the songs should be displayed

4. Given a user wants to mark a song as bought
When the user is viewing their song list
Then there should be a checkbox next to each song that, when clicked, should mark the song as bought in the database

5. Given a user wants to edit a song title, artist or album
When the user clicks on the name of a song
Then the user should be able to edit the song title, artist or album
And when the enter key is pressed, the new song information should be saved to the database
And the dashboard should be updated to display the new song info
And each song should have an affordance to delete the song

6. Given a user wants to remove a previously stored song
When the user performs a gesture on the delete affordance
Then the song should be deleted
*/