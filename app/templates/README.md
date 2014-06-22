## <%= appName %>

This is a baseline app that pretty much is the instructions that are given on in [Atom-Shell's Getting Started](https://github.com/atom/atom-shell/blob/master/docs/tutorial/quick-start.md)

First you will need [atom-shell](https://github.com/atom/atom-shell), macs have a prebuilt binary, but everyone else read you os's documentation in the [development docs](https://github.com/atom/atom-shell/tree/master/docs/development).

## Installation

To install the this app just clone this repo, enter the directory, and install the dependencies.

    $ cd <%= _appName %>
    $ npm install

## Running

To run the app, just run `$ npm start`. A window will open with your application embedded within atom-shell.

## Development

To build on the the app all the files reside in the `app` directory.

    <% _appName %>
    └── app
        ├── package.json
        ├── main.js*
        └── index.html

With atom-shell the entry point is a javascript file specified in the `package.json` and in this application it is `main.js`

ready for more [atom-shell docs](https://github.com/atom/atom-shell/tree/master/docs)

## Packaging

To package your application as a distributable binary, just run:

    $ grunt package

The distributable file will be created in the `/bin` directory at the root of your project.

See the [atom-shell application distribution](https://github.com/atom/atom-shell/blob/master/docs/tutorial/application-distribution.md) wiki for more info.
