Web Blog App
======
- Node.js: v4.4.4
- Express: v4.13.4
- MongoDB: v2.6.1
- Bootstrap: v3.3.6

How does it work:
- Have Node.js, Express and MongoDB installed.
```
$ git clone https://github.com/hewangup/A_Web_Blog_App
$ cd A_Web_Blog_App
$ npm install // install dependencies
$ mkdir database // to store data
```
- Navigate to the directory in which you placed your MongoDB files(let's say /Users/Desktop for now), and then into the "bin" directory. From that directory, type the following:
```
$ mongod --dbpath Users/Desktop/A_Web_Blog_App/database/
```
- Mongo server has started and says "waiting for connections on port 27017". Open another terminal and navigate into the A_Web_Blog_App directory, type the following:
```
$ node app.js
```
- Open your browser and go to "https://localhost:4000", you'll see the web blog app is running.
------

What does it look like:
------

![](/public/images/s0.png)
---
![](/public/images/s1.png)
---
![](/public/images/s2.png)
---
![](/public/images/s3.png)
---
![](/public/images/s4.png)
---
![](/public/images/s5.png)
---
![](/public/images/s6.png)
---
![](/public/images/s6.5.png)
---
![](/public/images/s7.png)
---
![](/public/images/s8.png)
---
![](/public/images/s9.png)
---
![](/public/images/s10.png)
---
![](/public/images/s11.png)


#####Notice: Upload File -> Please use markdown syntax.
