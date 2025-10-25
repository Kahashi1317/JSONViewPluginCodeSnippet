/*
So, the JavaScript code of the notes page above downloads the JSON data containing
the notes, and forms a bullet-point list from the note contents:
This is done by the following code:
Hier ist der JS-Code der Note-Page, welche die JSON-Datei auslest, und eine Bullet-Point-
Liste von der JSON auflistet
*/

const data = JSON.parse(this.responseText) //variable namens 'data'
console.log(data) //console-output der JSON

var ul = document.createElement('ul') // Creates eine unorderedList mit a ul-tag..
ul.setAttribute('class'. 'notes')

data.forEach(function(note) { /*..and then adds 1 li-tag foreach note
  Only the content field of each note becomes the contents of the li-tag.
  The timestamps found in the raw data are not used for anything here.*/
  var li = document.createElement('li')
  ul.appendChild(li)
  li.appendChild(document.createTextNode(note.content))
})

document.getElementById('notes').appendChild(ul)

/* Pseudo-Code
const Daten;
Terminal.logOut(Daten)

var 'ul' = document.createElement
ul.setAttribute('class'.'notes')
Daten.forEach(Funktion(INput: note)

*/
