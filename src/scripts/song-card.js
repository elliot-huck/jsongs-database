// This module takes a song object from the API and returns a section element with the structure given below
// Author: Elliot Huck

/*
<section class="song" id="song-${id}">
  <h3><span>${title}</span></h3>
  <p>Artist: <span>${artist}</span></p>
  <p>Album: <span>${album}</span></p>
</section>
*/

// Required by: load-songs

const songCard = (song) => {
  console.log("Creating song card...");

  const $songCard = $("<section>");
  $songCard.attr("class", "song");
  $songCard.attr("id", `section-${song.id}`);


  const title = song.title;
  const $titleSpan = $("<span>").text(title);
  const $songTitle = $("<h3>").append($titleSpan);
  $songTitle.appendTo($songCard);

  const artist = song.artist.name;
  const $artistSpan = $("<span>").text(artist);
  const $songArtist = $("<p>").text("Artist: ").append($artistSpan);
  $songArtist.appendTo($songCard);

  const album = song.album.name;
  const $albumSpan = $("<span>").text(album);
  const $songAlbum = $("<p>").text("Album: ").append($albumSpan);
  $songAlbum.appendTo($songCard);

  return $songCard;
};

module.exports = songCard;