to run 

1. node app.js
this launches lotion node with the chain
the console output will print GCI, which is needed by expressapp.js

2. expressapp.js
(change the GCI in the code)
this creates a http endpoint for the service.  
this will also open lotion client app to connect to lotion.

http endpoint
http://localhost:5001/writehash?hash=2lkj34kl32j4o2ij42

http://localhost:5001/readstate
this will return the current state.