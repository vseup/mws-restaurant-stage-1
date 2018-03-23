# Restaurant Reviews
___

**Restaurant Reviews** is a mobile-ready web application, that helps user find a good restaurant in their neighborhood. The design is responsive on different sized displays and the page is accessible for screen reader use. For a seamless offline experience for the users a service worker is added.

## Usage

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like and if you want to add some changes.

**Restaurant Information** is contained in data/restaurants.json.
Required code for regustering the **Service worker** is stored in js/app.js.
Code for the **Service worker** you can find in the service-worker.json file.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write. 



