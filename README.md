#RPP
###by [Matt Seegan](https://github.com/mseegan)

I wanted to make an application with socket.io, because the framework seemed like it could yield interesting results.  

​
### Technology Used
* node.js 
	* **express** back-end web framework
	* **mongoose** database
	* **socket.io** used to allow users on different browsers to communicate with
	each other directly.
* **Code Mirror** the embedded text editor
* **HTML + CSS** front end
* **Bootstrap** navbar
* **Git + Github** version control used at every stage of project articulating progress throughout the week
* **Visual Design** wire framing & user stories were used to get the initial idea
and later re-done to create a more user friendly design
* **Heroku** used to host the website

### List of API Endpoints

Endpoint | Method | Route | Data
--- | --- | --- | ---
*/* | GET | home | Displays splash page
*"/projects"* | GET | all projects | used as a very inefficient template page
*"/projects/:id | GET | a single project | Takes new user to signup page
​
### Code Snippets


**Matt**

  this is the client side code to transmit the text editor's contents to another browswer

```
  editor.on("keyup", function() {
    console.log("input text recieved");
    socket.emit('write code', editor.getValue());
  });
```

###Link to Heroku
​ 
This application is deployed on heroku [here](https://remotepp.herokuapp.com/).

### Features to Implement

* **users**
* **REPL**  executing code is a must-have 
<<<<<<< HEAD
* **files model within a project** having more files on one document would be very useful for hosting collaborative repositories on the web
=======
* **files model within a project** having more files on one document would be very useful for hosting collaborative repositories on the web
>>>>>>> 4d4742ee2c5c4590a94c9c55950e7ac9fbce93a8
