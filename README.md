# socket-logger
An attempt to see how much info you can poll from a client in realtime using a socket.io connection

## Okay... But what is it?
"socket-logger" is key + clickgrabber that transmits the user interaction event logs to a remote server through a websocket

## How do I install it?

Step one: **Clone it**
```
git clone git@github.com:EKMN/socket-logger.git && cd socket-logger
```
Step two: **Install dependencies through NPM**
```
npm install
```
Step three: **Run the server**
```
npm start
```
Bonus step: **clean the logs**
```
npm run wipelogs
```

## What's done and what's not
- [X] A proof-of-concept barebones server + client implementation
- [ ] An actual exportable module that has a constructor that takes some arguments, e.g. new SocketLogger(ip, port)
- [ ] A plugin-like integration with a server framework, for example [Express](https://github.com/expressjs/express).
- [ ] Client-side integration with a browser fingerprint framework like [Fingerprintjs](https://github.com/Valve/fingerprintjs2)
