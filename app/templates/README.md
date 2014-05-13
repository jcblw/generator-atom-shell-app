## <%= appName %>

This is a baseline app that pretty much is the instructions that are given on in [Atom-Shell's Getting Started](https://github.com/atom/atom-shell/blob/master/docs/tutorial/quick-start.md)

First you will need [atom-shell](https://github.com/atom/atom-shell), macs have a prebuilt binary, but everyone else read you os's documentation in the [development docs](https://github.com/atom/atom-shell/tree/master/docs/development).

## Installation

To install the this app just clone this repo and enter the directory.

    <% if ( typeof repo === 'string' ) { %>
    $ git clone {%= repo %}
    <% } %>
    $ cd <% _appName %>

## Running 

To run the app its super simple just run the atom binary given to you while installing [atom-shell](https://github.com/atom/atom-shell) against the `application` directory.

    $ ~/path-to/atom src

A window will open with the version of NodeJS and atom-shell

## Development

To build on the the app all the files reside in the `application` directory.

    <% _appName %>
    └── src
        ├── package.json
        ├── main.js*
        └── index.html

With atom-shell the entry point is a javascript file specified in the `package.json` and in this application it is `main.js`

ready for more [atom-shell docs](https://github.com/atom/atom-shell/tree/master/docs)