# Deploying the Time and Date function on node.js server(Local Host), Using VSCode

## Creating a basic http server 
We'll be creating a server that returns the present time and date to the user, this server would be run on our localhost on port 3000. 

### **Step1:** 
We start by making our directory and creating the file that will house the code

![mkdir](https://user-images.githubusercontent.com/105195327/204980872-5ec60953-ce76-4334-9f44-c2d430c415c9.png) 

### **Step2:** 
We load the http module that’s standard with all Node.js installations. 
*Add the following line to hello.js*

![Screenshot (157)](https://user-images.githubusercontent.com/105195327/204981637-00587446-d0a2-4948-8123-37302c78ba5f.png)

The **http** module, contains the function to create the server. 

### **Step3:** 
We define 2 constant that our server would be bound to, the **host** and the **port** respectively. 
*The value **localhost** is a special private address that computers use to refer to themselves,* 
*and it's available to the local computer, not just any local network, or to the internet.*
The **port** is a number that servers use as an endpoint or “door” to our IP address. 
When we bind our server to this host and port, we will be able to reach our server by visiting http://localhost:3000 in a local browser.

![Screenshot (158)](https://user-images.githubusercontent.com/105195327/204982267-f00e64a3-2f70-4f21-a4ef-be605c1dab93.png) 

### **Step4:** 
We create the function that would return the present time and date when we start the server. 

![Screenshot (159)](https://user-images.githubusercontent.com/105195327/204982640-d2afff1c-8f44-4fbe-ab1f-589549f6f7f8.png)

### **Step5:** 
Now we can create our server, and make use of our request listener function. 
- All request listener functions in Node.js accept two arguments: req and res (we can name them differently if we want). 
- The HTTP request the user sends is captured in a Request object, which corresponds to the first argument, req. 
- The HTTP response that we return to the user is formed by interacting with the Response object in second argument, res.

![Screenshot (160)](https://user-images.githubusercontent.com/105195327/204984393-f37d2027-0c68-4e66-b36a-af3e33cd4af3.png)

- In the first line, we create a new server object via the http module’s createServer() function. 
  *This server accepts HTTP requests and passes them on to our request Listener function.* 
  
- The last line of the function, res.end(clock);, writes the HTTP response back to the client who requested it. 
  *This function returns any data the server has to return. In this case, it’s returning Date and Time function, which is called by "clock".* 

### **Step6:** 
- After we create our server, we must bind it to a network address, We do that with the server.listen() method. 
  It accepts three arguments: port, host, and a callback function that fires when the server begins to listen.
  Although all of these arguments are optional, it is usually a good idea to explicitly state which port and host we want a web server to use.
  
![Screenshot (161)](https://user-images.githubusercontent.com/105195327/204987108-b36248af-91ee-485a-962a-408767e32487.png)


Now we have our server, let's see it in action and test it by running our server. 
In the console we shoukd see this output

![Screenshot (162)](https://user-images.githubusercontent.com/105195327/204987723-cd22da0e-4248-487e-b3e0-713500d2ece0.png)


When we click on the link it opens up our web browser to this page 

![Screenshot (163)](https://user-images.githubusercontent.com/105195327/204988327-eee066e4-0acd-4d97-9529-cd3f1879f992.png)


After confirming the server runs the D&T function, we can stop the server process with ctrl + c 
