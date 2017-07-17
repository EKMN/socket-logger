# socket-logger
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/EKMN/socket-logger/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/EKMN/socket-logger.svg)](https://github.com/EKMN/socket-logger/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/EKMN/socket-logger.svg)](https://github.com/EKMN/socket-logger/issues)

## Okay... But what is it?
**socket-logger** is key + clickgrabber that transmits the user interaction event logs to a remote server through a websocket

## How do I install it?

#### *Step one:* Clone it
```Bash
git clone git@github.com:EKMN/socket-logger.git && cd socket-logger
```
#### *Step two:* Install dependencies through NPM
```Bash
npm install
```
#### *Step three:* Run the server
```Bash
npm start
```
#### *Step four:* Open index.html
**Windows**
```bash
start index.html
```
**Mac/Linux**
```bash
open index.html
```
#### *Bonus step:* Clean the logs
```Bash
npm run wipelogs
```

## What's done and what's not
- [X] A proof-of-concept barebones server + client implementation
- [ ] An actual exportable module that has a constructor that takes some arguments, e.g. new SocketLogger(ip, port)
- [ ] A plugin-like integration with a server framework, for example [Express](https://github.com/expressjs/express).
- [ ] A client-side integration with a browser fingerprint framework like [Fingerprintjs](https://github.com/Valve/fingerprintjs2)
- [ ] Testing 
