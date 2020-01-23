function loadBook(filename, displayName) {
  let currentBook = "";
  let url = "books/" + filename;

  document.getElementById("fileName").innerHTML = displayName;
  document.getElementById("searchstat").innerHTML = "";
  document.getElementById("keyword").value = "";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      currentBook = xhr.responseText;

      //remove line breaks and carriage returns
      currentBook = currentBook.replace(/(?:\r\n|\r|\n)/g, "<br>");

      document.getElementById("fileContent").innerHTML = currentBook;

      var elmnt = document.getElementById("fileContent");
      elmnt.scrollTop = 0;
    }
  };
}

//get the stats for the book
function getDocStats(fileContent) {
  var docLength = document.getElementById("docLength");
  var wordCount = document.getElementById("wordCount");
  var charCount = document.getElementById("charCount");

  let text = fileContent.toLowerCase();
  let wordArray = text.match(/\b\S+\b/g);
  let wordDictionary = {};

  for (let word in wordArray) {
    let wordValue = wordArray[word];
    if (wordDictionary[wordValue] > 0) {
      wordDictionary[wordValue] += 1;
    } else {
      wordDictionary[wordValue] = 1;
    }
  }



}

function sortProperties(obj) {
    
}
