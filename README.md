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

Create a new empty directory for you project, and `cd` into it:

```bash
$ mkdir app-name && cd $_
```

Finally, initiate the generator from within your application directory:

```bash
$ yo atom-shell-app
```

## Running

To run the app, just run `$ npm start`. A window will open with your application embedded within atom-shell.

## Development

To build on the the app all the files reside in the `application` directory.

    <% _appName %>
    └── app
        ├── package.json
        ├── main.js*
        └── index.html

With atom-shell the entry point is a javascript file specified in the `package.json` and in this application it is `main.js`

ready for more [atom-shell docs](https://github.com/atom/atom-shell/tree/master/docs)


## License

MIT
