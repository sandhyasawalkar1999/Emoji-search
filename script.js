let emoji_container = document.getElementById("emoji_container");
let search_field = document.getElementById("search");
let filterEmg = document.getElementById("filter-emoji");

function displayEmoji(searchQuery = "") {
  let filteredList = emojiList.filter((emoji) => {
    if (emoji.description.indexOf(searchQuery) !== -1) {
      return true;
    }
    if (emoji.tags.some((ele) => ele.startsWith(searchQuery))) {
      return true;
    }
    if (emoji.aliases.some((ele) => ele.startsWith(searchQuery))) {
      return true;
    }
    return false;
  });

  emoji_container.innerHTML = "";
  filteredList.forEach((emoji) => {
    let new_row = document.createElement("tr");

    let new_emoji = document.createElement("td");
    let new_aliases = document.createElement("td");
    let new_description = document.createElement("td");

    new_description.innerText = emoji.description;
    new_emoji.innerText = emoji.emoji;
    new_aliases.innerText = emoji.aliases.join(",");

    new_row.appendChild(new_description);
    new_row.appendChild(new_emoji);
    new_row.appendChild(new_aliases);

    emoji_container.appendChild(new_emoji);
  });
}

// Initial display of all emojis
window.addEventListener("load", () => displayEmoji());

// Search functionality
search_field.addEventListener("keyup", (e) => {
  let value = e.target.value;
  displayEmoji(value);
});

// Filtering by category
filterEmg.addEventListener("click", (e) => {
  const button = e.target.closest(".filter-btn");
  if (button) {
    e.preventDefault();
    const category = button.getAttribute("data-category");
    displayEmoji(category);
  }
});
