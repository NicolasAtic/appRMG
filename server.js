const express = require('express');
const superstatic = require('superstatic');
const path = require('path');

const app = express();

// Custom middleware to handle 'if-modified-since' header
app.use((req, res, next) => {
const modifiedSince = req.headers['if-modified-since'];
if (modifiedSince) {
    try {
    req.headers['if-modified-since'] = new Date(modifiedSince);
    } catch (err) {
    console.error('Invalid date format for if-modified-since header:', modifiedSince);
    }
}
next();
});

// Use superstatic to serve from the 'public' directory
app.use(superstatic({
config: {
    public: 'public'
},
cwd: path.join(__dirname)
}));

const PORT = 5000;
app.listen(PORT, () => {
console.log(`Server started at http://localhost:${PORT}`);
});
const open = require('open');
open('http://stackoverflow.com/questions/8500326/how-to-use-nodejs-to-open-default-browser-and-navigate-to-a-specific-url');
