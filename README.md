# generator-atom-shell-app [![Build Status](https://secure.travis-ci.org/jacoblwe20/generator-atom-shell-app.png?branch=master)](https://travis-ci.org/jacoblwe20/generator-atom-shell-app)

This is a baseline app for [atom-shell](https://github.com/atom/atom-shell) that pretty much is the instructions that are given on in [Atom-Shell's Getting Started](https://github.com/atom/atom-shell/blob/master/docs/tutorial/quick-start.md)

## Getting Started

You will need to have [Yeoman](http://yeoman.io) installed.

```bash
$ npm install -g yo
```
To install generator-atom-shell-app from npm, run:

```bash
$ npm install -g generator-atom-shell-app
```

Finally, initiate the generator:

```bash
$ yo atom-shell-app
```

## Running 

To run the app its super simple just run the atom binary given to you while installing [atom-shell](https://github.com/atom/atom-shell) against the `src` directory.

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


## License

MIT
