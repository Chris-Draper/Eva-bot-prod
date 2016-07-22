#Helpful project links:

https://www.wolfe.id.au/2014/02/01/getting-a-new-node-project-started-with-npm/ 
//explains how to start the project
http://babeljs.io/docs/plugins/preset-es2015/
//gives the commands and files needed to make the javscript compile through javascript
http://jamesknelson.com/writing-npm-packages-with-es6-using-the-babel-6-cli/
//basic tutorial explaining babel clii
http://babeljs.io/docs/usage/cli/
//official babel cli website

Babel compile command: npm run babel
Http server command: npm run start
This fires up localhost:8080

Procfile is to specificy what npm commands Heroku needs to run to make this work on a server

Steps for setting up project environment

    1. npm init 
    2. npm install babel-cli babel-core --save-dev 
    3. npm install babel-preset-es2015 --save-dev 
    4. npm install http-server
    5. "scripts": {
            "babel": "babel --presets es2015 js/main.js -o build/main.bundle.js",
            "start": "http-server"
        }, //this goes in the package.json file in the root directory
    6. create a build folder at the root of the project for the compiled js files to go into
    7. don't forget to create a .gitignore so commits don't get too crazy with all of the npm packages
