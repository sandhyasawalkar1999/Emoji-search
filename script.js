let emojee_container = document.getElementById("emojee_container");
let serach_filed = document.getElementById("serach");

function displayEmojee(serachQuery = "") {
  // console.log(emojiList);

  let filteredList = emojiList.filter(function (emoji) {
    if (emoji.description.indexOf(serachQuery) != -1) {
      return true;
    }
  });

  console.log(filteredList);

  // console.log(emojiList);
  filteredList.forEach(function (emoji) {
    //   console.log(emoji);

    let new_row = document.createElement("tr");

    let new_emoji = document.createElement("td");

    let new_aliases = document.createElement("td");

    let new_descrption = document.createElement("td");

    console.log(new_row, new_descrption, new_emoji, new_aliases);

    new_descrption.innerText = emoji.description;
    new_emoji.innerText = emoji.emoji;
    new_aliases.innerText = emoji.aliases.join(",");

    new_row.appendChild(new_descrption);
    new_row.appendChild(new_emoji);
    new_row.appendChild(new_aliases);

    // console.log(new_row);

    // emoji_container.appendChild(new_row);

    emojee_container.appendChild(new_row);
  });
}

window.addEventListener("load", displayEmojee);
serach_filed.addEventListener("keyup", (e) => {
  let value = e.target.value;
  console.log(value);
  displayEmojee(value);
});
