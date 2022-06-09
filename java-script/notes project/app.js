
showNotes();

// if user add some notes , add it to local storage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

  let addTxt = document.getElementById("addTxt");
  let addTitle=document.getElementById("txtTitle");

  let notes = localStorage.getItem("notes");
  let noteTitle=localStorage.getItem("noteTitle");

  if (notes == null ) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  if (noteTitle == null ) {
    noteTitleObj = [];
  } else {
    noteTitleObj = JSON.parse(noteTitle);
  }

  notesObj.push(addTxt.value);
  noteTitleObj.push(addTitle.value)

  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("noteTitle", JSON.stringify(noteTitleObj));

  addTxt.value = "";
  txtTitle.value="";

  console.log(notesObj);
  console.log(noteTitleObj)
  showNotes();
 
});

// funtion that will add notes below

function showNotes() {
  let notes = localStorage.getItem("notes");
  let noteTitle=localStorage.getItem("noteTitle");
  if (notes == null ) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  if (noteTitle == null ) {
    noteTitleObj = [];
  } else {
    noteTitleObj = JSON.parse(noteTitle);
  }

  let html = "";
  notesObj.forEach(function (element, index) {
    
    html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${noteTitleObj[index]}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">Delete Note</button>
                </div>
              </div>`;
  });


  let notesLocation = document.getElementById("allNotes");
  if (notesObj.length != 0) {
    notesLocation.innerHTML = html;
  } else {
    notesLocation.innerHTML = "Add Your Notes";
  }
}

// funtion to delete note
function deleteNote(index) {
  console.log("i am deletein ", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// for search

let search = document.getElementById("searchTxt");

search.addEventListener("input", function () {
  let inputValue = search.value.toLowerCase();
  // console.log('Input event fired!', inputVal);
  let noteCards = document.getElementsByClassName("noteCard");

  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    let cardTitle = element.getElementsByTagName("h5")[0].innerText;
    
    if ( cardTxt.includes(inputValue) || cardTitle.includes(inputValue.toLowerCase())|| cardTitle.includes(inputValue.toUpperCase())) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt);
  });
});
