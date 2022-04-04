# App Installation

## Installation

* Quicknote: All of these were tested on macOS, so there’s no guarantee it will work for Windows OS.

1. Have node installed on your computer https://nodejs.org/en/download/
  - This could also be installed using HomeBrew
    - To install HomeBrew, visit https://docs.brew.sh/Installation
    - Run `brew install node`


2. Run `npm install`. If everything goes well, you will find a **node_modules** folder created. This contains all of your application dependencies.


## Run the app

Run the following command
```bash
npm start
```

You’ll see something like the following
```bash
> github-actions-lesson@1.0.0 start
> node server.js

Listening on port 5000 
```

This will indicate that a webserver has been started and you can now visit the website on a browser at http://localhost:5000. Once you visit, you should see some text that says ‘Hello Dexcom!’. *Note*: If port 5000 does not work, you can change the port in the server.js file.

Stop the server by either pressing Ctrl + C or closing the terminal.

## Test the app

Run the following command
```bash
npm test
```

You should get something like the following
```bash
  GET /
    1) displays "Hello World!"


  0 passing (19ms)
  1 failing

  1) GET /
       displays "Hello World!":
     Error: expected 'Hello World!' response body, got 'Hello Dexcom!'
```

We will fix this unit test later, but for now, let’s leave it as is.

