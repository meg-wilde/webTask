// Function to handle the like button so it stays liked using session storage
function likeActivity(likeButton, activityElement) {
  likeButton.classList.toggle("active");
  let name = activityElement.querySelector(".activity-name").textContent;

  if (likeButton.classList.contains("active")) {
    sessionStorage.setItem(name, true);
  } else {
    sessionStorage.removeItem(name);
  }
}

// Function to save items to My Things
function saveToMyThings(activityElement) {
  let name = activityElement.querySelector(".activity-name").textContent; //save the name to variable
  let cost = activityElement.querySelector(".activity-cost").textContent; //save the cost to variable
  let imageSrc = activityElement
    .querySelector(".activity-image")
    .getAttribute("src"); //save the image to variable

  let myThings = JSON.parse(sessionStorage.getItem("myThings")) || [];

  //check if the item has already been saved
  let isAlreadySaved = myThings.some(
    (item) => item.name === name && item.cost === cost
  );

  if (!isAlreadySaved) {
    //if the item has not already been saved
    myThings.push({ name: name, cost: cost, imageSrc: imageSrc });
    sessionStorage.setItem("myThings", JSON.stringify(myThings));
    let count = myThings.length;
    alert(`Activity saved! You have ${count} thing(s) to do saved.`); //alert the number of items saved
  } else {
    alert("You have already saved this activity"); //if the item has already been saved alert you have already saved
  }
}
// Function to display saved items on the My Things To Do page
document.addEventListener("DOMContentLoaded", function () {
  let myThings = JSON.parse(sessionStorage.getItem("myThings")) || [];
  let activityListDiv = document.getElementById("activity-list");

  let row; //create a div for each saved item for 3 columns
  myThings.forEach(function (thing, index) {
    if (index % 3 === 0) {
      row = document.createElement("div");
      row.classList.add("row");
      activityListDiv.appendChild(row);
    }

    let col = document.createElement("div");
    col.classList.add("col-md-4");
    row.appendChild(col);

    let item = document.createElement("div"); //create a div to store the name and cost
    item.textContent = `${thing.name} - ${thing.cost}`;
    col.appendChild(item); //add the item into the activity list div

    let itemImage = document.createElement("img"); //create an image item to store the image
    itemImage.src = thing.imageSrc;
    itemImage.classList.add("item-image");
    col.appendChild(itemImage); //add the image into the activity div
  });
});
