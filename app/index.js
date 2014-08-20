'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var AtomShellAppGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the marvelous Atom Shell App generator!'));

        var prompts = [{
            name: 'appName',
            message: 'What is the name of your app',
            default: 'Test Atom App'
        },{
            name: 'version',
            message: 'What version is your app',
            default: '0.0.0'
        },{
            name: 'repo',
            message: 'What is the repository url'
        },{
            name: 'author',
            message: 'What is your name',
            default: 'anon'
        }];

        this.prompt(prompts, function (props) {
            this.appName = props.appName;
            this.version = props.version;
            this.author = props.author;
            if ( props.repo ) {
                this.repo = props.repo;
            }
            done();
        }.bind(this));
    },

    _dashize: function( name ) {
        return ('' + name)
            .trim()
            .toLowerCase()
            .replace(/ /g, '-');
    },

    app: function () {
        this._appName = this._dashize( this.appName );
        this.template('app/main.js', 'app/main.js');
        this.template('app/package.json', 'app/package.json');
        this.template('app/index.html', 'app/index.html');
        this.template('package.json', 'package.json');
        this.template('README.md', 'README.md');
        this.template('Gruntfile.js', 'Gruntfile.js');
    }
});

module.exports = AtomShellAppGenerator;
