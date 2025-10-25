/*The homepage of the example application works like a traditional web application.
When entering the page, the browser fetches the HTML document detailing
the structure and the textual content of the page from the server.
The server has formed this document somehow. The document can be a static text file saved into the server's directory.
The server can also form the HTML documents dynamically according to the application's code, using, 
for example, data from a database. The HTML code of the example application has been formed dynamically
because it contains information on the number of created notes.

The HTML code of the homepage is formed dynamically on the server as follows:*/

const getFrontPageHTML = noteCount => {
  return '
      <!DOCTYPE html>
      <html>
        <head>
        </head>
        <body>
          <div class='container'>
          </div>
        </body>
      </html>
    '
    }
// app.get().request
app.get('/'), (req, res) => {
  const page = getFrontPageHTML(notes.length)
  res.send(page)
})
/*
The content of the HTML page has been saved as a template string or a string that allows for evaluating,
for example, variables, like noteCount, in the midst of it.
The dynamically changing part of the homepage, the number of saved notes (in the code noteCount),
is replaced by the current number of notes (in the code notes.length) in the template string.

Writing HTML amid the code is of course not smart, but for old-school PHP programmers,
it was a normal practice.*/
