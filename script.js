let emojee_container = document.getElementById("emojee_container");
let serach_filed = document.getElementById("serach");
let filterEmg =document.getElementById("filter-emojee");


// filterEmg.addEventListener("click", (e) => {
//   const button = e.target.closest(".filter-btn");
  
//   if (button) {
//       e.preventDefault();
//       const category = button.getAttribute("data-category");
//       filterFunction(category);
//   }
// });

// let filterFunction = (value) => {
//   let filteredData;

//   if (value.toLowerCase() === "all") {
//       filteredData = emojiList;
//   } else {
//       filteredData = emojiList.filter(e => {
//           if (e.description.toLowerCase().includes(value.toLowerCase())) {
//               return true;
//           }
//           if (e.aliases.some(alias => alias.toLowerCase().startsWith(value.toLowerCase()))) {
//               return true;
//           }
//           if (e.tags.some(tag => tag.toLowerCase().startsWith(value.toLowerCase()))) {
//               return true;
//           }
//           return false;
//       });
//   }

//   displayEmoji(filteredData);
// };

// filteraEmoji.addEventListener("click" ,(e) =>{
//   const button = e.target.closest(".filter-btn");

//   if(button){
//     e.preventDefault();
//     const category = button.getAttribute("data-category");
//     filterFunction(category);
//   }
// });

let face = document.getElementById("face").value;
console.log(face);


let filterFunction = (value) =>{
  let filteredData = emojiList;
  
      if(value.toLowerCase() === "all"){
        filteredData = emojiList;
      }
      else{
        filteredData = emojiList.filter(e => {
          if(e.description.toLowerCase().includes(value.toLowerCase())){
            return true;
          }
          if(e.aliases.some(alias => alias.toLowerCase().startwith(value.toLoerCase()))){
            return true;
          }
          if(e.tags.some(tag => tag.toLowerCase().startswith(value.toLoerCase()))){
            return true;
          }
          return false;
        });
      }
displayEmojee(filteredData());

}

function displayEmojee(serachQuery = "") {
  // console.log(emojiList);

  let filteredList = emojiList.filter(function (emoji) {
    if (emoji.description.indexOf(serachQuery) != -1) {
      return true;
    }
  });

 

  console.log(filteredList);

  // console.log(emojiList);
  emojee_container.innerHTML = "";
  filteredList.forEach(function (emoji) {
    //   console.log(emoji);

    let new_row = document.createElement("tr");

    let new_emoji = document.createElement("td");

    let new_aliases = document.createElement("td");

    let new_descrption = document.createElement("td");

    // console.log(new_row, new_descrption, new_emoji, new_aliases);
    console.log(new_emoji);

    new_descrption.innerText = emoji.description;
    new_emoji.innerText = emoji.emoji;
    new_aliases.innerText = emoji.aliases.join(",");

    new_row.appendChild(new_descrption);
    new_row.appendChild(new_emoji);
    new_row.appendChild(new_aliases);

    // console.log(new_row);

    // emoji_container.appendChild(new_row);

    emojee_container.appendChild(new_emoji);
  });
}

const allButton = document.getElementById("all")
allButton.addEventListener("click", displayEmojee())
window.addEventListener("load", displayEmojee());
serach_filed.addEventListener("click",(e) =>
{
  let value = e.target.value;
  console.log(value);
  faceDisplay(value);

});
serach_filed.addEventListener("keyup", (e) => {
  let value = e.target.value;
  console.log(value);
  displayEmojee(value);
});
