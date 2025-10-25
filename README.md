Traditional web applications
The homepage of the example application works like a traditional web application. When entering the page, the browser fetches the HTML document detailing the structure and the textual content of the page from the server.

he content of the HTML page has been saved as a template string or a string that allows for evaluating, for example, variables, like noteCount, in the midst of it. The dynamically changing part of the homepage, the number of saved notes (in the code noteCount), is replaced by the current number of notes (in the code notes.length) in the template string.

Writing HTML amid the code is of course not smart, but for old-school PHP programmers, it was a normal practice.

In traditional web applications, the browser is "dumb". It only fetches HTML data from the server, and all application logic is on the server. A server can be created using Java Spring , Python Flask or Ruby on Rails to name just a few examples.

The example uses Express library with Node.js. This course will use Node.js and Express to create web servers.

The server has formed this document somehow. The document can be a static text file saved into the server's directory. The server can also form the HTML documents dynamically according to the application's code, using, for example, data from a database. The HTML code of the example application has been formed dynamically because it contains information on the number of created notes.

The HTML code of the homepage is formed dynamically on the server as follows:

Keep the Developer Console open. Empty the console by clicking the 🚫 symbol, or by typing clear() in the console. Now when you go to the notes page, the browser does 4 HTTP requests:

All of the requests have different types. The first request's type is document. It is the HTML code of the page, and it looks as follows:

When we compare the page shown on the browser and the HTML code returned by the server, we notice that the code does not contain the list of notes. The head section of the HTML contains a script tag, which causes the browser to fetch a JavaScript file called main.js.
